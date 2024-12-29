// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Chessboard } from 'react-chessboard';
// import { Chess } from 'chess.js';
// import {
//   ChevronLeft,
//   ChevronRight,
//   SkipBack,
//   SkipForward,
//   Play,
//   Pause,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// // Mock game data
// const mockGame = {
//   moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6'],
//   analysis: [
//     { evaluation: 0.3, classification: 'Best Move' },
//     { evaluation: 0.2, classification: 'Good Move' },
//     { evaluation: -0.5, classification: 'Inaccuracy' },
//     { evaluation: 0.1, classification: 'Good Move' },
//     { evaluation: 0.0, classification: 'Best Move' },
//     { evaluation: -0.2, classification: 'Good Move' },
//   ],
// };

// export function GameAnalysis() {
//   const { gameId } = useParams();
//   const [game] = useState(new Chess());
//   const [currentMove, setCurrentMove] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);

//   // Initialize game
//   React.useEffect(() => {
//     mockGame.moves.forEach((move) => game.move(move));
//     game.reset();
//   }, [game]);

//   const goToMove = (moveNumber: number) => {
//     game.reset();
//     for (let i = 0; i <= moveNumber; i++) {
//       game.move(mockGame.moves[i]);
//     }
//     setCurrentMove(moveNumber);
//   };

//   const togglePlayback = () => {
//     setIsPlaying(!isPlaying);
//   };

//   React.useEffect(() => {
//     let interval: NodeJS.Timeout;
//     if (isPlaying) {
//       interval = setInterval(() => {
//         if (currentMove < mockGame.moves.length - 1) {
//           goToMove(currentMove + 1);
//         } else {
//           setIsPlaying(false);
//         }
//       }, 2000);
//     }
//     return () => clearInterval(interval);
//   }, [isPlaying, currentMove]);

//   return (
//     <div className="grid gap-8 lg:grid-cols-2">
//       <div>
//         <div className="mb-4 aspect-square">
//           <Chessboard
//             position={game.fen()}
//             boardWidth={600}
//             areArrowsAllowed={false}
//           />
//         </div>
//         <div className="flex items-center justify-center gap-2">
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={() => goToMove(0)}
//             disabled={currentMove === 0}
//           >
//             <SkipBack className="h-4 w-4" />
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={() => goToMove(currentMove - 1)}
//             disabled={currentMove === 0}
//           >
//             <ChevronLeft className="h-4 w-4" />
//           </Button>
//           <Button variant="outline" size="icon" onClick={togglePlayback}>
//             {isPlaying ? (
//               <Pause className="h-4 w-4" />
//             ) : (
//               <Play className="h-4 w-4" />
//             )}
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={() => goToMove(currentMove + 1)}
//             disabled={currentMove === mockGame.moves.length - 1}
//           >
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={() => goToMove(mockGame.moves.length - 1)}
//             disabled={currentMove === mockGame.moves.length - 1}
//           >
//             <SkipForward className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>

//       <div className="space-y-6">
//         <div>
//           <h2 className="text-xl font-semibold">Move List</h2>
//           <div className="mt-4 grid grid-cols-2 gap-2">
//             {mockGame.moves.map((move, index) => (
//               <div
//                 key={index}
//                 className={`flex cursor-pointer items-center justify-between rounded-md p-2 ${
//                   currentMove === index
//                     ? 'bg-blue-100 text-blue-900'
//                     : 'hover:bg-gray-100'
//                 }`}
//                 onClick={() => goToMove(index)}
//               >
//                 <span>
//                   {Math.floor(index / 2) + 1}.{index % 2 === 0 ? '' : '...'} {move}
//                 </span>
//                 <span
//                   className={`rounded-full px-2 py-1 text-xs ${
//                     mockGame.analysis[index].classification === 'Best Move'
//                       ? 'bg-green-100 text-green-800'
//                       : mockGame.analysis[index].classification === 'Good Move'
//                       ? 'bg-blue-100 text-blue-800'
//                       : 'bg-yellow-100 text-yellow-800'
//                   }`}
//                 >
//                   {mockGame.analysis[index].classification}
//                 </span>
//               </div>
//             ) )}
//           </div>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold">Evaluation Timeline</h2>
//           <div className="mt-4 h-48 w-full rounded-lg bg-white p-4 shadow">
//             <div className="h-full w-full">
//               {/* Add evaluation graph visualization here */}
//               <div className="relative h-full">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-200" />
//                 </div>
//                 {mockGame.analysis.map((analysis, index) => (
//                   <div
//                     key={index}
//                     className="absolute h-2 w-2 rounded-full bg-blue-600"
//                     style={{
//                       left: `${(index / (mockGame.analysis.length - 1)) * 100}%`,
//                       top: `${50 - analysis.evaluation * 20}%`,
//                     }}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { Chessboard } from "react-chessboard";
// import { Chess } from "chess.js";
// import {
//   ChevronLeft,
//   ChevronRight,
//   SkipBack,
//   SkipForward,
//   Play,
//   Pause,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";

