import { Hero } from "@/components/home/hero";
import { Tracks } from "@/components/home/tracks";
import { Leaderboard } from "@/components/home/leaderboard";
import { RecentEvents } from "@/components/home/recent-events";
import { TeamPreview } from "@/components/home/team-preview";

import { ScrollAnimation } from "@/components/ui/scroll-animation";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-secondary/30">
      <ScrollAnimation variant="fade-in">
        <Hero />
      </ScrollAnimation>

      <ScrollAnimation variant="fade-up" delay={0.1}>
        <Tracks />
      </ScrollAnimation>

      <ScrollAnimation variant="fade-up" delay={0.1}>
        <Leaderboard />
      </ScrollAnimation>

      <ScrollAnimation variant="fade-up" delay={0.1}>
        <RecentEvents />
      </ScrollAnimation>

      <ScrollAnimation variant="fade-up" delay={0.1}>
        <TeamPreview />
      </ScrollAnimation>
    </main>
  );
}
