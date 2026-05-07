# Evolution Interactive Studios

Welcome to the official web repository for **Evolution Interactive Studios**. This Single Page Application (SPA) serves as the digital home and portfolio for our game development studio. 

Our website is designed to connect players with our immersive worlds. It exists to showcase our expanding roster of games—ranging from deep, multi-level narrative adventures to experimental mechanics—and to keep our community informed with the latest developer updates, design documents, and studio news. Built entirely with vanilla HTML, CSS, and JavaScript, the site prioritizes a lightweight, fast, and seamless browsing experience.

## Key Features

1. **Dynamic Portfolio Showcase:** A responsive, interactive gallery displaying our current and upcoming titles, including deep-dives into our flagship narrative-driven projects like *Awakening*.
2. **Seamless SPA Architecture:** Smooth, instantaneous navigation across different sections (Home, Games, About Us, Contact) without traditional page reloads.
3. **Integrated Media & Vision Engines:** Built-in support for displaying game trailers, environmental concept art, and audio showcases.
4. **Devlog & News Feed:** A dedicated space highlighting our game design updates, level progression roadmaps, and studio announcements.
5. **Community Connection Portal:** Streamlined forms and links for player feedback, press inquiries, and collaborative opportunities.

## Installation

Getting the project up and running locally is straightforward since it relies on native web technologies without heavy build tools.

Open your terminal and run the following commands:

```bash
# Clone the repository
git clone https://github.com/yourusername/evolution-interactive-studios.git

# Navigate into the project directory
cd evolution-interactive-studios

# Serve the site locally (using Python 3's built-in HTTP server)
python3 -m http.server 8000
```

Once running, open your browser and navigate to http://localhost:8000 to view the site.

## Usage
The SPA is designed to be easily extensible. To add a new game to the studio's portfolio, you can simply update the main data array in the JavaScript logic.

Here is a quick example of how you might initialize a new title in your js/portfolio.js file:

```JavaScript
// Initialize a new game entry for the studio showcase
const newTitle = {
    title: "Awakening",
    genre: "Narrative Adventure",
    levels: 100,
    status: "In Development",
    description: "An expansive narrative journey featuring dynamic environmental shifts and deep storytelling."
};

// Add to the main gallery and re-render the view
studioGallery.addGame(newTitle);
studioGallery.render('.portfolio-container');
```

## License
This project is licensed under the MIT License. See the LICENSE file for details.

