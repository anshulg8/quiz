import React, { useState } from 'react';
import { Box, Heading, Radio, RadioGroup, Stack, Button, Text, Flex, CircularProgress, CircularProgressLabel, Image } from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { Movie } from '../data';

interface Question {
    question: string;
    options: string[];
    answer: string;
    image?: string; // Optional image field
}

interface MovieQuizProps {
    movie: Movie;
    questions: Question[];
    selectedAnswer: string;
    onAnswer: (value: string) => void;
    onRestart: () => void;
}

const MovieQuiz: React.FC<MovieQuizProps> = ({
    movie,
    questions,
    selectedAnswer,
    onAnswer,
    onRestart,
}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [showScore, setShowScore] = useState<boolean>(false);

    const handleNextQuestion = () => {
        if (selectedAnswer === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }

        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < questions.length) {
            setCurrentQuestionIndex(nextIndex);
            onAnswer(""); // Reset answer selection for the next question
        } else {
            setShowScore(true);
        }
    };

    const shareMessage = `I scored ${score} out of ${questions.length} on the ${movie.title} quiz! Try it out!`;
    const url = window.location.href;

    const handleShare = (platform: string) => {
        let shareUrl = "";

        switch (platform) {
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(url)}`;
                break;
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            // case "linkedin":
            //     shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            //     break;
            case "whatsapp":
                shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage + " " + url)}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, "_blank");
    };

    return (
        <Box>
            <Heading as="h2" size="md" mb="6" textAlign="center">
                {movie.title} Quiz
            </Heading>
            {showScore ? (
                <>
                    <Text fontSize="xl" mb="4">
                        You scored {score} out of {questions.length}
                    </Text>
                    <Flex justifyContent="center" mb="4" gap="4">
                        <Button colorScheme="teal" onClick={onRestart}>
                            Restart Quiz
                        </Button>
                        <Button leftIcon={<FaTwitter />} colorScheme="twitter" onClick={() => handleShare("twitter")}>
                            Share
                        </Button>
                        <Button leftIcon={<FaFacebook />} colorScheme="facebook" onClick={() => handleShare("facebook")}>
                            Share
                        </Button>
                        {/* <Button leftIcon={<FaLinkedin />} colorScheme="linkedin" onClick={() => handleShare("linkedin")}>
                            Share
                        </Button> */}
                        <Button leftIcon={<FaWhatsapp />} colorScheme="whatsapp" onClick={() => handleShare("whatsapp")}>
                            Share
                        </Button>
                    </Flex>
                </>
            ) : (
                <>
                    <Flex justifyContent="center" mb="6">
                        <CircularProgress value={(currentQuestionIndex + 1) / questions.length * 100} color="teal.400" size="120px">
                            <CircularProgressLabel>
                                {currentQuestionIndex + 1}/{questions.length}
                            </CircularProgressLabel>
                        </CircularProgress>
                    </Flex>
                    {questions[currentQuestionIndex].image && (
                        <Image src={questions[currentQuestionIndex].image} alt="Question Image" mb="4" borderRadius="md" />
                    )}
                    <Text fontSize="lg" mb="4">
                        {questions[currentQuestionIndex].question}
                    </Text>
                    <RadioGroup onChange={onAnswer} value={selectedAnswer}>
                        <Stack direction="column">
                            {questions[currentQuestionIndex].options.map((option, index) => (
                                <Radio key={index} value={option}>
                                    {option}
                                </Radio>
                            ))}
                        </Stack>
                    </RadioGroup>
                    <Button
                        mt="4"
                        colorScheme="teal"
                        onClick={handleNextQuestion}
                        isDisabled={!selectedAnswer}
                    >
                        {currentQuestionIndex < questions.length - 1 ? "Next" : "Submit"}
                    </Button>
                </>
            )}
        </Box>
    );
};

export default MovieQuiz;