// export function GameAnalysis() {
//   const { gameId } = useParams();
//   const [game, setGame] = useState(new Chess()); // Initialize with chess.js
//   const [currentMove, setCurrentMove] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [analysisData, setAnalysisData] = useState(null); // Store backend analysis
//   const [isLoading, setIsLoading] = useState(false);
//   const { state } = useLocation(); // Get state from location

//   // Access the PGN passed via state
//   const pgn = state?.pgn;

//   useEffect(() => {
//     if (pgn) {
//       game.loadPgn(pgn); // Load the PGN into the chess game object
//       setGame(game);
//       console.log("game", game);
//       sendPgnToBackend(pgn); // Send the PGN to the backend for analysis
//     }
//   }, [pgn]);

//   // Send the PGN to the backend for analysis
//   const sendPgnToBackend = async (pgn: any) => {
//     setIsLoading(true);
//     try {

//       // console.log("Sending PGN to backend:", pgn);
//       const response = await axios.post("http://localhost:8000/review", {
//         pgn,
//       });
//       console.log("Response from backend:", response.data);

//       if (response.status !== 200) {
//         throw new Error("Failed to send PGN to backend");
//       }

//       setAnalysisData(response.data); // Set the analysis data from the backend
//       console.log("analysisData", analysisData.analysis);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const gameMoves =  game.history();
//   console.log("gameMoves", gameMoves);

//   const goToMove = (moveNumber: any) => {
//     if (moveNumber < 0 || moveNumber >= gameMoves.length) return;
//     game.reset();
//     for (let i = 0; i <= moveNumber; i++) {
//       game.move(gameMoves[i]);
//     }
//     setCurrentMove(moveNumber);
//     setGame(game);
//   };

//   const togglePlayback = () => {
//     setIsPlaying(!isPlaying);
//   };

//   useEffect(() => {
//     let interval: string | number | NodeJS.Timeout | undefined;
//     if (isPlaying) {
//       interval = setInterval(() => {
//         if (currentMove < gameMoves.length - 1) {
//           goToMove(currentMove + 1);
//         } else {
//           setIsPlaying(false);
//         }
//       }, 2000); // 2 seconds per move
//     }
//     return () => clearInterval(interval);
//   }, [isPlaying, currentMove]);

//   return (
//     <div className="grid gap-8 lg:grid-cols-2">
//       <div>
//         <div className="mb-4 aspect-square">
//           <Chessboard
//             position={game.fen()} // Use the game object's FEN string
//             boardWidth={600}
//             areArrowsAllowed={false}
//           />
//         </div>
//         <div className="flex items-center justify-center gap-2">
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={() => goToMove(0)}
//             disabled={currentMove === 0}
//           >
//             <SkipBack className="h-4 w-4" />
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={() => goToMove(currentMove - 1)}
//             disabled={currentMove === 0}
//           >
//             <ChevronLeft className="h-4 w-4" />
//           </Button>
//           <Button variant="outline" size="icon" onClick={togglePlayback}>
//             {isPlaying ? (
//               <Pause className="h-4 w-4" />
//             ) : (
//               <Play className="h-4 w-4" />
//             )}
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={() => goToMove(currentMove + 1)}
//             disabled={currentMove === gameMoves.length - 1}
//           >
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={() => goToMove(gameMoves.length - 1)}
//             disabled={currentMove === gameMoves.length - 1}
//           >
//             <SkipForward className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>

