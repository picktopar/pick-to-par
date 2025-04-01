

import React, { useState, useEffect, useState as useComponentState } from "react";
import Papa from "papaparse";

function Leaderboard() {
  const [data, setData] = useComponentState([]);

  useEffect(() => {
    fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vTFQU30eyGAX_I-XyC7coN2UqWwiDNVyURvdOraAeeG9_40l-hx1LHaXbJAcbf4Dj43i5xT9z_ARtPW/pub?gid=2006483502&single=true&output=csv")
      .then(res => res.text())
      .then(csv => {
        Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => setData(results.data)
        });
      });
  }, []);

  return (
    <div className="overflow-x-auto max-w-full">
      <div className="w-full overflow-hidden">
        <div className="min-w-full">
      <table className="table-auto w-full text-left border-collapse">
        <thead>
          <tr className="bg-green-700 text-white">
            {data[0] && Object.keys(data[0]).map((key, i) => (
              <th key={i} className="px-4 py-2 border-b border-green-200">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="odd:bg-green-50">
              {Object.values(row).map((value, j) => (
                <td key={j} className="px-4 py-2 border-b border-green-100">{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
    </div>
  );
}

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
                <section className="bg-green-100 bg-opacity-90 p-4 md:p-6 rounded-xl w-full max-w-xl text-center mb-10 shadow-lg">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-green-900">How It Works</h2>
          <ul className="text-green-800 space-y-2 text-sm md:text-base">
            <li>📊 Choose players based on <a href="https://datagolf.com/datagolf-rankings" target="_blank" rel="noopener noreferrer" className="underline text-green-900 font-semibold">Data Golf Rankings</a></li>
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

        

        <section className="bg-green-100 bg-opacity-90 p-4 md:p-6 rounded-xl w-full max-w-4xl text-center shadow-lg mb-10">
  <h2 className="text-xl md:text-2xl font-semibold mb-4 text-green-900">📈 Data Golf Rankings</h2>
  <p className="text-green-800 mb-4 text-sm md:text-base">
    View the latest Data Golf rankings directly from their site.
  </p>
  <iframe
    src="https://datagolf.com/datagolf-rankings"
    className="w-full h-[600px] rounded-xl border-none shadow-md"
    title="Data Golf Rankings"
  ></iframe>
</section>

<section className="bg-green-100 bg-opacity-90 p-4 md:p-6 rounded-xl w-full max-w-xl text-center shadow-lg mb-10">
  <h2 className="text-xl md:text-2xl font-semibold mb-4 text-green-900">🏆 Leaderboard</h2>
  <p className="text-green-800 mb-4 text-sm md:text-base">
    Final scores from The Masters will be updated here.
  </p>
  <Leaderboard />
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
