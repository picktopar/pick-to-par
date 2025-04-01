
import React, { useState } from "react";

export default function PickToParLanding() {
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  return (
    <div
      className="font-augusta min-h-screen text-green-900 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/backgrounds/azaleas-fairway.jpg')" }}
    >
      <header className="p-4 md:p-6 text-center bg-green-900 bg-opacity-90 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Pick to Par</h1>
        <p className="text-lg md:text-xl text-green-100">Fantasy Golf. Lowest Score Wins.</p>
      </header>

      <main className="flex flex-col items-center px-4">
        <img
          src="/pick_to_par_simple_logo.png"
          alt="Pick to Par Logo"
          className="w-48 md:w-64 mb-6"
        />

        <section className="bg-green-100 bg-opacity-90 p-4 md:p-6 rounded-xl w-full max-w-xl text-center mb-10 shadow-lg">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-green-900">How It Works</h2>
          <ul className="text-green-800 space-y-2 text-sm md:text-base">
            <li>✅ Pick 1 player from the Top 10</li>
            <li>✅ 1 from the Top 20 (not in Top 10)</li>
            <li>✅ 1 from the Top 30 (not in Top 20)</li>
            <li>✅ 1 Wildcard (outside Top 30)</li>
            <li>📉 Player's finish = your score</li>
            <li>❌ Missed Cut = Max Score (80)</li>
            <li>🏆 Lowest total score wins</li>
          </ul>
        </section>

        <iframe
          src="https://your-typeform-link.typeform.com/to/example"
          className="w-full max-w-xl h-[600px] rounded-xl border-none shadow-xl mb-10"
          title="Pick to Par Entry Form"
        ></iframe>

        <section className="bg-green-100 bg-opacity-90 p-4 md:p-6 rounded-xl w-full max-w-xl text-center shadow-lg mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-green-900">🏆 Leaderboard</h2>
          <p className="text-green-800 mb-4 text-sm md:text-base">
            Final scores from The Masters will be updated here.
          </p>
          <ul className="text-green-900 text-left space-y-2 text-sm md:text-base">
            <li>1. Sarah M. – 42</li>
            <li>2. James K. – 47</li>
            <li>3. Devin L. – 49</li>
            <li>4. Priya N. – 52</li>
            <li>5. Tyler W. – 55</li>
          </ul>
        </section>

        <section className="bg-green-100 bg-opacity-90 p-4 md:p-6 rounded-xl w-full max-w-4xl text-center shadow-lg">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-green-900">📋 Full Masters Leaderboard</h2>
          <p className="text-green-800 mb-4 text-sm md:text-base">
            Live or final leaderboard data from the Masters tournament.
          </p>
          <button
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded mb-4 text-sm md:text-base"
            onClick={() => setShowLeaderboard(!showLeaderboard)}
          >
            {showLeaderboard ? "Hide Leaderboard" : "Show Leaderboard"}
          </button>
          {showLeaderboard && (
            <iframe
              src="https://www.masters.com/en_US/scores/index.html"
              className="w-full h-[600px] rounded-xl border-none shadow-md"
              title="Official Masters Leaderboard"
            ></iframe>
          )}
        </section>
      </main>

      <footer className="text-center text-green-200 text-sm py-6 bg-green-900 bg-opacity-90">
        <p>
          Questions? Contact us at <a href="mailto:your@email.com" className="underline">your@email.com</a>
        </p>
        <p>&copy; 2025 Pick to Par</p>
      </footer>
    </div>
  );
}
