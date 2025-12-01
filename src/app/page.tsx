import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div>
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

