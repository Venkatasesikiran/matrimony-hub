import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matrimony — Find Your Perfect Life Partner" },
      {
        name: "description",
        content:
          "Matrimony helps you discover verified profiles and meaningful matches. Register free or log in to begin your journey.",
      },
      { property: "og:title", content: "Matrimony — Find Your Perfect Life Partner" },
      {
        property: "og:description",
        content:
          "Discover verified profiles and meaningful matches on Matrimony. Register free today.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="font-serif text-4xl font-semibold text-foreground sm:text-5xl">
          Find your perfect life partner
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Trusted matchmaking with verified profiles, thoughtful matches, and complete privacy.
        </p>
      </main>
    </div>
  );
}
