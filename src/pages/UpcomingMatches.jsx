import React, { useState, useEffect } from "react";

// Matches data
const initialMatches = [
  {
    id: 1,
    date: "June 5 '25 6:00",
    type: "T12",
    team1: "Riverside Thunder",
    team1Logo: "Riverside.png",
    team2: "Cantonment Cowboys",
    team2Logo: "Canttonment.png", 
    score1: "",
    score2: "",
    result: "",
    venue: "Bhuasuni Field, Cuttack",
    targetDate: new Date('2025-06-05T06:00:00'),
    startsIn: "",
    finished: false,
  },
  {
    id: 2,
    date: "June 6 '25 6:00",
    type: "T12",
    team1: "Barabati Blades",
    team1Logo: "Barabati.png",
    team2: "Riverside Thunder",
    team2Logo: "Riverside.png",
    score1: "",
    score2: "",
    result: "",
    venue: "Bhuasuni Field, Cuttack",
    targetDate: new Date('2025-06-06T06:00:00'),
    startsIn: "",
    finished: false,
  },
  {
    id: 3,
    date: "June 8 '25 6:00",
    type: "T12",
    team1: "Cantonment Cowboys",
    team1Logo: "Canttonment.png",
    team2: "Silver City Stars",
    team2Logo: "Silver_city.png",
    score1: "",
    score2: "",
    result: "",
    venue: "Bhuasuni Field, Cuttack",
    targetDate: new Date('2025-06-08T06:00:00'),
    startsIn: "",
    finished: false,
  },
  {
    id: 4,
    date: "Jun 9 '25 6:00",
    type: "T12",
    team1: "Barabati Blades",
    team1Logo: "Barabati.png",
    team2: "Silver City Stars",
    team2Logo: "Silver_city.png",
    score1: "",
    score2: "",
    result: "",
    venue: "Bhuasuni Field, Cuttack",
    targetDate: new Date('2025-06-09T06:00:00'),
    startsIn: "",
    finished: false,
  },
  {
    id: 5,
    date: "June 10 '25 6:00",
    type: "T12",
    team1: "Riverside Thunder",
    team1Logo: "Riverside.png",
    team2: "Silver City Stars",
    team2Logo: "Silver_city.png",
    score1: "",
    score2: "",
    result: "",
    venue: "Bhuasuni Field, Cuttack",
    targetDate: new Date('2025-06-10T06:00:00'),
    startsIn: "",
    finished: false,
  },
  {
    id: 6,
    date: "June 11 '25 6:00",
    type: "T12",
    team1: "Barabati Blades",
    team1Logo: "Barabati.png",
    team2: "Cantonment Cowboys",
    team2Logo: "Canttonment.png",
    score1: "",
    score2: "",
    result: "",
    venue: "Bhuasuni Field, Cuttack",
    targetDate: new Date('2025-06-11T06:00:00'),
    startsIn: "",
    finished: false,
  },
];

// Fallback logo for when one isn't provided in the match data
const DEFAULT_LOGO = "/vite.svg";
const CRICKET_LOGO = "Comrades.jpeg"; // The round logo to be added

export default function UpcomingMatches() {
  const [matches, setMatches] = useState(initialMatches);
  
  // Calculate and update countdowns
  useEffect(() => {
    const updateCountdowns = () => {
      const now = new Date();
      
      setMatches(prevMatches => prevMatches.map(match => {
        if (match.finished) return match;
        
        const timeDiff = match.targetDate - now;
        
        if (timeDiff <= 0) {
          // Match has started
          return {
            ...match,
            startsIn: "Match in progress",
            finished: false
          };
        }
          // Calculate remaining time
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        
        let countdownText = '';
        if (days > 0) countdownText += `${days} day${days !== 1 ? 's' : ''} `;
        if (hours > 0 || days > 0) countdownText += `${hours} hr${hours !== 1 ? 's' : ''} `;
        countdownText += `${minutes} min${minutes !== 1 ? 's' : ''}`;
        
        return {
          ...match,
          startsIn: countdownText
        };
      }));
    };
    
    // Update immediately and then every second
    updateCountdowns();
    const intervalId = setInterval(updateCountdowns, 1000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="py-10 bg-blue-50 relative">
      {/* Logo positioned at the left corner */}
      <div className="absolute left-6 top-6">
        <div className="relative flex items-center justify-center w-24 h-24"> {/* Increased size */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-pulse"></div>
          <img 
            src={CRICKET_LOGO} 
            alt="Cricket Logo" 
            className="w-20 h-20 rounded-full object-cover" /* Increased size */
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header without Logo */}
        <div className="flex flex-col items-center mb-8 mt-4">
          <h2 className="text-3xl font-bold tracking-wide text-gray-800">
            UPCOMING MATCHES
          </h2>
          <div className="h-1 w-36 bg-blue-600 mt-2"></div>
        </div>
        
        {/* Filter tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button className="px-4 py-2 bg-gray-800 text-white rounded-md">All Matches</button>
          
        </div>
        
        {/* Matches Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {matches.map((match) => (
            <div
              key={match.id}
              className="bg-white border-2 border-gray-800 rounded-lg shadow-lg p-5 w-full sm:w-80 flex flex-col justify-between transition-transform hover:scale-105"
            >
              <div className="text-xs text-gray-500 mb-2 flex justify-between">
                <span>{match.date}</span>
                <span className="font-semibold text-blue-600">{match.type}</span>
              </div>
              <div className="mb-3">
                <div className="flex items-center gap-2">
                  {/* Team 1 Logo */}
                  <img
                    src={match.team1Logo || DEFAULT_LOGO}
                    alt={match.team1 + " logo"}
                    className="w-8 h-8 object-contain rounded-full border border-gray-300 bg-white"
                  />
                  <span className="font-bold text-gray-800">{match.team1}</span>
                  {match.score1 && (
                    <span className="font-bold text-lg text-blue-700 ml-auto">{match.score1}</span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  {/* Team 2 Logo */}
                  <img
                    src={match.team2Logo || DEFAULT_LOGO}
                    alt={match.team2 + " logo"}
                    className="w-8 h-8 object-contain rounded-full border border-gray-300 bg-white"
                  />
                  <span className="font-bold text-gray-800">{match.team2}</span>
                  {match.score2 && (
                    <span className="font-bold text-lg text-blue-700 ml-auto">{match.score2}</span>
                  )}
                </div>
              </div>
                {/* Result or starts in */}
              {match.finished && match.result ? (
                <div className="text-green-700 text-sm mb-3 font-medium">{match.result}</div>
              ) : match.result ? (
                <div className="text-green-700 text-sm mb-3 font-medium">{match.result}</div>
              ) : (
                <div className="text-gray-700 text-sm mb-3">
                  <span className="font-bold">Match starts in:</span>{' '}
                  <span className="font-medium text-blue-600">{match.startsIn}</span>
                </div>
              )}

              <div className="flex items-center text-xs text-gray-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {match.venue}
              </div>
              <button className="w-full text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 mt-auto focus:outline-none focus:ring-2 focus:ring-gray-500">
                Match Info
              </button>
            </div>
          ))}
        </div>
        
        {/* View All Matches button */}
        
      </div>
    </div>
  );
}
