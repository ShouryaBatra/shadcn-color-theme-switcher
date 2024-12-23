# Shadcn Color Theme Switcher

This repository provides a ready-to-use implementation for a light/dark mode toggle and a color theme switcher using Tailwind CSS, Shadcn UI, and React with Vite. It is designed to help developers easily integrate theme-switching functionality into their Shadcn-powered applications.

## Features

- **Light/Dark Mode Toggle:** Allows users to switch between light and dark themes.
- **Color Theme Selector:** Enables users to choose from the variety of predefined color themes on the [shadcn themes website](https://ui.shadcn.com/themes) (e.g., Zinc, Red, Rose, Orange, Green).
- **Fully Configurable:** Easily customize themes using CSS variables.

## Demo

[Color Theme Switcher Demo]([https://shouryabatra.github.io/shadcn-color-theme-switcher/](https://shadcn-color-theme-switcher.vercel.app/))

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js and npm
- A React project
- Tailwind CSS configured
- Shadcn UI installed

### Steps

1. Clone the Repository

```bash
git clone https://github.com/ShouryaBatra/shadcn-color-theme-switcher.git
```

2. Copy Required Files

Copy the following files to your project:

- `src/index.css` - includes all the color themes (can merge its contents into your existing main CSS file)
- `src/components/theme-provider.jsx`
- `src/components/mode-toggle.js` - component for dropdown menu to switch between light and dark mode
- `src/components/color-theme-toggle.js` - component for dropdown menu to switch color themes

3. Install Dependencies

Run the following command to install required dependencies:

```bash
npm install
```

5. Include CSS Variables

Ensure your main CSS file contains the required CSS (included in `src/index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Theme variables */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    /* Add other theme variables here */
  }
  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    /* Add dark theme variables here */
  }
}

[data-theme="zinc"] {
  /* Define Zinc theme variables */
}

/* Repeat for other themes */
```

## Usage

1. **Light/Dark Mode Toggle**

Use the provided `ModeToggle` component to allow users to toggle between light and dark modes.

2. **Color Theme Dropdown**

Use the `ColorThemeToggle` component to allow users to select a color theme.

3. **Theme Provider**

Wrap `ColorThemeToggle` and `ModeToggle` components in `ThemeProvider` component

Example:

```jsx
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { ColorThemeToggle } from "@/components/color-theme-toggle";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <ColorThemeToggle />
    </ThemeProvider>
  );
}
```

## Customization

- Add or modify color themes in `index.css`.
- Adjust the logic in `ThemeSwitcher.js` or `DropdownMenu.js` as needed.

## Contributions

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## Developers

**[Shourya Batra](https://github.com/ShouryaBatra)**

- Shourya is a freshman at Homestead High School currently pursuing his passion for computer science. Check out his GitHub!

## License

This project is licensed under the MIT License.
