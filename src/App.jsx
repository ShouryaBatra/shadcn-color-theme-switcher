import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { ColorThemeToggle } from "./components/color-theme-toggle";
import SureAlertDialog from "./components/SureAlertDialog";
import ProjectCard from "./components/ProjectCard";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <ColorThemeToggle />
      <SureAlertDialog />
      <Button>Button</Button>
      <ProjectCard />
    </ThemeProvider>
  );
}
