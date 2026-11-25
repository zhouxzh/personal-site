# Repository Instructions

## Purpose

This repository publishes `zhouxianzhong.cn`, a personal academic site and course hub. The public site runs as a Cloudflare Worker using static assets from `dist/`.

## Source Of Truth

| Concern | Authoritative location |
| --- | --- |
| Public homepage shell | `index.html`, `styles.css`, `script.js` |
| Editable course sources | `course-materials/<course-slug>/` |
| Publishable course snapshots | `courses/<course-slug>/` |
| Cloudflare build output | `dist/` (generated, do not edit) |
| VLSI private reference archive | `course-materials/vlsi-testing-technology/reference/` (local-only, ignored) |

Never edit generated files in `dist/` or generated presentation HTML in `courses/*/presentation/`. Fix the source in `course-materials/`, rebuild it, and replace the corresponding published snapshot.

## Course Mapping And References

| Course | Public path | Editable source | Course references |
| --- | --- | --- | --- |
| Python 编程基础 | `/courses/python-basic/` | `course-materials/python-basic/` | `README.md` teaching plan; `day1.md` through `day7.md`; per-day assets |
| Python 数据分析 | `/courses/python-data-analysis/` | `course-materials/python-data-analysis/` | `README.md`, `syllabus.md`, `assignments/`, `data/`, `scripts/`; upstream teaching references listed in `README.md` |
| FPGA 系统设计 | `/courses/fpga-system-design/` | `course-materials/fpga-system-design/` | `presentation/`, `course-design/`, `verilog/`, `FPGA-Program/`; source pages under `src/` |
| 嵌入式系统设计 | `/courses/embedded-system-design/` | `course-materials/embedded-system-design/` | `README.md`, `presentation/`, `2026课程设计/`, `homework/`, `参考案例/`, `学生作品展示/` |
| VLSI 测试技术 | `/courses/vlsi-testing-technology/` | `course-materials/vlsi-testing-technology/` | `src/references/README.md`; `src/plan/README.md`; `PRESENTATION.md`; `src/presentation/`; private archive indexed in `course-materials/vlsi-testing-technology/REFERENCE_INDEX.md` |
| 微电子器件建模与仿真 | `/courses/microelectronic-device-modeling/` | `course-materials/microelectronic-device-modeling/` | `src/README.md`, `src/plan/README.md`, `PRESENTATION.md`, `src/presentation/` |
| 强化学习学习笔记 | `/courses/reinforcement-learning/` | `course-materials/reinforcement-learning/` | `reinforcement_learning.pdf`, `reinforcement_learning.html`, `reinforcement_learning.ipynb`; LaTeX source in `reinforcement_learning.tex` |
| Python 科学计算中文译本 | `/courses/python-scientific-computing/` | `course-materials/python-scientific-computing/` | `Readme.md`; upstream DOI and citation; `LICENSE`, `LICENSE.TXT`; book sources in `book/` |

The public course index is `courses/index.html`; `courses/README.md` records the published-path mapping.

## VLSI Reference Boundary

The complete local reference archive is:

```text
course-materials/vlsi-testing-technology/reference/
```

It is private, Git-ignored, and must not be copied into `courses/`, `dist/`, or any public asset directory. It contains copyrighted books and unpublished course material.

The authoritative public bibliography is:

```text
course-materials/vlsi-testing-technology/src/references/README.md
```

The archive index and evidence-use rules are in:

```text
course-materials/vlsi-testing-technology/REFERENCE_INDEX.md
```

Historical `reference/presentation-v1/` files are not the current presentation source. They document the first version that failed the coverage audit. The current slides are the numbered Markdown files under `course-materials/vlsi-testing-technology/src/presentation/`.

## VLSI Presentation Rules

- Keep exactly 8 numbered Marp sources, one for each chapter.
- Each chapter must contain three continuous 45-minute theory sections. Most chapters currently use 32-33 slides; chapter 5 deliberately uses 90 slides so each session has an independent story, foundational concepts, diagrams, a worked example, limitations, and a transfer task.
- The chapter 5 design template and its GitHub inspiration boundaries are documented in `course-materials/vlsi-testing-technology/PRESENTATION.md`.
- Do not reintroduce experiments, EDA operation walkthroughs, instrument measurements, or course projects into this pure-theory course.
- Keep the central question of each chapter visible and connect all three sections to it.
- Distinguish verified results, material claims, and unresolved evidence. Never infer measured performance, yield, reliability, or test coverage from a layout photograph alone.
- Cite the main textbook as `[1]`. Use the current bibliography in `src/references/README.md` for modern books, standards, open course archives, and tools.
- Treat 2006 textbook content as a historical baseline when discussing current standards, process nodes, or tools.
- `reference/presentation-v1/` is historical evidence only; never publish or copy it as the current deck.
- `reference/第1章.pptx` through `第12章.pptx` are source material, not current public slides.

## Updating A VuePress Course

For VLSI:

```powershell
Set-Location course-materials/vlsi-testing-technology
pnpm run docs:build
node scripts/check_deck_layout.mjs
```

Then replace `courses/vlsi-testing-technology/` with the generated `course-materials/vlsi-testing-technology/src/.vuepress/dist/` directory. Preserve the course base path:

```text
/courses/vlsi-testing-technology/
```

For the device-modeling course:

```powershell
Set-Location course-materials/microelectronic-device-modeling
pnpm run docs:build
```

Its published base path is:

```text
/courses/microelectronic-device-modeling/
```

For other course types, follow the build notes in the course source and then replace only the matching directory under `courses/`.

## Publishing And Verification

From the repository root:

```powershell
npm test
```

This builds `dist/` and verifies every generated HTML page's local resources and duplicate IDs. Before publishing:

1. Confirm every changed course has been rebuilt from `course-materials/`.
2. Confirm no old `zhouxzh.github.io/<course>/` links remain in the corresponding `courses/` snapshot.
3. Confirm private reference files are absent from Git and `dist/`.
4. Run `npm test`.
5. Inspect `git diff --stat` and ensure no generated cache or dependency directory is staged.
6. Push to `main`; Cloudflare deploys the Worker from `dist/`.

## Content And Copyright Rules

- Do not commit textbooks, papers, paid standards, student personal data, or unpublished measurement records.
- Public pages may contain original explanations, short attributed quotations, bibliographic references, links, and instructor-owned diagrams cleared for publication.
- Keep the source, license, and attribution files with translated or third-party material.
- Do not link from public pages to the private VLSI reference directory.
- If a source cannot be verified, label it as pending or unresolved rather than filling the gap with invented data.
