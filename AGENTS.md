<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# 5:55 AM Studio

## Brand

- Brand name: 5:55 AM
- Descriptor: Independent Web Studio
- Core idea: 5:55 AM represents a new beginning — the beginning of a new day and the beginning of Charl's professional journey.
- Brand philosophy: Straight to what matters.
- Core approach: Listen. Build. Improve.
- Mission: Build simple, purposeful digital experiences around what people actually need.
- Brand personality: minimal, editorial, human, precise, honest, thoughtful, approachable, quietly confident.
- Never use exaggerated agency language such as "world-class", "revolutionary", "cutting-edge", or similar unsupported claims.

## Target audience

- Primary audience: local businesses.
- Initial niche: beauty and grooming businesses, including salons, spas, nail studios, barbers, and similar businesses.
- Design and content should prioritize clarity, trust, visual quality, and conversion.

## Visual direction

- Overall feeling: quiet confidence.
- Style: minimal, editorial, premium but human.
- Avoid generic SaaS aesthetics and overly rounded UI.
- Color system:
  - Ink: `#0A0A0A`
  - Paper: `#F7F7F5`
  - White: `#FFFFFF`
  - Stone: `#8A8A85`
  - Border: `#DEDEDA`
- Do not introduce accent colors unless explicitly approved.
- Typography direction:
  - Display/headline: Instrument Serif
  - UI/body: Inter
- Prefer generous whitespace and strong typography.
- Desktop content max width: approximately 1280px.
- Use a 12-column grid on desktop where appropriate.
- Desktop horizontal padding: approximately 32px.
- Mobile horizontal padding: approximately 20px.
- Border radius should generally stay subtle, around 2px–6px.
- Avoid excessive pills and `999px` border radii.
- Animations should be restrained, intentional, and performant.
- Respect `prefers-reduced-motion`.

## UX and content

- The website should communicate what 5:55 AM does within seconds.
- Prefer concise copy over large blocks of generic marketing language.
- Keep the primary conversion path obvious.
- Use human, direct language.
- Prefer:
  - "What we build." instead of "Our Services."
  - "Why 5:55 AM?" instead of "About Us."
  - "How we work." instead of "Our Process."
  - "Let's build something." instead of "Contact Us."
- Core homepage headline: "You don't need more. You need what matters."
- Core CTA direction: "Start a project →"
- Never invent client work, testimonials, statistics, partnerships, or results.
- Clearly label concept work as `CONCEPT` or `CONCEPT PROJECT`.

## Engineering

- Use Next.js App Router.
- Use TypeScript.
- Use Tailwind CSS v4 conventions already present in this repository.
- Prefer simple, maintainable React components.
- Avoid unnecessary dependencies.
- Do not add a library when the requirement can be solved cleanly with existing platform or project capabilities.
- Build mobile-first and ensure responsive behavior at all relevant breakpoints.
- Keep accessibility as a first-class requirement.
- Use semantic HTML.
- Ensure interactive elements are keyboard accessible.
- Preserve good performance and avoid unnecessary client components.
- Prefer Server Components unless client-side interactivity is genuinely required.
- Do not use `"use client"` by default.
- Keep components focused and reusable without over-engineering.
- Avoid speculative abstractions.

## Project workflow

- Before modifying code, inspect the relevant files and understand their current structure.
- Make the smallest coherent change required for the task.
- Do not modify unrelated files.
- Do not overwrite working code unnecessarily.
- After meaningful changes, run the appropriate lint, build, and type checks.
- If a task is ambiguous, state the assumption before making a large structural change.
- Never remove functionality unless explicitly requested.
- Do not install packages without explicitly explaining why the dependency is necessary.

## Git safety

- Keep changes focused.
- Never commit secrets, environment variables, API keys, or credentials.
- Do not rewrite Git history unless explicitly requested.
- Before a large change, verify the working tree state.
- Use clear commit messages.
