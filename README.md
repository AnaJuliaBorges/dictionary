# Dictionary Web App

<img width="1890" height="1063" alt="Mockup dictionary" src="https://github.com/user-attachments/assets/7c642f66-e9c5-40ee-a792-ea7d885c4227" />

This project is a solution to the [Dictionary Web App](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL) challenge from Frontend Mentor. The app allows users to search for words in a dictionary, displaying definitions, usage examples, synonyms, and more.

Live demo: https://dictionary-omega-three.vercel.app/

## Overview

### Features

- Word search functionality
- Clickable synonyms that trigger new searches
- Displays:
  - Definitions
  - Usage examples
  - Synonyms
  - Pronunciation
- Light/dark mode toggle
- Font style toggle (Mono, Sans Serif, Serif)
- Fully responsive design
- Audio pronunciation playback

### Technologies Used

- React
- Tailwind CSS
- JavaScript
- [Dictionary API](https://dictionaryapi.dev/) - Free dictionary API

## Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/AnaJuliaBorges/dictionary.git
   ```

2. Navigate to the project directory:
   ```bash
   cd dictionary
   ```

3. Install dependencies and run the development server:
   ```bash
   yarn dev
   ```

## Project Structure

```
src/
├── assets/
├── components/
│   ├── features/
├── contexts/
├── utils/
├── App.jsx
├── index.css
└── main.jsx
```

## Challenges & Learnings

The main challenges encountered during development included:

- Implementing the dictionary API
- Handling responses from the dictionary API
- Managing application theme (light/dark mode)
- Implementing font style management
- Error handling for undefined words
- Creating a responsive design for all screen sizes

## Future Improvements

- [ ] Add Unit Tests
- [ ] Implement E2E Tests

Developed by Ana Julia Borges [Linkedin](https://www.linkedin.com/in/anajuliaborges/) and [GitHub](https://github.com/AnaJuliaBorges).
