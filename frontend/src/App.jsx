import Navbar from './components/Navbar';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6">
          Hi, I'm <span className="text-blue-600">Jayashankara M</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Computer Science Graduate from JSSS&TU. Dedicated to building scalable applications 
          and delivering meaningful user experiences.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
            View My Work
          </a>
          <a href="#contact" className="border border-slate-300 text-slate-700 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
      </main>
      <footer className="py-10 text-center border-t border-slate-100 text-slate-500 text-sm">
        © {new Date().getFullYear()} Jayashankara M. Built with MERN Stack.
      </footer>
    </div>
  );
}

export default App;