---
name: deutsch-pro-curriculum
description: Architecture, data conventions, CEFR A1-B1 pedagogy, voice clarity pipeline, and verification workflow for Deutsch Pro (React 19 + TypeScript).
---

# Deutsch Pro Curriculum & Architecture Skill

## Data Standards
- Vocabulary items use `VocabTuple`: `[de, tr_ru, ru, category, cefrLevel, exDe, exRu, forms]`.
- Every German noun includes its definite article (`der`, `die`, or `das`) for gender color-coding.
- Phonetic transcriptions in Russian use combining acute stress marks (e.g., `ди во́нунг`).
- Keep zero duplicate German keys across `src/data/vocab.ts`.

## Build & Verification
1. Always run `npm run typecheck` (`tsc --noEmit`) after editing TypeScript files.
2. Bundle `dist/bundle.js` and self-contained HTML outputs (`index.html`, `Немецкий_с_нуля_офлайн (1).html`) via `node scripts/build.js`.
3. Validate dataset counts and React server rendering via `node scripts/verify.js`.
