"use client";
import { use, useState } from "react";
import Image from "next/image";
import { popularGames } from "@/app/constants/dummydata";

export default function GameDetail({ params }) {
  const { id } = use(params);
  const game = popularGames.find((g) => g.id.toString() === id);
  const [activeTab, setActiveTab] = useState("overview");

  if (!game) {
    return <div className="text-center text-red-500 mt-10">Game not found</div>;
  }

  return (
    <main className="pb-12 pt-4">
      {/* Hero Banner */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src={game.thumbnail}
          alt={game.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black flex items-end">
          <div className="p-6">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white animate-fadeIn">
              {game.name}
            </h1>
            <p className="text-gray-300 text-sm md:text-base mt-2 animate-fadeIn delay-200">
              {game.genre} • {game.platforms.join(", ")}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 px-6 mt-6 border-b border-gray-700">
        {["overview", "tournaments", "community"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm md:text-base font-semibold transition-colors duration-300 ${
              activeTab === tab
                ? "text-[#0CF285] border-b-2 border-[#0CF285]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="px-6 mt-6 animate-slideUp">
        {activeTab === "overview" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">About {game.name}</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {game.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {game.platforms.map((p) => (
                <span
                  key={p}
                  className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        )}

        {activeTab === "tournaments" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">
              Upcoming Tournaments
            </h2>
            {game.upcomingTournaments?.length > 0 ? (
              <ul className="list-disc ml-5 text-sm text-gray-300">
                {game.upcomingTournaments.map((t, i) => (
                  <li key={i}>
                    {t.name} — {t.date}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 text-sm">No upcoming tournaments</p>
            )}
          </div>
        )}

        {activeTab === "community" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">Community</h2>
            <p className="text-gray-300 text-sm md:text-base">
              Join the {game.name} community, share your highlights, and connect
              with other players!
            </p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-[#0CF285] text-black text-sm font-bold rounded-md hover:bg-[#09c76e] transition duration-300">
                Join Discord
              </button>
              <button className="px-4 py-2 bg-gray-800 text-white text-sm font-bold rounded-md hover:bg-gray-700 transition duration-300">
                Follow Updates
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
