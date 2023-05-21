import NavigationComposer from "@/components/navigation";
import Hero from "@/components/hero";
import DivJoin from "@/components/DivJoin";

export default async function Home() {
  return (
    <div className="relative">
      <header>
        <NavigationComposer />
      </header>

      <main>
        <Hero />
        <section className="relative bg-secondary h-[500px]">
          <DivJoin color="bg-secondary" />
        </section>
      </main>
    </div>
  );
}
