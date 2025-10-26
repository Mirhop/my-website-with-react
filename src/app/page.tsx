import MyWave from './components/myWave';
import FloatingBackground from './components/FloatingBackground';

const Home = () => {
  const myQuote = `There's no such thing as failure, until you give up on doing it.`;

  return (
    <section>
    <MyWave />
    <FloatingBackground />

    <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-x-custom">
                    Welcome to
                </span>
                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x-custom delay-500">
                    My Portfolio
                </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-slate-300 font-light mb-8">
                {myQuote}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="./public/project/project.html" className="px-8 py-3 w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/20 transform hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300">
                    Explore My Work
                </a>
                <a href="#contact" className="px-8 py-3 w-full sm:w-auto border-2 border-indigo-400 rounded-full font-semibold text-white hover:bg-indigo-500/20 transition-all duration-300">
                    Get In Touch
                </a>
            </div>
        </div>
    </main>
    </section>
  );
}

export default Home;