//       <div className="space-y-6">
//         <div>
//           <h2 className="text-xl font-semibold">Move List</h2>
//           <div className="mt-4 grid grid-cols-2 gap-2">
//             {gameMoves.map(
//               (
//                 move: any,
//                 index: number
//               ) => (
//                 <div
//                   key={index}
//                   className={`flex cursor-pointer items-center justify-between rounded-md p-2 ${
//                     currentMove === index
//                       ? "bg-blue-100 text-blue-900"
//                       : "hover:bg-gray-100"
//                   }`}
//                   onClick={() => goToMove(index)}
//                 >
//                   <span>
//                     {Math.floor(index / 2) + 1}.{index % 2 === 0 ? "" : "..."}{" "}
//                     {move}
//                   </span>
//                   <span
//                     className={`rounded-full px-2 py-1 text-xs ${
//                       analysisData?.analysis[index]?.classification ===
//                       "Best Move"
//                         ? "bg-green-100 text-green-800"
//                         : analysisData?.analysis[index]?.classification ===
//                           "Good Move"
//                         ? "bg-blue-100 text-blue-800"
//                         : "bg-yellow-100 text-yellow-800"
//                     }`}
//                   >
//                     {analysisData?.analysis[index]?.classification}
//                   </span>
//                 </div>
//               )
//             )}
//           </div>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold">Evaluation Timeline</h2>
//           <div className="mt-4 h-48 w-full rounded-lg bg-white p-4 shadow">
//             <div className="h-full w-full">
//               <div className="relative h-full">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-200" />
//                 </div>
//                 {analysisData?.analysis.map(
//                   (
//                     analysis: { evaluation: number },
//                     index: number
//                   ) => (
//                     <div
//                       key={index}
//                       className="absolute h-2 w-2 rounded-full bg-blue-600"
//                       style={{
//                         left: `${
//                           (index / (analysisData.analysis.length - 1)) * 100
//                         }%`,
//                         top: `${50 - analysis.evaluation * 20}%`,
//                       }}
//                     />
//                   )
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { Chessboard } from "react-chessboard";
// import { Chess } from "chess.js";
// import {
//   ChevronLeft,
//   ChevronRight,
//   SkipBack,
//   SkipForward,
//   Play,
//   Pause,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import axios from "axios";

// export function GameAnalysis() {
//   const { gameId } = useParams();
//   const [game, setGame] = useState(new Chess()); // Initialize with chess.js
//   const [currentMove, setCurrentMove] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [analysisData, setAnalysisData] = useState<any>(null); // Store backend analysis
//   const [isLoading, setIsLoading] = useState(false);
//   const { state } = useLocation(); // Get state from location
//   const pgn = state?.pgn;

//   useEffect(() => {
//     if (pgn) {
//       const newGame = new Chess();
//       newGame.loadPgn(pgn); // Load the PGN into the chess game object
//       setGame(newGame);
//       sendPgnToBackend(pgn); // Send the PGN to the backend for analysis
//     }
//   }, [pgn]);

//   // Send the PGN to the backend for analysis
//   const sendPgnToBackend = async (pgn: string) => {
//     setIsLoading(true);
//     try {
//       const response = await axios.post("http://localhost:8000/review", {
//         pgn,
//       });
//       if (response.status === 200) {
//         console.log("Response from backend:", response.data);
//         setAnalysisData(response.data);
//       } else {
//         throw new Error("Failed to send PGN to backend");
//       }
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const gameMoves = game.history();

//   const goToMove = (moveNumber: number) => {
//     if (moveNumber < 0 || moveNumber >= gameMoves.length) return;
//     const newGame = new Chess();
//     newGame.loadPgn(pgn);
//     newGame.reset();
//     for (let i = 0; i <= moveNumber; i++) {
//       newGame.move(gameMoves[i]);
//     }
//     setCurrentMove(moveNumber);
//     setGame(newGame);
//   };

//   const togglePlayback = () => {
//     setIsPlaying(!isPlaying);
//   };

//   useEffect(() => {
//     let interval: NodeJS.Timeout | undefined;
//     if (isPlaying) {
//       interval = setInterval(() => {
//         if (currentMove < gameMoves.length - 1) {
//           goToMove(currentMove + 1);
//         } else {
//           setIsPlaying(false);
//         }
//       }, 2000); // 2 seconds per move
//     }
//     return () => clearInterval(interval);
//   }, [isPlaying, currentMove, gameMoves]);

