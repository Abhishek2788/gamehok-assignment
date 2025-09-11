import Image from "next/image"
import Link from "next/link"
import TabsSection from "./tabs"

async function getTournament(id) {
  try {
    const res = await fetch(
      "https://67c9566f0acf98d07089d293.mockapi.io/tournaments",
      { cache: "no-store" }
    )

    if (!res.ok) {
      console.error("Failed to fetch tournaments", res.status)
      return null
    }

    const data = await res.json()
    return data.find(t => String(t.id) === String(id)) || null
  } catch (error) {
    console.error("Fetch error:", error)
    return null
  }
}


export default async function TournamentDetailPage({ params }) {
  const { id } = await params // 
  const tournament = await getTournament(id)

  // calculate prize pool
  const prizeTotal = tournament.prizeCoins
    ? tournament.prizeCoins.split(",").reduce((a, b) => a + +b, 0)
    : 0

  return (
    <div className="text-white mt-2 md:pr-8">
      {/* Banner */}
      <div className="relative">
        <Image
          src={tournament.thumbnailPath || "/assets/images/apexlegends.jpg"}
          alt={tournament.name}
          width={800}
          height={400}
          className="w-full h-[200px] md:h-[400px]"
        />
        <Link href='#' >
          <div className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs">
            <Image src='/assets/svg/forward.svg' width={24} height={24} alt="foward icon" />
          </div>
        </Link>
        <Link href='/tournaments' >
          <div className="absolute top-2 left-2 px-2 py-1 rounded-full text-xs">
            <Image src='/assets/svg/backward.svg' width={24} height={24} alt="backward icon" />
          </div>
        </Link>
        <div className="absolute bottom-2 left-2 bg-black/70 text-xs px-3 py-1 rounded-full">
          {tournament.status === "upcoming"
            ? "Registration Open"
            : tournament.status === "ongoing"
            ? "Live"
            : "Completed"}
        </div>
        <div className="flex gap-2 absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded-full text-xs">
          <Image src='/assets/svg/group.svg' width={12} height={12} alt="group" />
          {tournament.registeredCount}/{tournament.totalCount}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[18px] font-bold w-[214px] h-[24px]">{tournament.name}</h2>
            <p className="text-xs pt-1 font-semibold h-[16px] text-gray-300">
              By {tournament.organizerDetails?.name}
            </p>
          </div>
          <Image
            src={
              tournament.organizerDetails?.profileImagePath ||
              "/assets/images/redbull.png"
            }
            alt="organizer"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        <div className="flex gap-2 mt-3">
          <div className="bg-[#002E14] pt-0.5 pb-0.5 pl-2 pr-2 right-2 text-xs rounded-[4px] flex items-center ">
            {tournament.gameName}
          </div>
          <div className="bg-[#002E14] top-0.5 bottom-0.5 left-2 right-2 text-xs rounded-[4px] pt-0.5 pb-0.5 pl-2 pr-2 flex items-center">
            Entry - {tournament.entryFees}
            <Image
              src="/assets/svg/coin.svg"
              width={12}
              height={12}
              alt="coin"
              className="inline ml-1"
            />
          </div>
        </div>
      </div>

      <TabsSection tournament={tournament} prizeTotal={prizeTotal} />


      {/* Join button */}
      <div className="p-4">
        <button className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-bold hover:cursor-pointer">
          JOIN TOURNAMENT
        </button>
      </div>
    </div>
  )
}
