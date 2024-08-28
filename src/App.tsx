import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import MovieSelection from './components/MovieSelection';
import MovieQuiz from './components/MovieQuiz';
import { Movie } from './data';
import DarkModeToggle from './components/DarkModeToggle';
import { bbData } from './data/bb';
import { gotData } from './data/got';
import { himymData } from './data/himym';
import { friendsData } from './data/friends';
import { tbbtData } from './data/tbbt';
import { pnrData } from './data/pnr';
import { seinfeldData } from './data/seinfeld';
import { officeData } from './data/office';
import { rnmData } from './data/rnm';
import { dotsData } from './data/dotsData';
import { alchemyData } from './data/alchemy';
import { kingLandData } from './data/kingLand';
import { goblinData } from './data/goblin';
import { oknotokData } from './data/oknotok';
import { vincenzoData } from './data/vincenzo';
import { crashLandingData } from './data/crashLanding';
import { squidData } from './data/squid';
import { businessPropData } from './data/businessProp';
import Footer from './components/Footer';

export interface Question {
  question: string;
  options: string[];
  answer: string;
  image?: string;
}

const quizData: Record<string, Question[]> = {
  "Breaking Bad": bbData,
  "Game of Thrones": gotData,
  "How I Met Your Mother": himymData,
  "Friends": friendsData,
  "The Big Bang Theory": tbbtData,
  "Parks & Recreation": pnrData,
  "Seinfeld": seinfeldData,
  "The Office": officeData,
  "Rick & Morty": rnmData,
  "Descendants of the Sun": dotsData,
  "Alchemy of Souls": alchemyData,
  "King the Land": kingLandData,
  "Squid Game": squidData,
  "Business Proposal": businessPropData,
  "Goblin": goblinData,
  "It's Okay to Not Be Okay": oknotokData,
  "Vincenzo": vincenzoData,
  "CrashLanding": crashLandingData,
};

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleRestart = () => {
    setSelectedMovie(null);
    setSelectedAnswer("");
  };

  const handleBack = () => {
    setSelectedMovie(null);
    setSelectedAnswer("");
  };

  return (
    <Box maxW="800px" mx="auto" mt="50px" p="6" borderWidth="1px" borderRadius="lg">
      <DarkModeToggle />
      {!selectedMovie ? (
        <MovieSelection onSelect={handleMovieSelect} />
      ) : (
        <MovieQuiz
          movie={selectedMovie}
          questions={quizData[selectedMovie.title]}
          selectedAnswer={selectedAnswer}
          onAnswer={setSelectedAnswer}
          onRestart={handleRestart}
          onBack={handleBack}
        />
      )}
      <Footer />
    </Box>
  );
}

export default App;
