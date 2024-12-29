// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Chessboard } from 'react-chessboard';
// import { Chess } from 'chess.js';
// import { Button } from '@/components/ui/button';
// import { Search, Filter } from 'lucide-react';
// import { formatDate } from '@/lib/utils';

// // Mock data for demonstration
// const mockGames = [
//   {
//     id: '1',
//     date: new Date('2024-02-20'),
//     opponent: 'Magnus_Carlsen',
//     result: 'Win',
//     platform: 'Lichess',
//     length: '32 moves',
//     fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
//   },
//   // Add more mock games...
// ];

// export function GameArchive() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [platform, setPlatform] = useState('all');

//   const filteredGames = mockGames.filter((game) => {
//     const matchesSearch = game.opponent
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());
//     const matchesPlatform =
//       platform === 'all' || game.platform.toLowerCase() === platform;
//     return matchesSearch && matchesPlatform;
//   });

//   return (
//     <div>
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900">Game Archive</h1>
//         <p className="mt-2 text-gray-600">
//           View and analyze your past chess games from Lichess and Chess.com
//         </p>
//       </div>

//       <div className="mb-6 flex gap-4">
//         <div className="relative flex-1">
//           <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search by opponent..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full rounded-md border-gray-300 pl-10 focus:border-blue-500 focus:ring-blue-500"
//           />
//         </div>
//         <select
//           value={platform}
//           onChange={(e) => setPlatform(e.target.value)}
//           className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//         >
//           <option value="all">All Platforms</option>
//           <option value="lichess">Lichess</option>
//           <option value="chess.com">Chess.com</option>
//         </select>
//       </div>

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {filteredGames.map((game) => (
//           <div
//             key={game.id}
//             className="rounded-lg bg-white p-4 shadow transition-shadow hover:shadow-md"
//           >
//             <div className="mb-4 aspect-square">
//               <Chessboard
//                 position={game.fen}
//                 boardWidth={300}
//                 areArrowsAllowed={false}
//               />
//             </div>
//             <div className="mb-4">
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-gray-500">
//                   {formatDate(game.date)}
//                 </span>
//                 <span
//                   className={`rounded-full px-2 py-1 text-xs font-medium ${
//                     game.result === 'Win'
//                       ? 'bg-green-100 text-green-800'
//                       : game.result === 'Loss'
//                       ? 'bg-red-100 text-red-800'
//                       : 'bg-yellow-100 text-yellow-800'
//                   }`}
//                 >
//                   {game.result}
//                 </span>
//               </div>
//               <p className="mt-2 font-medium text-gray-900">vs {game.opponent}</p>
//               <p className="text-sm text-gray-500">
//                 {game.platform} • {game.length}
//               </p>
//             </div>
//             <div className="flex gap-2">
//               <Link to={`/analysis/${game.id}`} className="flex-1">
//                 <Button className="w-full">Analyze</Button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chessboard } from "react-chessboard";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import axios from "axios";
import { formatDate } from "@/lib/utils";

// Game Archive Component
export function GameArchive() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [platform, setPlatform] = useState("all");

  // Fetch the games data from backend using Axios
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/games", {
          params: {
            username: "puneethm123",
            platform: "chess.com", // Modify if required for other platforms
          },
        });

        setGames(response.data.games); // Set the games from the response
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  // Filtering games based on the search term and platform
  const filteredGames = games.filter((game: any) => {
    const matchesSearch =
      game.white.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.black.username.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform =
      platform === "all" ||
      game.platform.toLowerCase() === platform.toLowerCase();
    return matchesSearch && matchesPlatform;
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Game Archive</h1>
        <p className="mt-2 text-gray-600">
          View and analyze your past chess games from Lichess and Chess.com
        </p>
      </div>

      <div className="mb-6 flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by opponent..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border-gray-300 pl-10 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="all">All Platforms</option>
          <option value="lichess">Lichess</option>
          <option value="chess.com">Chess.com</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredGames.map((game: any) => (
          <div
            key={game.uuid}
            className="rounded-lg bg-white p-4 shadow transition-shadow hover:shadow-md"
          >
            <div className="mb-4 aspect-square">
              <Chessboard
                position={game.fen}
                boardWidth={300}
                areArrowsAllowed={false}
              />
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {formatDate(new Date(game.end_time * 1000))}
                </span>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                    game.white.result === "win"
                      ? "bg-green-100 text-green-800"
                      : game.white.result === "loss"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {game.white.result}
                </span>
              </div>
              <p className="mt-2 font-medium text-gray-900">
                vs {game.black.username}
              </p>
              <p className="text-sm text-gray-500">
                {game.platform} • {game.length} moves
              </p>
            </div>
            <div className="flex gap-2">
              {/* here we need to send pgn of the game selected */}
              <Link
                to={`/analysis/${game.uuid}`}
                state={{ pgn: game.pgn }}
                className="flex-1"
              >
                <Button className="w-full">Analyze</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
