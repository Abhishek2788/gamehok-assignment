"use client";
import { useEffect, useState } from "react";
import GameCarousel from "./components/GameCarousel";
import TournamentCarousel from "./components/TournamentCarousel";
import FollowList from "./components/FollowList";
import { cards, followDummy } from "./constants/dummydata";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function HomePage() {
  const [games, setGames] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ track loading state
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const [gamesRes, tournRes] = await Promise.all([
          fetch("https://67c9566f0acf98d07089d293.mockapi.io/games").then((r) =>
            r.json()
          ),
          fetch("https://67c9566f0acf98d07089d293.mockapi.io/tournaments").then(
            (r) => r.json()
          ),
        ]);
        setGames(gamesRes);
        setTournaments(tournRes);
      } catch (err) {
        setGames([]);
        setTournaments([]);
      } finally {
        setLoading(false); // ✅ hide loader after fetch
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {/* 🎥 Hero Video Section */}
      <section className="relative w-full h-[320px] max-md:hidden md:h-[480px] lg:h-[560px] mt-6 rounded-2xl overflow-hidden shadow-xl">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="assets/videos/hero-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001208] via-black/30 to-transparent" />

        {/* Content on top of video */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg">
            Join Exciting <span className="text-[#0CF285]">Tournaments</span>
          </h1>
          <p className="text-gray-200 mt-3 text-sm md:text-lg max-w-xl">
            Play your favorite games, compete with the best, and win big
            rewards.
          </p>
          <div className="mt-5 flex gap-4">
            <button className="bg-[#0CF285] text-black font-semibold px-6 py-2 rounded-lg shadow hover:scale-105 transition hover:cursor-pointer">
              Get Started
            </button>
            <button className="bg-white/20 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-white/30 transition hover:cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Premium Banner */}
      <section className="mt-4">
        <div className="card-add transition-all duration-500 ease-in-out">
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-4 md:gap-8">
              <h2 className="text-black font-bold text-xl md:text-2xl">
                {cards[activeIndex].title}
              </h2>
              <div className="px-4 py-1 premium text-black font-semibold rounded-md skew-x-[-15deg] shadow-sm">
                <span className="inline-block skew-x-[15deg]">
                  {cards[activeIndex].tag}
                </span>
              </div>
            </div>
            <button className="font-sans w-[90px] h-[30px] rounded-md flex items-center justify-center bg-[#FA7B4D] text-[14px]">
              {cards[activeIndex].btnText}
            </button>
          </div>

          <div className="w-full mt-2 flex items-center gap-2">
            {cards[activeIndex].icon && (
              <Image
                src={cards[activeIndex].icon}
                width={25}
                height={25}
                alt="card icon"
                className="inline"
              />
            )}
            <p className="text-black font-semibold">
              {cards[activeIndex].desc}
            </p>
          </div>

          <div className="text-[#01A74B] text-sm font-bold w-full mt-2">
            <Link href="#">
              View All Features{" "}
              <MdKeyboardArrowRight className="inline text-2xl" />
            </Link>
          </div>
        </div>

        {/* Slider circles */}
        <div className="mt-2 flex items-center justify-center gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`slider-circle transition-all hover:cursor-pointer ${
                activeIndex === i ? "bg-[#ffffff] scale-110" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Loader or Content */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0CF285]"></div>
          <p className="text-gray-400 mt-3">Loading data...</p>
        </div>
      ) : (
        <div>
          <GameCarousel games={games} from="home" />
          <TournamentCarousel
            tournaments={tournaments}
            title="Compete in Battles"
          />
          <div className="mt-8 mb-12">
            <FollowList list={followDummy} />
          </div>
        </div>
      )}
    </>
  );
}
