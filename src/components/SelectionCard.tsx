import React from "react";
import { Box, Image, Text, Stack } from "@chakra-ui/react";
import { Movie } from "../data";

interface SelectionCardProps {
  movie: Movie;
  onSelect: () => void;
}

const SelectionCard: React.FC<SelectionCardProps> = ({ movie, onSelect }) => {
  return (
    <Box
      maxW="200px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={onSelect}
      cursor="pointer"
      _hover={{ transform: "scale(1.05)", transition: "0.2s" }}
    >
      <Image src={movie.imageUrl} alt={movie.title} />
      <Box p="4">
        <Stack align="center">
          <Text fontSize="lg" fontWeight="bold">
            {movie.title}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default SelectionCard;
