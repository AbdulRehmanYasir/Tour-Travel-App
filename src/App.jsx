import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Destinations from './components/Destinations/Destinations';
import DestinationModal from './components/DestinationModal/DestinationModal';
import Packages from './components/Packages/Packages';
import Testimonials from './components/Testimonials/Testimonials';
import ContactCta from './components/ContactCta/ContactCta';
import Footer from './components/Footer/Footer';
import { navLinks, destinations, packages, testimonials, stats } from './data/siteData';

const BRAND = 'Wanderly';

function App() {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleSelectDestination = (destination) => setSelectedDestination(destination);
  const handleCloseModal = () => setSelectedDestination(null);

  return (
    <>
      <Navbar links={navLinks} brand={BRAND} />

      <main>
        <Hero
          title="Discover Places That Take Your Breath Away"
          subtitle="Handpicked destinations, expert local guides, and unforgettable itineraries — planned around you."
          stats={stats}
        />

        <Destinations destinations={destinations} onSelectDestination={handleSelectDestination} />

        <Packages packages={packages} />

        <Testimonials testimonials={testimonials} />

        <ContactCta />
      </main>

      <Footer brand={BRAND} links={navLinks} />

      <DestinationModal destination={selectedDestination} onClose={handleCloseModal} />
    </>
  );
}

export default App;
