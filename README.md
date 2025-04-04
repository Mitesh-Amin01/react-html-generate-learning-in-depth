# React HTML Generate Learning (In-Depth)

This project demonstrates how to manually generate HTML elements using React's `createElement` API instead of JSX. It shows how React handles virtual DOM creation and rendering under the hood.

## Project Structure

```
react-html-generate-learning-in-depth/
│-- src/
│   │-- App.jsx
│   │-- main.jsx
│-- index.html
│-- package.json
│-- README.md
```

## What This Project Does

Instead of using JSX syntax, this example uses `React.createElement` to create a custom anchor (`<a>`) tag pointing to Google.

## Code Example

### `main.jsx`
```js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const customElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'I Am a Google'
);

createRoot(document.getElementById('root')).render(customElement);
```

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React HTML Generate</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## Installation & Running

1. Clone the repository:
```bash
git clone https://github.com/Mitesh-Amin01/react-html-generate-learning-in-depth.git
```

2. Navigate to the project folder:
```bash
cd react-html-generate-learning-in-depth
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The project should open in your browser at `http://localhost:5173` (if you're using Vite).

## Purpose
This example is perfect for learning how React works behind the scenes — especially for beginners exploring how JSX is compiled into native JavaScript using `React.createElement`.

## License
This project is licensed under the Mitesh Amin License.

