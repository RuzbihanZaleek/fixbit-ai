import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-md">
          <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
