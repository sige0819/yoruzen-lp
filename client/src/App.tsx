import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import GoPage from "./pages/GoPage";
import JpPage from "./pages/JpPage";
import JpAboutPage from "./pages/JpAboutPage";
import JpAccessPage from "./pages/JpAccessPage";
import JpFirstPage from "./pages/JpFirstPage";
import JpFaqPage from "./pages/JpFaqPage";
import TravelPage from "./pages/TravelPage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={GoPage} />
      <Route path={"/go"} component={GoPage} />
      {/* 日本語LP */}
      <Route path={"/jp"} component={JpPage} />
      <Route path={"/jp/about"} component={JpAboutPage} />
      <Route path={"/jp/access"} component={JpAccessPage} />
      <Route path={"/jp/first"} component={JpFirstPage} />
      <Route path={"/jp/faq"} component={JpFaqPage} />
      {/* Travelers LP */}
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
