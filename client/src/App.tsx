import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import GoPage from "./pages/GoPage";
import JpPage from "./pages/JpPage";
import TravelPage from "./pages/TravelPage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={GoPage} />
      <Route path={"/go"} component={GoPage} />
      <Route path={"/jp"} component={JpPage} />
      <Route path={"/travel"} component={TravelPage} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
