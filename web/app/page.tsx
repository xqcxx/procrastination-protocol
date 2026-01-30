import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter mb-6">
            The only way to win is to <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              do absolutely nothing.
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-zinc-600 dark:text-zinc-400 mb-10">
            Lock your STX. Don't touch it. Earn rewards for your inactivity. 
            Beware of temptations that will test your resolve.
          </p>
          
          <div className="flex justify-center gap-4">
            <Link 
              href="/start" 
              className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform dark:bg-white dark:text-black"
            >
              Start Procrastinating
            </Link>
            <Link 
              href="/leaderboard" 
              className="px-8 py-4 bg-white text-black border border-zinc-200 rounded-full font-bold text-lg hover:bg-zinc-50 transition-colors dark:bg-zinc-900 dark:text-white dark:border-zinc-800"
            >
              View Leaderboard
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
              <div className="text-3xl mb-4">🛑</div>
              <h3 className="text-xl font-bold mb-2">Do Nothing</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Every block you don't interact with the protocol increases your streak multiplier.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
              <div className="text-3xl mb-4">😈</div>
              <h3 className="text-xl font-bold mb-2">Resist Temptation</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Random events will offer you quick rewards to break your streak. Stay strong.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Become Legend</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Earn NFT badges and climb the leaderboard by being the laziest person on chain.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
