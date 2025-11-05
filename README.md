# Placement Tracker Dashboard (Mazer Template)

## 🎯 Objective
Build a Placement Tracker Dashboard using the Mazer Admin Template, featuring:
- Total drives applied, selected, pending, and upcoming
- Dynamic table listing placement drives from JSON
- Clean, responsive UI with Mazer styling

## Implementation Steps

### 1. Setup Mazer Admin Template
- Forked and cloned Mazer dashboard repository
- Installed dependencies: `npm install --legacy-peer-deps`
- Fixed Vite configuration issues

### 2. Data Source
- Created `src/assets/data/placement.json` for placement data

### 3. Core Components
- **Placement Page**: `src/placement.html` using Nunjucks
- **Data Script**: `src/assets/js/placement.js`
- **Vite Config**: Updated for static file handling

### 4. Features
- Summary cards (Applied, Selected, Pending, Upcoming)
- Dynamic placement drives table
- Chart.js visualization
- JSON data integration

## Technologies
- HTML5/CSS3/Bootstrap 5
- Mazer Template (Nunjucks)
- Vite
- Chart.js
- JavaScript (ES6)
- JSON

## Challenges
- Vite version compatibility
- Static file handling
- MIME type issues
- Git rebase conflicts

## Learning Outcomes
- JSON integration with admin templates
- Vite static asset management
- Deployment optimization
- Git workflow management

## ⏱️ Development Time
6-7 hours including debugging and deployment

## Demo
[View on Vercel](https://placementtracker-teal.vercel.app/placement.html)
