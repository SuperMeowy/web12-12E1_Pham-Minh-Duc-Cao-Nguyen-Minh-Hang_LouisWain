# GEMINI.md

## Project Analysis: web12-12E1_Pham-Minh-Duc-Cao-Nguyen-Minh-Hang_LouisWain

This document provides an overview of the `web12-12E1_Pham-Minh-Duc-Cao-Nguyen-Minh-Hang_LouisWain` project, based on the current directory structure and the content of key files.

### Project Type

Static Web Project (Frontend)

### Project Overview

This project is a website dedicated to the English artist Louis Wain, renowned for his distinctive drawings of cats. The website functions as an archive, presenting biographical information about Wain, showcasing a curated collection of his artworks in a masonry layout, and providing a feature for users to reserve tickets for visits or exhibitions. The project is built using standard web technologies: HTML for structure, CSS for styling, and JavaScript for client-side interactivity.

### Building and Running

As this is a static website, no complex build processes or specific commands are required to run it.

*   **To run the project:** Simply open the `index.html` file in any web browser.
*   **File Organization:**
    *   `index.html`: The main landing page.
    *   `home.html`: Potentially another entry point or homepage.
    *   `styles/main.css`: Contains all styling information for the website.
    *   `scripts/script.js`: Handles client-side interactivity, such as navigation bar behavior and the ticket booking carousel.
    *   `assets/`: Directory containing all image assets, including artwork for the gallery (`assets/masonry/`) and general site imagery (`assets/`).
    *   `LICENSE`: Contains licensing information for the project.

### Development Conventions

*   **File Structure:** The project adheres to a conventional structure for static websites, with HTML, CSS, and JavaScript files organized logically in the root directory or in dedicated folders (`scripts/`, `assets/`).
*   **Styling:**
    *   The project utilizes CSS with CSS variables (e.g., `--orange`) for theming. All page-specific styles are externalized into dedicated CSS files (e.g., `styles/main.css`, `styles/home.css`) to maintain separation of concerns.
    *   External fonts are integrated via Google Fonts (`Cormorant Garamond`, `Inter`).
    *   Images are displayed using a masonry layout for the gallery section, enhancing visual presentation.
*   **Interactivity:** Client-side interactivity is managed exclusively by `scripts/script.js`, implementing features such as a responsive navigation bar and a ticket booking carousel. Inline JavaScript is strictly avoided to maintain clean separation of concerns.
*   **Semantic HTML:** The HTML structure employs semantic elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`, `<figure>`) to improve readability and accessibility. `alt` attributes are used for image descriptions.
*   **Link Management:** Placeholder or dead links are neutralized using `javascript:void(0)` to prevent unintended page navigation and improve user experience when features are not yet implemented.
*   **Asset Management:** Image assets are centrally located in the `assets` directory, with specific subdirectories for masonry items.
*   **Licensing:** The presence of a `LICENSE` file indicates that usage terms and conditions are provided.
