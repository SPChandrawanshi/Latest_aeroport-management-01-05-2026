# Project Rules

These rules must be strictly followed while generating the Aeroport Management System frontend.

## Development Rules
- **Frontend Only Project**
    - No backend development
    - No database creation
    - No API integrations

## Dashboard Rules
- **Total Dashboards = 6**
- **Each dashboard must contain exactly 8 menus**
- Menus must remain fixed after creation.
- Each dashboard must remain independent.
- Do not merge dashboards.

## UI Layout Rules
Every page must contain:
- Sidebar
- Top Navbar
- Content Area

## Responsive Rules
- **Mobile**
    - Sidebar collapses to hamburger menu.
    - Tables scroll horizontally.
    - Forms stack vertically.
    - Cards adjust width automatically.
- **Tablet**
    - Two column dashboard grid.
- **Desktop**
    - Full dashboard layout with sidebar.

## Component Rules
Create reusable components:
- Sidebar
- Navbar
- Dashboard Cards
- Tables
- Forms
- Notifications

## Navigation Rules
- React Router must be used.
- Each menu must open a different page.

## Styling Rules
- Use Tailwind CSS.
- Avoid inline CSS.
- Use consistent spacing and typography.

## Code Structure Rules
- Use modular folder structure.
- Avoid duplicate UI components.
- Keep dashboard pages separated.
