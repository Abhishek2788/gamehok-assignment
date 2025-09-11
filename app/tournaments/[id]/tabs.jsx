"use client";

import TournamentCarousel from "@/app/components/TournamentCarousel";
import { capitalizeFirstLetter, epochToLocalString } from "@/lib/format";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TabsSection({ tournament, prizeTotal }) {
  const [active, setActive] = useState("overview");
  const [bestTournaments, setBestTournaments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [bestTournRes] = await Promise.all([
          fetch("https://67c9566f0acf98d07089d293.mockapi.io/tournaments").then(
            (r) => r.json()
          ),
        ]);
        setBestTournaments(bestTournRes);
      } catch (err) {
        setBestTournaments([]);
      } finally {
        setLoading(false); // ✅ hide loader after fetch
      }
    }
    fetchData();
  }, []);

  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "players", label: "Players" },
    { key: "rules", label: "Rules" },
  ];

  return (
    <div>
      {/* Tab Header */}
      <div className="flex border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`flex-1 py-3 text-sm font-medium ${
              active === tab.key
                ? "border-b-2 border-white text-white"
                : "text-gray-400"
            }`}
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pr-2">
        {active === "overview" && (
          <>
            <h3 className="font-semibold mb-2 text-[18px] pt-4 pl-4 text-[#ECECEC]">
              Details
            </h3>
            <div className="pl-4 pt-5 flex flex-col gap-1.5">
              <div className="flex gap-8">
                <Image
                  src="/assets/svg/team.svg"
                  alt="team"
                  width={32}
                  height={32}
                />
                <div>
                  <p className="text-[10px] text-[#A8A8A8]">TEAM SIZE</p>
                  <h2 className="text-[14px] text-white font-semibold">
                    {capitalizeFirstLetter(tournament.teamSize)}
                  </h2>
                </div>
              </div>
              <div className="flex gap-8">
                <Image
                  src="/assets/svg/elimination.svg"
                  alt="elimination"
                  width={32}
                  height={32}
                />
                <div>
                  <p className="text-[10px] text-[#A8A8A8]">TEAM SIZE</p>
                  <h2 className="text-[14px] text-white font-semibold">
                    Single Elimination
                  </h2>
                </div>
              </div>
              <div className="flex gap-8">
                <Image
                  src="/assets/svg/calendar.svg"
                  alt="calendar"
                  width={32}
                  height={32}
                />
                <div>
                  <p className="text-[10px] text-[#A8A8A8]">TEAM SIZE</p>
                  <h2 className="text-[14px] text-white font-semibold">
                    {epochToLocalString(tournament.tournamentStartTime)}
                  </h2>
                </div>
              </div>
              <div className="flex gap-8">
                <Image
                  src="/assets/svg/remainingtime.svg"
                  alt="checkin time"
                  width={32}
                  height={32}
                />
                <div>
                  <p className="text-[10px] text-[#A8A8A8]">CHECK-IN</p>
                  <h2 className="text-[14px] text-white font-semibold">
                    10 mins before the match starts
                  </h2>
                </div>
              </div>
            </div>

            {/* Prize Details */}
            <div className="mt-6 pl-4 rounded-2xl">
              <div className="bg-gradient-to-l from-[#4D5A53] to-[#182920] rounded-tl-xl rounded-tr-xl flex pl-3 pt-3.5 pb-3.5 justify-between pr-3">
                <h3 className="mb-2 text-[16px] font-semibold">
                  Total Tournament Prize
                </h3>
                <div className="flex gap-1 items-center text-[16px] font-semibold ">
                  {prizeTotal}
                  <Image
                    src="/assets/svg/groupnew.svg"
                    width={20}
                    height={20}
                    alt="group"
                  />
                </div>
              </div>
              <div className="space-y-1 text-sm">
                {tournament.prizeCoins?.split(",").map((p, i) => (
                  <div
                    key={i}
                    className="bg-[#192920] flex pl-3 pt-3.5 pb-3.5 justify-between pr-3 last:rounded-bl-xl last:rounded-br-xl transition-all ease-in duration-1000 hover:bg-[#274032]"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/svg/trophynew.svg"
                        width={24}
                        height={24}
                        alt="trophy"
                      />
                      <span className="text-[14px]">{i + 1} Prize</span>
                    </div>
                    <div className="flex gap-1 items-center text-[16px] font-semibold">
                      <span>{p}</span>
                      <Image
                        src="/assets/svg/groupnew.svg"
                        width={20}
                        height={20}
                        alt="group"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rounds and Schedule */}
            <div className="mt-8 pl-4">
              <h2 className="text-xl font-bold pb-4">Rounds and Schedule</h2>
              <div className="border-b-[#3C4B43] border-b-[1px] p-1 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-[12px] md:text-[16px] text-[#ECECEC]">
                    Qualifiers <span className="text-[#77847c]">(Round 1)</span>
                  </div>
                  <div className="md:text-[16px] bg-gradient-to-bl from-[#311A61] to-[#1C192E] pt-0.5 pb-0.5 pl-2 pr-2 rounded-[4px] text-[10px]">
                    Single Elimination
                  </div>
                </div>
                <div className="flex items-center justify-between pb-3">
                  <div className="text-[#ECECEC] text-xs md:text-[16px]">
                    Tap 4 to next round
                  </div>
                  <div className="text-[#ECECEC] text-xs md:text-[16px]">
                    3rd Aug, 10:00 pm
                  </div>
                </div>
              </div>

              <div className="border-b-[#3C4B43] border-b-[1px] p-1 flex flex-col gap-3 mt-3">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-[12px] text-[#ECECEC] md:text-[16px]">
                    Qualifiers <span className="text-[#77847c] md:text-[16px]">(Round 1)</span>
                  </div>
                  <div className="md:text-[16px] bg-gradient-to-bl from-[#311A61] to-[#1C192E] pt-0.5 pb-0.5 pl-2 pr-2 rounded-[4px] text-[10px]">
                    Single Elimination
                  </div>
                </div>
                <div className="flex items-center justify-between pb-3">
                  <div className="md:text-[16px] text-[#ECECEC] text-xs">
                    Tap 4 to next round
                  </div>
                  <div className="text-[#ECECEC] text-xs md:text-[16px]">
                    3rd Aug, 10:00 pm
                  </div>
                </div>
              </div>
            </div>

            {/* How to join a match */}
            <div className="mt-8 pl-4">
              <h2 className="text-xl font-bold pb-4">How to Join a Match</h2>
              <ul className="list-disc pl-6 text-[12px] md:text-[16px] text-[#BCBCBC]">
                <li>Have your game open already and on the latest version</li>
                <li>
                  Once the match is configured you will receive an invite
                  in-game to join the lobby.
                </li>
                <li>Join the match and wait for the game to start.</li>
                <li>
                  When eliminated return to the match room page to be ready to
                  join the next map in the round.
                </li>
              </ul>
            </div>

            {/* Organiser Details */}
            <div className="rounded-tl-2xl rounded-tr-2xl mt-8 border-[1px] border-[#1A2A21] ml-3">
              <div className="text-[14px] md:text-xl text-white bg-gradient-to-bl from-[#4D5A53] to-[#182920] rounded-tl-2xl rounded-tr-2xl pl-3 pt-3 pb-3">
                Organiser's Details and contact
              </div>
              <div className="pl-3 pt-5 pb-5 pr-3 flex flex-col gap-5">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Image
                        src="/assets/svg/groupnew.svg"
                        width={25}
                        height={25}
                        alt="group"
                      />
                      <span className="text-[#ECECEC] md:text-lg font-semibold">
                        Gamehok Esports
                      </span>
                    </div>
                    <button className="pt-2 pb-2 pl-4 pr-4 bg-[#002E14] text-[16px] transition-all duration-300 ease-in-out hover:bg-[#024519] text-white rounded-[8px]">
                      Follow
                    </button>
                  </div>
                  <p className="text-[#BCBCBC] text-[10px] md:text-[16px]">
                    This is the in house organiser of this platform you can
                    follow our page on this platform for regular updates
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  <div className="flex items-center gap-1 text-[#BCBCBC] text-[12px] md:text-[16px]">
                    <Image
                      src="/assets/svg/mobile.svg"
                      width={20}
                      height={20}
                      alt="mobile"
                    />
                    9890987754
                  </div>
                  <div className="flex items-center gap-1 text-[#BCBCBC] text-[12px] md:text-[16px]">
                    <Image
                      src="/assets/svg/email.svg"
                      width={20}
                      height={20}
                      alt="email"
                    />
                    Support@gamehok.com
                  </div>
                  <div className="flex items-center gap-1 text-[#BCBCBC] text-[12px] md:text-[16px]">
                    <Image
                      src="/assets/svg/whatsapp.svg"
                      width={20}
                      height={20}
                      alt="whatsapp"
                    />
                    9890987754
                  </div>
                </div>
              </div>
            </div>

            {/* More Tournaments For You */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0CF285]"></div>
                <p className="text-gray-400 mt-3">Loading data...</p>
              </div>
            ) : (
              <div className="pl-4 mt-8 mb-14">
                <TournamentCarousel
                  tournaments={bestTournaments}
                  title="More Tournaments For You"
                />
              </div>
            )}

          </>
        )}

        {active === "players" && (
          <div>
            <h3 className="font-semibold mb-2">Players</h3>
            <ul className="list-disc list-inside text-sm text-gray-300">
              {tournament.players?.length > 0 ? (
                tournament.players.map((player, i) => <li key={i}>{player}</li>)
              ) : (
                <p>No players registered yet.</p>
              )}
            </ul>
          </div>
        )}

        {active === "rules" && (
          <div>
            <h3 className="font-semibold mb-2">Rules</h3>
            <p className="text-sm text-gray-300 whitespace-pre-line">
              {tournament.rules || "No rules provided."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
