# Gamehok – Gaming Tournament Platform
Gamehok is a modern web application designed for hosting and participating in competitive online game tournaments.
It is built with Next.js (App Router), Tailwind CSS, and JavaScript to deliver a responsive, high-performance, and gaming-themed user experience.

# Features
Home / Landing Page

Header Section:

Displays user avatar, profile menu, notifications, and virtual currencies (coins & tickets).

Fixed at the top for better navigation.

Hero Section with Video Background:

Uses <video> tag for immersive gaming intro visuals.

Engages users with an attractive landing experience.

Game Carousel:

Fetches games dynamically from the Game API.

Includes “Popular Games” section powered by dummy data.

Smooth horizontal scroll with clickable game cards.

Tournament Carousel:

Fetches tournaments dynamically from the Tournament API.

Each card shows thumbnail, status (live/upcoming/completed), organizer, team size, entry fee, prize pool, registered players.

Clickable → navigates to Tournament Detail Page.

People to Follow Section:

Dummy list of gamers with avatars & Follow button.

Encourages community engagement.

Premium Banner:

Displays upgrade CTA with benefits like extra coins, tickets, and premium features.

Bottom Navigation (Mobile) / Sidebar (Desktop):

Mobile (<768px): Fixed at the bottom with glowing icons.

Desktop (≥768px): Transforms into a floating neon sidebar with hover glow & active highlights.


# Tournaments

Tournament List Page:

Shows all tournaments in card format.

Cards include status, prize pool, registered count, organizer details, and start time.

Tournament Detail Page:

Dynamic route: /tournaments/[id] fetches tournament data from API.

Displays:

Thumbnail & status badge

Organizer details

Entry fee & prize pool

Start time & registration info

Tabs Navigation: Overview | Players | Rules

Tabbed design for better UX.

# Games

Game List Page:

Displays games fetched from API.

Includes Popular Games Section using dummy data.

Each card is linked to /games/[id] for details.

Game Detail Page:

Dynamic route: /games/[id] renders details from dummy dataset.

Includes:

Game thumbnails

Game description

Upcoming tournaments for that game

CTA buttons: Join / Learn More

Tabs Navigation (optional): Overview | Tournaments | Community

# Other Functionalities

Responsive Design:

Mobile-first layout, optimized for tablets & desktops.

Header pinned to top, BottomNav pinned to bottom (on mobile).

Loading States:

Custom loading UI for API fetches.

Error Handling:

Custom Not Found (404) Page with gaming-style glowing neon effects.

Animations:

Implemented with Tailwind transitions & keyframes (no external animation libraries).

Hover effects, neon glow, and subtle scaling animations for modern look.

Dummy Data Usage:

Used for Popular Games and Upcoming Tournaments where APIs are not yet implemented.

🛠️ Tech Stack

Framework: Next.js 14 (App Router)

Styling: Tailwind CSS

Icons: Lucide React
 + Custom SVGs

Image Optimization: next/image

Routing: Dynamic routes /tournaments/[id] and /games/[id]

# Data Fetching:

Games API

Tournaments API

Dummy objects for Popular Games & Follow suggestions

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Libraries Used
react-icons

lucide-react