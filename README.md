# PlayScout 🎮

PlayScout is a platform that makes games accessible and is designed to help users explore and find games they will like. Using the RAWG Video Games Database API, PlayScout provides detailed information about games, genres and platforms to provide a seamless game discovery experience.

![PlayScout](PlayScout.png)

[Website URL](https://play-scout-b12g65kgz-oded-atias-projects.vercel.app)

## Features

🌓 **Dark Mode/Light Mode toggle** – Ability to switch between dark mode and light mode.

🔍 **Search Functionality** – A search engine to find games by title, genre, or platform.

🎮 **Genre-specific Game Search** – Search for games based on a specific genre.

⚙️ **Game Filtering** – Option to filter games by different categories.

📅 **Game Sorting** – Sorting games by various criteria, such as release date.

📋 **Detailed Game Information** – Displaying detailed information about each game, including descriptions, ratings, platforms, and screenshots.


## Screens

- **Home Page**: Displays the initial list of games without any filters applied.
- **Game Details**: Shows all the relevant details about a specific game.
- **Error Page**: Displays the type of error in case of a failure or issue.

## Technologies

- **React** – A JavaScript library for building user interfaces, used to create the components and manage the UI of the web application.
- **TypeScript** – A superset of JavaScript that provides type safety and improves the developer experience by offering static typing and better tooling.
- **React Query** – A data-fetching and state management library for React, used to fetch and cache data from APIs like RAWG, and to manage server state efficiently.
- **Vite** – A fast build tool and development server for modern web applications, used to speed up development and build processes.
- **Zustand** – A small, fast, and scalable state management library for React, used to manage application state with minimal boilerplate.
- **Chakra UI** – A component library for React that provides a set of accessible, customizable, and reusable UI components, speeding up the development of the UI.

## Installation

```bash
# Clone the repository
~$: git clone https://github.com/odedAtias/playscout.git

# Navigate to the project directory
~$: cd playscout

# Install dependencies
~$: npm install

# Start the project
~$: npm run dev
```

## API Integration

### RAWG API

PlayScout integrates with the [RAWG API](https://rawg.io/apidocs) to fetch:

- Game data
- Genre information
- Platform details
- Game details for every game
- Game trailer
- Game screenshots

## Game Ratings Color Coding

🎨 **Dynamic color coding for ratings:**

- **🔴 Below 60%**
- **🟡 60% to 79%**
- **🟢 80% and above**
- **🟠 Unscored Values**


## Usage Notes

- For the best experience, use the application on modern browsers like **Chrome**, **Firefox**, or **Edge**.
- Ensure a stable internet connection for fetching live data from the RAWG API.

## Contribution

Feel free to contribute to PlayScout! Fork the repository, make your changes, and submit a pull request.

## Questions?

If you have any questions or feedback, feel free to contact me:

```javascript
if(haveAnyQuestions === true){
    let yourName = ".......", question = ".......";
    sendEmailToMe(yourName, question, "odedatias8115@gmail.com");
}
```
