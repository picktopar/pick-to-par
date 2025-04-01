

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
  
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    fetch("https://datagolf.com/api/rankings/world?format=csv")
      .then((res) => res.text())
      .then((csv) => {
        Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => setRankings(results.data),
        });
      });
  }, []);

  const getTierOptions = (start, end) =>
    rankings.slice(start - 1, end).map((player, i) => (
      <option key={i} value={player.Player}>{player.Player}</option>
    ));

  const getWildcardOptions = () =>
    rankings.slice(30).map((player, i) => (
      <option key={i} value={player.Player}>{player.Player}</option>
    ));
  

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

        <section className="bg-green-100 bg-opacity-90 p-4 md:p-6 rounded-xl w-full max-w-xl text-center mb-10 shadow-lg">
  <h2 className="text-xl md:text-2xl font-semibold mb-4 text-green-900">🎯 Make Your Picks</h2>
  <p className="text-green-800 mb-4 text-sm md:text-base">
    Select players for each tier based on the live Data Golf rankings. You may only choose eligible players from each range.
  </p>
  
  <form
    className="text-left space-y-4"
    onSubmit={(e) => {
      e.preventDefault();
      const formData = {
        top10: e.target.top10.value,
        top20: e.target.top20.value,
        top30: e.target.top30.value,
        wildcard: e.target.wildcard.value,
      };

      fetch("https://script.google.com/macros/s/AKfycbzM0pzsPAheUSnLYsStlTgWs2AswZdxryvnTGVr7-1zZ8Pg0_vVNxGDKcZPPdCt6nikqA/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => alert("Picks submitted successfully!"))
        .catch((err) => alert("Something went wrong."));
    }}
  >
    <div>
      <label htmlFor="top10" className="block text-green-900 font-semibold mb-1">Top 10 Player</label>
      <select name="top10" id="top10" className="w-full px-4 py-2 rounded border">
  <option value="">Select</option>
  {getTierOptions(1, 10)}
</select>
    </div>
    <div>
      <label htmlFor="top20" className="block text-green-900 font-semibold mb-1">Top 20 Player (not in Top 10)</label>
      <select name="top20" id="top20" className="w-full px-4 py-2 rounded border">
  <option value="">Select</option>
  {getTierOptions(11, 20)}
</select>
    </div>
    <div>
      <label htmlFor="top30" className="block text-green-900 font-semibold mb-1">Top 30 Player (not in Top 20)</label>
      <select name="top30" id="top30" className="w-full px-4 py-2 rounded border">
  <option value="">Select</option>
  {getTierOptions(21, 30)}
</select>
    </div>
    <div>
      <label htmlFor="wildcard" className="block text-green-900 font-semibold mb-1">Wildcard (outside Top 30)</label>
      <select name="wildcard" id="wildcard" className="w-full px-4 py-2 rounded border">
  <option value="">Select</option>
  {getWildcardOptions()}
</select>
    </div>
    <button type="submit" className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-xl shadow">Submit Picks</button>
  </form>
</section>

        

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
