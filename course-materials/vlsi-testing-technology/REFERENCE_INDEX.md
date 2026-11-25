# VLSI Testing Reference Index

## Status

This index describes the private local archive at `reference/`. The archive is ignored by Git and must never be copied into the published site.

Archive snapshot: 2026-11-25. Inventory at import: 1,382 files, approximately 407.64 MB.

The public bibliography remains `src/references/README.md`. This file records where the underlying local evidence lives and how it may be used.

## Primary Evidence

| Local path | Role | Publication boundary |
| --- | --- | --- |
| `reference/VLSI Test Principles and Architectures Design for Testability.pdf` | Main 2006 textbook by Wang, Wu, and Wen; chapter and printed-page verification | Copyrighted book; local consultation only |
| `reference/VLSI-Test-Principles.txt` | Extracted text for searching and page/structure checks | Derived from the copyrighted book; local only |
| `reference/VLSI-Test-Principles-markdown/` | Chapter Markdown plus page images generated for traceable consultation | Derived from the copyrighted book; local only |
| `reference/materials-v1/` | Earlier extracted course material, images, and review inputs | Historical internal source; not publication-ready |
| `reference/chapter1-cases/` | eFlash and IGBT case assets and manifests | Mixed public/private provenance; check each asset before publication |
| `reference/2024-2-IGBT/` | IGBT and gate-driver diagrams, photographs, and documents | Instructor-owned unpublished material unless explicitly cleared |
| `reference/audit/README.md` | Coverage audit explaining why version 1 was rewritten | Internal review evidence; do not publish |
| `reference/presentation-v1/` | First-version 8-deck Marp sources | Historical comparison only; superseded and known incomplete |

## Additional Books And Historical Decks

| Local path | Role | Publication boundary |
| --- | --- | --- |
| `reference/超大规模集成电路测试.pdf` | Additional Chinese VLSI testing reference | Copyrighted; local consultation only |
| `reference/超大规模集成电路测试：数字、存储器和混合信号系统_11451082.pdf` | Additional Chinese testing reference | Copyrighted; local consultation only |
| `reference/第1章.pptx` through `reference/第12章.pptx` | Historical teaching decks organized around the textbook chapter structure | Source material only; not the current course presentation |
| `reference/55nm工艺节点eflash存算一体AI芯片.pptx` | eFlash case source deck | Contains unpublished case material |
| `reference/流片图.png` | eFlash tapeout image also used in cleared public course assets | Verify intended public use before replacing the published copy |

## Current Presentation Sources

The current public decks are:

```text
src/presentation/01-testing-fault-models-and-economics.md
src/presentation/02-design-for-testability-and-scan.md
src/presentation/03-simulation-and-atpg.md
src/presentation/04-logic-bist-and-test-compression.md
src/presentation/05-logic-diagnosis.md
src/presentation/06-memory-test-diagnosis-and-repair.md
src/presentation/07-boundary-scan-core-and-mixed-signal-testing.md
src/presentation/08-nanometer-test-trends-and-high-speed-io.md
```

They replace `reference/presentation-v1/`. The current decks total 303 slides. Chapter 5 was rebuilt from 33 to 73 slides so that its three 45-minute sessions each contain an independent engineering story, foundational concepts, diagrams, a worked example, limitations, and a transfer checkpoint. The first-version audit found only 159 slides, about 95 substantive theory slides, a theoretical-capacity shortfall, and discontinuous chapter-7 and chapter-8 lecture sequences. Those findings are historical and must not be used to describe the current decks.

## Citation And Evidence Rules

1. Use `[1]` only for the 2006 Wang, Wu, and Wen textbook.
2. Verify chapter boundaries and printed page numbers against the local book or chapter files, but paraphrase rather than reproducing long passages.
3. Modern standards, tools, open courses, and post-2006 books must be checked against the bibliography in `src/references/README.md`, not inferred from the 2006 textbook.
4. Treat the eFlash and IGBT cases according to three evidence levels:
   - verified: object, conditions, method, samples, raw result, and acceptance threshold are all present;
   - material claim: a result is stated without all test conditions;
   - unresolved: only a layout, plan, target, or photograph exists.
5. Never infer yield, performance, reliability, defect coverage, or successful testing from a layout or package photograph.
6. Never publish a private archive path or copy a copyrighted file into `courses/` or `dist/`.

## Refresh Procedure

When the local VLSI source repository changes:

1. Synchronize editable course content from the external source into `course-materials/vlsi-testing-technology/`, excluding `.git/`, `node_modules/`, `tmp/`, caches, generated presentation HTML, and generated VuePress output.
2. Preserve the site-specific VuePress `base: "/courses/vlsi-testing-technology/"`.
3. Rebuild with `pnpm run docs:build`.
4. Run `node scripts/check_deck_layout.mjs`.
5. Replace `courses/vlsi-testing-technology/` with `course-materials/vlsi-testing-technology/src/.vuepress/dist/`.
6. Run the root `npm test`.
