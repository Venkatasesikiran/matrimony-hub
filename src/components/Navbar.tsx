import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Matrimony logo"
            width={512}
            height={512}
            className="h-10 w-10 object-contain"
          />
          <span className="font-serif text-xl font-semibold tracking-wide text-primary">
            Matrimony
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/about">About Us</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/register">Register</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
