
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineWizard from './components/HeadlineWizard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-linkedin-bg font-sans text-linkedin-text-primary">
      <Navbar />
      <main className="flex-1 pb-12">
        <Hero />
        <HeadlineWizard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
