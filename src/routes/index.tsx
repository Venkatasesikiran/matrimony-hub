import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-landing.png";
import {
  ShieldCheck,
  Heart,
  Lock,
  Users,
  Search,
  MessageCircle,
  ArrowRight,
  Star,
} from "lucide-react";

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
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Profiles",
    description:
      "Every profile goes through a careful verification process so you can connect with confidence.",
  },
  {
    icon: Heart,
    title: "Meaningful Matches",
    description:
      "Our matching approach prioritizes values, lifestyle, and long-term compatibility.",
  },
  {
    icon: Lock,
    title: "Complete Privacy",
    description:
      "Your data is protected. You control what you share and who can see your details.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Join a respectful community of individuals and families looking for serious relationships.",
  },
  {
    icon: Search,
    title: "Smart Discovery",
    description:
      "Filter by education, location, interests, and more to find profiles that truly fit.",
  },
  {
    icon: MessageCircle,
    title: "Safe Communication",
    description:
      "Start conversations in a secure environment and take the next step when you're ready.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your profile",
    description:
      "Sign up in minutes and share your preferences, background, and what matters most to you.",
  },
  {
    number: "02",
    title: "Discover matches",
    description:
      "Browse verified profiles and receive curated suggestions based on your compatibility.",
  },
  {
    number: "03",
    title: "Begin your journey",
    description:
      "Connect safely, get to know each other, and take the first step toward a lifelong bond.",
  },
];

const testimonials = [
  {
    name: "Ananya & Rohan",
    location: "Mumbai",
    quote:
      "We were both looking for something serious. Matrimony helped us find each other without the noise of casual apps.",
  },
  {
    name: "Priya & Arjun",
    location: "Bengaluru",
    quote:
      "The verification gave our families peace of mind, and the matching felt genuinely thoughtful.",
  },
  {
    name: "Sneha & Vikram",
    location: "Hyderabad",
    quote:
      "Simple, respectful, and private. We connected over shared values and never looked back.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 lg:py-32">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <h1 className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  Find your perfect{" "}
                  <span className="text-primary">life partner</span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground lg:mx-0">
                  Trusted matchmaking with verified profiles, thoughtful matches, and complete
                  privacy. Begin your journey to a meaningful relationship today.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                  <Button size="lg" asChild>
                    <Link to="/register">
                      Register Free <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/login">Already a member? Log in</Link>
                  </Button>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  No hidden fees. Start connecting with verified profiles in minutes.
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/30 to-primary/10 blur-2xl" />
                <img
                  src={heroImage}
                  alt="Couple standing together under a floral wedding arch at sunset"
                  width={1280}
                  height={720}
                  className="relative rounded-2xl border border-border shadow-2xl"
                  priority="true"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border bg-card/50">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">50K+</p>
                <p className="mt-1 text-sm text-muted-foreground">Verified Profiles</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">12K+</p>
                <p className="mt-1 text-sm text-muted-foreground">Happy Matches</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">98%</p>
                <p className="mt-1 text-sm text-muted-foreground">Privacy Score</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">24/7</p>
                <p className="mt-1 text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="about" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                Why choose Matrimony?
              </h2>
              <p className="mt-4 text-muted-foreground">
                We combine tradition with trust, giving you the tools to find a partner who truly
                fits your life.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title} className="group transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-secondary/30 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                How it works
              </h2>
              <p className="mt-4 text-muted-foreground">
                Three simple steps to start your search for a life partner.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="relative text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary font-serif text-2xl font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                Love stories that began here
              </h2>
              <p className="mt-4 text-muted-foreground">
                Hear from couples who found their perfect match on Matrimony.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="bg-card">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex gap-1 text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-6 border-t border-border pt-4">
                      <p className="font-serif font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-primary py-20 sm:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl">
              Your perfect match could be one click away
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
              Join thousands of singles and families who trust Matrimony for a safe, respectful, and
              meaningful matchmaking experience.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/register">Create Free Account</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <Link to="/login">Log In</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
