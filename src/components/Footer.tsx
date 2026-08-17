import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
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
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Trusted matchmaking that blends tradition with modern privacy. Discover verified
              profiles and begin your journey toward a meaningful relationship.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-foreground">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-primary">
                  Log in
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-primary">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-foreground">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="cursor-pointer hover:text-primary">Privacy Policy</span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-primary">Terms of Service</span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-primary">Contact Us</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Matrimony. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 fill-primary text-primary" /> for lasting unions
          </p>
        </div>
      </div>
    </footer>
  );
}
