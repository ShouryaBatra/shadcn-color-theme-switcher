import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/mode-toggle";
import { ColorThemeToggle } from "./components/color-theme-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Button>Hi!</Button>
      <ModeToggle />
      <ColorThemeToggle />
    </ThemeProvider>
  );
}

export default App;
