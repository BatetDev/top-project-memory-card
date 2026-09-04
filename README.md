# Countries Memory Card Game

<div align="center">

![Memory Card Game Screenshot](/src/assets/projectScreenshot.jpg)

A memory card game built with React where players test their memory by clicking on unique country flags without repeating.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

[Live Demo](https://top-project-memory-card-chi.vercel.app/) - [View Code](https://github.com/BatetDev/top-project-memory-card)

</div>

## 📖 About

A memory card game where players have to click on country flags without repeating any. Each click randomly shuffles and refreshes the board with new countries. The challenge increases as the number of clicked countries grows — click all 193 UN member states without repeating to win!

The application emphasizes core React fundamentals:

- Custom hooks for game logic
- State management with `useState` and `useEffect`
- Component composition and reusability
- API integration with fetch and environment variables

Built as part of The Odin Project's React curriculum.

## 🌍 Key Features

✅ 193 UN member states as the country pool  
✅ 6 cards displayed per round with random selection  
✅ Board refreshes with new countries after each click  
✅ Current score and best score tracking  
✅ Progress indicator showing countries clicked / total  
✅ Victory state when all countries are clicked without repeating  
✅ Game Over state with duplicate detection  
✅ Mobile-first responsive layout

## 🛠️ Built With

- [React](https://react.dev/) for the UI and component architecture
- [Vite](https://vitejs.dev/) for development and production builds
- JavaScript (ES6+) for functionality
- [Tailwind CSS](https://tailwindcss.com/) for styling and layout
- [React Icons](https://react-icons.github.io/react-icons/) for scalable vector icons
- [REST Countries API](https://restcountries.com/) for country data

## 🚀 Getting Started

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/BatetDev/top-project-memory-card-game.git

# Navigate to project directory
cd top-project-memory-card-game

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔑 Environment Variables

This project uses the REST Countries v5 API, which requires an API key:

1. Sign up at restcountries.com to get your free API key.

2. Create a .env file in the root directory.

3. Add your API key:

```
VITE_RESTCOUNTRIES_API_KEY=your_api_key_here
```

_Note:_ The VITE\_ prefix is required for Vite to expose the variable to the client.

## 🎮 How to Play

1. Click on a country card to select it.

2. The board will refresh with 6 new random countries.

3. Your score increases by 1 for each unique country you click.

4. If you click a country you've already selected, it's Game Over.

5. Click all 193 countries without repeating to Win!

## 📜 Credits

- **Original project by**: [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-memory-card)
- **Country data**: [REST Countries API](https://restcountries.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Font**: [Ubuntu](https://fonts.google.com/specimen/Ubuntu)