//   return (
//     <div className="grid gap-8 lg:grid-cols-2">
//       <div>
//         <div className="mb-4 aspect-square">
//           <Chessboard
//             position={game.fen()} // Use the game object's FEN string
//             boardWidth={600}
//             areArrowsAllowed={false}
//           />
//         </div>
//         <div className="flex items-center justify-center gap-2">
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={() => goToMove(0)}
//             disabled={currentMove === 0}
//           >
//             <SkipBack className="h-4 w-4" />
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={() => goToMove(currentMove - 1)}
//             disabled={currentMove === 0}
//           >
//             <ChevronLeft className="h-4 w-4" />
//           </Button>
//           <Button variant="outline" size="icon" onClick={togglePlayback}>
//             {isPlaying ? (
//               <Pause className="h-4 w-4" />
//             ) : (
//               <Play className="h-4 w-4" />
//             )}
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={() => goToMove(currentMove + 1)}
//             disabled={currentMove === gameMoves.length - 1}
//           >
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={() => goToMove(gameMoves.length - 1)}
//             disabled={currentMove === gameMoves.length - 1}
//           >
//             <SkipForward className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>

//       <div className="space-y-6">
//         <div>
//           <h2 className="text-xl font-semibold">Evaluation Timeline</h2>
//           <div className="mt-4 h-48 w-full rounded-lg bg-white p-4 shadow">
//             <div className="relative h-full">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-200" />
//               </div>
//               {analysisData.analysis.map((analysis: any, index: number) => {
//                 const evaluation = analysis.c; // Assuming 'c' is the evaluation score

//                 return (
//                   <div
//                     key={index}
//                     className="absolute h-2 w-2 rounded-full bg-blue-600"
//                     style={{
//                       left: `${
//                         (index / (analysisData.analysis.length - 1)) * 100
//                       }%`, // Position based on the move index
//                       top: `${50 - evaluation * 20}%`, // Position vertically based on the evaluation score (you can adjust this factor)
//                     }}
//                   />
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center flex-col ">
//           <h2 className="text-xl font-bold">Move List</h2>
//           <div className="mt-4 grid grid-cols-2 gap-2 font-mono w-max h-[50vh] overflow-y-scroll ">
//             {gameMoves.map((move, index) => (
//               <div
//                 key={index}
//                 className={`flex cursor-pointer items-center justify-around rounded-md p-2 ${
//                   currentMove === index
//                     ? "bg-blue-100 text-blue-900"
//                     : "hover:bg-gray-300 hover:text-black "
//                 }`}
//                 onClick={() => {
//                   console.log("click");
//                 }}
//               >
//                 <span className="text-lg px-2">
//                   {Math.floor(index / 2) + 1} {move}
//                 </span>
//                 <span
//                   className={`rounded-md px-2 py-1 text-xl ${
//                     index + 1 < analysisData?.deviation_move
//                       ? "bg-gray-700 text-white"
//                       : analysisData?.analysis[
//                           index - analysisData?.deviation_move + 1
//                         ]?.c === "bm"
//                       ? "bg-green-400 text-black"
//                       : analysisData?.analysis[
//                           index - analysisData?.deviation_move + 1
//                         ]?.c === "gm"
//                       ? "bg-green-200 text-black"
//                       : analysisData?.analysis[
//                           index - analysisData?.deviation_move + 1
//                         ]?.c === "bl"
//                       ? "bg-red-500 text-black"
//                       : analysisData?.analysis[
//                           index - analysisData?.deviation_move + 1
//                         ]?.c === "in"
//                       ? "bg-orange-400 text-black"
//                       : "bg-yellow-100 text-yellow-800"
//                   }`}
//                 >
//                   {index + 1 < analysisData?.deviation_move
//                     ? "Book Move"
//                     : analysisData?.analysis[
//                         index - analysisData?.deviation_move + 1
//                       ]?.c === "bm"
//                     ? "Best Move"
//                     : analysisData?.analysis[
//                         index - analysisData?.deviation_move + 1
//                       ]?.c === "gm"
//                     ? "Good Move"
//                     : analysisData?.analysis[
//                         index - analysisData?.deviation_move + 1
//                       ]?.c === "bl"
//                     ? "Blunder"
//                     : analysisData?.analysis[
//                         index - analysisData?.deviation_move + 1
//                       ]?.c === "in"
//                     ? "Mistake"
//                     : "Bad Move"}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import {
  ChevronLeft,
  ChevronRight,
  SkipBack,
  SkipForward,
  Play,
  Pause,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";

