import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services limit={6} />
      <WhyUs />
      <Industries />
      <Testimonials />
      <CTA />
    </>
  );
}
