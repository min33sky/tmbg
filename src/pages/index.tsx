import Hero from '@/components/hero';
import HomeLayout from '@/components/layout/HomeLayout';

export default function Home() {
  return (
    <HomeLayout>
      <section id="hero" className="snap-center">
        <Hero />
      </section>
    </HomeLayout>
  );
}
