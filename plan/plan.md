# Nandish: The Journey — An Interactive Life-Journey Game (Wispr Hiring Challenge)

A narrative, season-based browser game that tells Nandish's real story from college to today as a series of
levels, choices, and reveals. It doubles as a living resume and a direct pitch to the Wispr Flow growth team.

## Who it's for
Built specifically for the **Wispr Flow hiring team** (growth / influencer marketing & partnerships, India).
The whole experience is framed to show creativity, extreme ownership, and "work over credentials," and it ends
by making the case to hire Nandish. Secondary audience: anyone with the public link who wants to experience the story.

## Core features and experience
- **Story as levels.** Each real obstacle or milestone is a playable level. The player is shown the situation and
  faces a multiple-choice decision ("What would you do?").
- **Choose, then reveal.** After the player picks an option, the game reveals what Nandish actually did and the
  reasoning behind it. No wrong-answer penalty; the point is to learn how he thinks.
- **Two seasons + a Season 3 hook.**
  - **Season 1 — College Journey:** multiple levels covering college, company meetings, internship outcomes,
    a final CGPA of 7.33, and landing the internship at SuperTales.
  - **Season 2 — Career Journey at SuperTales:** operations intern to data analyst path, a three-to-four month
    break for personal reasons, then business analyst. Levels cover dashboards, pipelines, RCAs, target planning,
    the AI / loyalty "coins" project, the vendor analytics tool, consolidation of workflows into a single app,
    and the BRD creation process.
  - **Season 3 — The Wispr Level:** locked until Season 2 is completed. On completion it reveals a preview/trailer:
    Nandish attempting the Wispr hiring challenge itself, relying on Emergent and voice ("speaking out prompts") to
    build this app and portfolio. The level then stays locked behind one final action: to unlock the full season,
    Wispr needs to hire Nandish. The ending is the pitch.
- **The $3,000 grant page — "My Work Setup Wishlist."** A fun, cart/wishlist-style page styled like the game. It
  lists the setup items Nandish wants, each as a wishlist card with a price, adding up toward the $3,000 grant with
  a running total. Starting items (editable): an adjustable/electric standing desk, a decent mic for speaking out
  thoughts, cloud compute for managing his AI agents, a power-nap sleeping pillow, and a mini snack counter for
  small snacks. More items can be added later.
- **Progress and unlock feel.** A season/level map shows completed, current, and locked levels, with Season 3
  visibly locked until the finale.
- **Portfolio ending.** A closing screen summarizing skills, projects, and a direct "why hire me" note for Wispr,
  plus space for the challenge deliverables (portfolio link, video, the $3,000 grant note).
- **The design-prompt document.** Alongside the game, a single copy/paste-ready design prompt document
  (Title, Role & stance, Task, Context, Inputs, Output requirements, Constraints/Do-nots, Examples,
  Execution checklist, Conflict resolution) that captures the concept, downloadable from within the app.

## User flow
1. Landing / title screen: "Nandish: The Journey" with a start button and a one-line premise.
2. Season select → Season 1 map → play levels in order.
3. Each level: read the situation → pick an option → see the reveal (Nandish's actual move + reasoning) → continue.
4. Finish Season 1 → Season 2 unlocks → play through career levels the same way.
5. Finish Season 2 → Season 3 ("The Wispr Level") unlocks a preview/trailer of Nandish building this very portfolio
   with Emergent and voice, then presents the final locked gate: "To unlock the full season, hire Nandish."
6. A dedicated **$3,000 Work Setup Wishlist** page (cart/wishlist style) reachable from the menu and the ending.
7. Ending screen: skills/projects recap, pitch to Wispr, link to the design-prompt document.

## UI/UX feel
A clean, confident, game-like interface with a clear level map, readable story cards, satisfying
choose-then-reveal transitions, and a distinct unlock moment for Season 3. Tone is personal and professional,
not corporate. All proper nouns, project names ("coins", SuperTales, Whisper), places, and roles are preserved
exactly as given. Mobile-friendly so it plays well from a shared link.

## Implementation phases

**Phase 1 — MVP (built now):**
- Full playable game: title screen, season/level map, all Season 1 and Season 2 levels with
  multiple-choice → reveal mechanics, Season 2 completion unlocking Season 3 ("The Wispr Level": preview/trailer
  of building this portfolio with Emergent + voice, then the "hire Nandish to unlock" pitch).
- The **$3,000 Work Setup Wishlist** page: cart/wishlist style, editable item cards with prices, running total
  toward $3,000 (standing desk, mic, cloud compute, power-nap pillow, mini snack counter to start).
- Content authored from the concept provided in the brief.
- Closing portfolio/pitch screen.
- The copy/paste-ready design-prompt document, viewable and downloadable in-app.
- Progress tracked for the current play session.

**Phase 2 — later:**
- Incorporate exact details from Nandish's resume (dates, metrics, extra projects) once provided, to enrich level text.
- Saved progress across visits and shareable "where I am" state.
- Richer visuals/illustrations per level and sound/voice touches.

**Phase 3 — later:**
- Playable Season 3 teaser levels, analytics on how visitors play, and embedding of the submission video.

## Assumptions
- Author name shown as **"Nandish: The Journey."** per your answer.
- Season 3 stays locked until the Season 2 finale, then shows a preview/trailer of Nandish building this portfolio
  with Emergent and voice, followed by the "hire Nandish to unlock the full season" pitch (no separate playable
  Season 3 levels in Phase 1).
- The $3,000 wishlist uses the items you gave (adjustable standing desk, mic, cloud compute for AI agents, power-nap
  pillow, mini snack counter) as editable cards with sample prices you can adjust; more can be added later.
- The `[FILL: target audience]` field is set to the **Wispr Flow hiring team**.
- Level content for Phase 1 is drawn strictly from the concept in the brief; no facts are invented. Where the
  resume would add specifics, neutral placeholders are used until the resume is provided.
- Single-player, no login; progress held for the session only in Phase 1.
- Delivered as one app containing both the game and the design-prompt document.
- No third-party integrations, payments, or AI calls are needed for Phase 1.
