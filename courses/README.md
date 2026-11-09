# Course Sites

Static course pages published beneath `zhouxianzhong.cn/courses/`.
The public directory is available at `/courses/`.

| Published path | Editable source in this repository |
| --- | --- |
| `/courses/python-basic/` | `course-materials/python-basic/` |
| `/courses/python-data-analysis/` | `course-materials/python-data-analysis/` |
| `/courses/fpga-system-design/` | `course-materials/fpga-system-design/` |
| `/courses/embedded-system-design/` | `course-materials/embedded-system-design/` |
| `/courses/vlsi-testing-technology/` | `course-materials/vlsi-testing-technology/` |
| `/courses/microelectronic-device-modeling/` | `course-materials/microelectronic-device-modeling/` |
| `/courses/reinforcement-learning/` | `course-materials/reinforcement-learning/` |
| `/courses/python-scientific-computing/` | `course-materials/python-scientific-computing/` |

The `course-materials/` directories hold the migrated source files. The root
`build.mjs` copies the published pages from `courses/` to `dist/courses/`.

For VuePress courses, install dependencies in the source directory and run its
`docs:build` script. Copy the generated `.vuepress/dist/` directory into the
matching `courses/<slug>/` snapshot before running the root build. Python Basic
lesson pages are generated from the Markdown files with Pandoc. Keep book
licenses and attribution files with the translated material.