export function GameAnalysis() {
  const { gameId } = useParams();
  const [game, setGame] = useState(new Chess()); // Initialize with chess.js
  const [currentMove, setCurrentMove] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [analysisData, setAnalysisData] = useState<any>(null); // Store backend analysis
  const [isLoading, setIsLoading] = useState(false);
  const { state } = useLocation(); // Get state from location
  const pgn = state?.pgn;

  useEffect(() => {
    if (pgn) {
      const newGame = new Chess();
      newGame.loadPgn(pgn); // Load the PGN into the chess game object
      setGame(newGame);
      sendPgnToBackend(pgn); // Send the PGN to the backend for analysis
    }
  }, [pgn]);

  // Send the PGN to the backend for analysis
  const sendPgnToBackend = async (pgn: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/review", {
        pgn,
      });
      if (response.status === 200) {
        setAnalysisData(response.data);
      } else {
        throw new Error("Failed to send PGN to backend");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const gameMoves = game.history();

  const goToMove = (moveNumber: number) => {
    if (moveNumber < 0 || moveNumber >= gameMoves.length) return;
    const newGame = new Chess();
    newGame.loadPgn(pgn);
    for (let i = 0; i < moveNumber; i++) {
      newGame.move(gameMoves[i]);
    }
    setCurrentMove(moveNumber);
    setGame(newGame);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isPlaying) {
      interval = setInterval(() => {
        if (currentMove < gameMoves.length - 1) {
          goToMove(currentMove + 1);
        } else {
          setIsPlaying(false);
        }
      }, 2000); // 2 seconds per move
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentMove, gameMoves]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <div className="mb-4 aspect-square">
          <Chessboard
            position={game.fen()} // Use the game object's FEN string
            boardWidth={600}
            areArrowsAllowed={false}
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => goToMove(0)}
            disabled={currentMove === 0}
          >
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => goToMove(currentMove - 1)}
            disabled={currentMove === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={togglePlayback}>
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => goToMove(currentMove + 1)}
            disabled={currentMove === gameMoves.length - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => goToMove(gameMoves.length - 1)}
            disabled={currentMove === gameMoves.length - 1}
          >
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Evaluation Timeline</h2>
          <div className="mt-4 h-48 w-full rounded-lg bg-white p-4 shadow">
            <div className="relative h-full">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg">Loading...</span>
                </div>
              ) : (
                analysisData?.analysis.map((analysis: any, index: number) => {
                  const evaluation = analysis.c; // Assuming 'c' is the evaluation score

                  return (
                    <div
                      key={index}
                      className="absolute h-2 w-2 rounded-full bg-blue-600"
                      style={{
                        left: `${
                          (index / (analysisData.analysis.length - 1)) * 100
                        }%`, // Position based on the move index
                        top: `${50 - evaluation * 20}%`, // Position vertically based on the evaluation score (you can adjust this factor)
                      }}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col ">
          <h2 className="text-xl font-bold">Move List</h2>
          <div className="mt-4 grid grid-cols-2 gap-2 font-mono w-max h-[50vh] overflow-y-scroll ">
            {gameMoves.map((move, index) => (
              <div
                key={index}
                className={`flex cursor-pointer items-center justify-around rounded-md p-2 ${
                  currentMove === index
                    ? "bg-blue-100 text-blue-900"
                    : "hover:bg-gray-300 hover:text-black "
                }`}
                onClick={() => goToMove(index)}
              >
                <span className="text-lg px-2">
                  {Math.floor(index / 2) + 1} {move}
                </span>
                <span
                  className={`rounded-md px-2 py-1 text-xl ${
                    index + 1 < analysisData?.deviation_move
                      ? "bg-gray-700 text-white"
                      : analysisData?.analysis[
                          index - analysisData?.deviation_move + 1
                        ]?.c === "bm"
                      ? "bg-green-400 text-black"
                      : analysisData?.analysis[
                          index - analysisData?.deviation_move + 1
                        ]?.c === "gm"
                      ? "bg-green-200 text-black"
                      : analysisData?.analysis[
                          index - analysisData?.deviation_move + 1
                        ]?.c === "bl"
                      ? "bg-red-500 text-black"
                      : analysisData?.analysis[
                          index - analysisData?.deviation_move + 1
                        ]?.c === "in"
                      ? "bg-orange-400 text-black"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {index + 1 < analysisData?.deviation_move
                    ? "Book Move"
                    : analysisData?.analysis[
                        index - analysisData?.deviation_move + 1
                      ]?.c === "bm"
                    ? "Best Move"
                    : analysisData?.analysis[
                        index - analysisData?.deviation_move + 1
                      ]?.c === "gm"
                    ? "Good Move"
                    : analysisData?.analysis[
                        index - analysisData?.deviation_move + 1
                      ]?.c === "bl"
                    ? "Blunder"
                    : analysisData?.analysis[
                        index - analysisData?.deviation_move + 1
                      ]?.c === "in"
                    ? "Mistake"
                    : "Bad Move"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
