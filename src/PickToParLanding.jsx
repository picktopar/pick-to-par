

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

        <a
  href="https://form.typeform.com/to/AZc1YvwD"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl shadow-lg mb-10"
>
  👉 Click here to enter your Pick to Par team
</a>

        <section className="bg-green-100 bg-opacity-90 p-4 md:p-6 rounded-xl w-full max-w-xl text-center shadow-lg mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-green-900">🏆 Leaderboard</h2>
          <p className="text-green-800 mb-4 text-sm md:text-base">
            Final scores from The Masters will be updated here.
          </p>
          <iframe
  src="https://docs.google.com/spreadsheets/d/e/YOUR_GOOGLE_SHEET_ID/pubhtml?widget=true&amp;headers=false"
  className="w-full h-[600px] rounded-xl border-none shadow-md"
  title="Live Leaderboard from Google Sheets"
></iframe>
        </section>

        <section className="bg-green-100 bg-opacity-90 p-4 md:p-6 rounded-xl w-full max-w-xl text-center shadow-lg mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-green-900">👥 Who’s In?</h2>
          <p className="text-green-800 mb-4 text-sm md:text-base">
            Live list of everyone who has submitted their team picks.
          </p>
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTFQU30eyGAX_I-XyC7coN2UqWwiDNVyURvdOraAeeG9_40l-hx1LHaXbJAcbf4Dj43i5xT9z_ARtPW/pubhtml?gid=0&single=true&widget=true&headers=false"
            className="w-full h-[600px] rounded-xl border-none shadow-md"
            title="Team Entries"
          ></iframe>
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
          Questions? Contact us at <a href="mailto:picktopar@gmail.com" className="underline">picktopar@gmail.com</a>
        </p>
        <p>&copy; 2025 Pick to Par</p>
      </footer>
    </div>
  );
}
