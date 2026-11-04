# Nandish: The Journey — PRD

## Problem statement
Frontend-only portfolio game for the Wispr hiring team. Nandish's story plays as seasons: Season 1 (college, CGPA 7.33, internship at Supertails), Season 2 (Supertails ops intern → data analyst → break → business analyst: dashboards, pipelines, RCAs, target planning, coins AI/loyalty project, vendor analytics tool, workflow app, BRD). Season 3 "The Wispr Level" is a locked trailer ("hire Nandish to unlock"). Also includes a $3,000 Work Setup Wishlist, a design prompt doc (view/copy/download), and a Pitch page. No backend, login or AI. Progress is saved in localStorage (nj_progress_v1).

## Design
Calm ivory and indigo look, cartoon character based on the user's photo, dark Wispr finale.

## Implemented
- Landing, Journey map, LevelPlay (choose an option → reveal), Wishlist, Pitch, Design Prompt page
- June 2026: fixed blank page on locked level (now redirects), waveform jitter, mobile menu a11y (SheetTitle/Description), duplicate or missing locked toast; replaced "Wispr Flow" with "Wispr" everywhere; Interests now uses placeholders; added LinkedIn and GitHub links; wishlist count now says "1 item"

## Backlog
- June 2026 (2): tab title set; real interests, email, LinkedIn and GitHub added; portfolio and video links removed; design page renamed "How I Build This with Voice" (Dubai story plus spoken prompts); 2.4 became the Nifty Vendor Portal; 2.5 coins now shows 5 owned steps with no AI claim; 2.6 adds Manager, Data & AI; wishlist item is now Claude
- June 2026 (3): Season 1 is now 1.1 Stream, 1.2 COVID, 1.3 Placement Club (merged with Meeting Companies), 1.4 CGPA, 1.5 Internship. Added 2.6 "From 10 Steps to 3"; One App/BRD is now 2.7. Each answer shows a match or no-match banner (coins 2.5 always matches). New /results page with a downloadable PNG score card. Progress key is now nj_progress_v2; answers are stored in nj_answers_v1
- June 2026 (4): added 1.2 Class Rep; Season 1 is now 1.1 to 1.6 (13 levels total). Added a live "Matched so far" score on each level and a hidden One Piece straw-hat easter egg on 1.3 COVID. Storage keys are now nj_progress_v3 and nj_answers_v2
- P0: user review of the visuals (character, wishlist images)
- P1: real interests, email, portfolio and video links (still [FILL] placeholders)
- P2: shareable saved progress (Phase 2)
