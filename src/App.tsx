import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import MovieSelection from './components/MovieSelection';
import MovieQuiz from './components/MovieQuiz';
import { Movie } from './data';
import DarkModeToggle from './components/DarkModeToggle';

interface Question {
  question: string;
  options: string[];
  answer: string;
  image?: string;
}

const quizData: Record<string, Question[]> = {
  "Breaking Bad": [
    {
      question: "What is Walter White's alias?",
      options: ["Heisenberg", "Gus", "Saul", "Hank"],
      answer: "Heisenberg",
      image: "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg", // Example image
    },
    {
      question: "Who was Walter White’s first partner in the meth business?",
      options: ["Jesse Pinkman", "Gus Fring", "Mike Ehrmantraut", "Tuco Salamanca"],
      answer: "Jesse Pinkman",
    },
  ],
  "Stranger Things": [
    {
      question: "What is the name of the parallel dimension in Stranger Things?",
      options: ["The Other Side", "The Reverse", "The Upside Down", "The Dark Side"],
      answer: "The Upside Down",
    },
  ],
  "Game of Thrones": [
    {
      question: "Who sits on the Iron Throne at the end of Game of Thrones?",
      options: ["Daenerys Targaryen", "Jon Snow", "Bran Stark", "Tyrion Lannister"],
      answer: "Bran Stark",
    },
  ],
  "The Dark Knight": [
    {
      question: "Who plays the Joker in The Dark Knight?",
      options: ["Jared Leto", "Jack Nicholson", "Joaquin Phoenix", "Heath Ledger"],
      answer: "Heath Ledger",
    },
  ],
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
        />
      )}
    </Box>
  );
}

export default App;
