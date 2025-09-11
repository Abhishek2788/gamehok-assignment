"use client";
import { useEffect, useState } from "react";
import GameCarousel from "../components/GameCarousel";
import { popularGames } from "../constants/dummydata";
import Link from "next/link";
import { Monitor, Smartphone, Gamepad2 } from "lucide-react";
import Image from "next/image";

export default function GameList() {
  const [game, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://67c9566f0acf98d07089d293.mockapi.io/games")
      .then((res) => res.json())
      .then(setGames)
      .catch(() => setGames([]))
      .finally(setLoading(false));
  }, []);

  return (
    <div>
      {/* Games fetched from API */}
      <div className="p-4">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0CF285]"></div>
            <p className="text-gray-400 mt-3">Loading data...</p>
          </div>
        ) : (
          <GameCarousel games={game} />
        )}
      </div>

      {/* Popular Games */}
      <section className="mt-10 pl-4 pr-4 mb-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl md:text-2xl font-bold text-white">
            Popular Games
          </h2>
          <Link href="/games">
            <span className="text-[#0CF285] text-sm">
              View All
            </span>
          </Link>
        </div>

        {/* Grid of games */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularGames.map((game) => (
            <Link
              href={`/games/${game.id}`}
              key={game.id}
              className="group rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:scale-105 hover:shadow-xl transition transform duration-300 bg-gradient-to-b from-gray-900 to-black"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-40">
                <Image
                  src={game.thumbnail}
                  alt={game.name}
                  fill
                  className="object-cover group-hover:opacity-90"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white truncate">
                  {game.name}
                </h3>
                <p className="text-xs text-gray-400 mb-2">{game.genre}</p>

                {/* Platforms */}
                <div className="flex flex-wrap gap-2">
                  {game.platforms.includes("Windows") && (
                    <span className="flex items-center gap-1 text-[10px] text-white bg-gray-700 px-2 py-1 rounded-full">
                      <Monitor size={12} /> PC
                    </span>
                  )}
                  {game.platforms.includes("Android") && (
                    <span className="flex items-center gap-1 text-[10px] text-white bg-gray-700 px-2 py-1 rounded-full">
                      <Smartphone size={12} /> Android
                    </span>
                  )}
                  {game.platforms.includes("iOS") && (
                    <span className="flex items-center gap-1 text-[10px] text-white bg-gray-700 px-2 py-1 rounded-full">
                      <Smartphone size={12} /> iOS
                    </span>
                  )}
                  {(game.platforms.includes("PS") ||
                    game.platforms.includes("Xbox")) && (
                    <span className="flex items-center gap-1 text-[10px] text-white bg-gray-700 px-2 py-1 rounded-full">
                      <Gamepad2 size={12} /> Console
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
