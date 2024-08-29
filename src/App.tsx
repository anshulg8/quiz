import { useState } from "react";
import { Box } from "@chakra-ui/react";
import MovieSelection from "./components/MovieSelection";
import MovieQuiz from "./components/MovieQuiz";
import { Movie } from "./data";
import DarkModeToggle from "./components/DarkModeToggle";
import Footer from "./components/Footer";

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
    <Box
      maxW="800px"
      mx="auto"
      mt="50px"
      p="6"
      borderWidth="1px"
      borderRadius="lg"
    >
      <DarkModeToggle />
      {!selectedMovie ? (
        <MovieSelection onSelect={handleMovieSelect} />
      ) : (
        <MovieQuiz
          movie={selectedMovie}
          questions={selectedMovie.quizData}
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
