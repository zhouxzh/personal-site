# Embedded course snapshots

The directories in this folder are static course-site snapshots published beneath `zhouxianzhong.cn`.

| Path | Source repository | Published path |
| --- | --- | --- |
| `vlsi-testing-technology/` | `zhouxzh/vlsi-testing-technology` | `/courses/vlsi-testing-technology/` |
| `microelectronic-device-modeling/` | `zhouxzh/microelectronic-device-modeling-sim` | `/courses/microelectronic-device-modeling/` |

Each snapshot includes the generated VuePress site, course assets, and presentation HTML. The original repositories remain the editable source of truth.

## Updating a course snapshot

1. Clone or update the source repository outside this repository.
2. Change the VuePress `base` setting to its published path in the table above.
3. Build the course with `pnpm run docs:build`.
4. Replace the corresponding directory in `courses/` with the generated `src/.vuepress/dist/` directory.
5. Rewrite any remaining old GitHub Pages absolute URLs to the matching `https://zhouxianzhong.cn/courses/.../` address.
6. Run `npm run build` in the repository root and verify the course routes before committing.

The root `build.mjs` copies the course snapshots into `dist/courses/` for Cloudflare Workers Static Assets deployment.
