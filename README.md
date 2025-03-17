# Dice Game 🎲

A React-based interactive dice game with score tracking and strategic gameplay elements.

## Features 🚀

### Core Gameplay
- Number selection (1-6) before dice roll
- Random dice roll animation (image change)
- Score calculation system:
  - +N points for correct guess (N = selected number)
  - -2 points for incorrect guess
- Real-time score updates
- Score reset functionality

### UI Features
- Responsive number selection boxes
- Visual feedback for selected number
- Error messages for invalid plays
- Interactive dice image
- Rules toggle system
- Score display panel

### Game Management
- Start/Restart game flow
- Context API for state management
- Reusable Button component
- Responsive layout for all screen sizes

## Technologies Used 💻
- **Frontend**:
  - React.js (v18+)
  - CSS Modules for styling
  - React Context API
  - Functional components with Hooks (useState, useContext)

## Components Structure 🧩
1. **App**:
   - Manages game state context
   - Handles page navigation (Home/Game)
2. **Home**:
   - Landing page with game entry button
   - Features animated dice image
3. **Game**:
   - Main game interface
   - Manages score calculation
   - Handles dice roll logic
4. **Button**:
   - Reusable interactive button
   - Handles multiple actions:
     - Game start
     - Rules toggle
     - Score reset
5. **Box**:
   - Number selection component
   - Visual feedback for selected number
