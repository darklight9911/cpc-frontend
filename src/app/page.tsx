import { Hero } from "@/components/home/hero";
import { Tracks } from "@/components/home/tracks";
import { Leaderboard } from "@/components/home/leaderboard";
import { RecentEvents } from "@/components/home/recent-events";
import { TeamPreview } from "@/components/home/team-preview";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-secondary/30">
      <Hero />
      <Tracks />
      <Leaderboard />
      <RecentEvents />
      <TeamPreview />
    </main>
  );
}
