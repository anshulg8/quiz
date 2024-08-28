import React, { useState } from 'react';
import { SimpleGrid, Box, Heading, Input } from '@chakra-ui/react';
import SelectionCard from './SelectionCard';
import { Movie, tvShowsAndMovies } from '../data';

interface MovieSelectionProps {
    onSelect: (movie: Movie) => void;
}

const MovieSelection: React.FC<MovieSelectionProps> = ({ onSelect }) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filteredMovies = tvShowsAndMovies.filter((movie: Movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Box>
            <Heading as="h2" size="md" mb="6" textAlign="center">
                Select Your Favorite TV Show
            </Heading>
            <Input
                placeholder="Search for a TV show or movie..."
                mb="6"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SimpleGrid columns={[1, 2, 3]} spacing="20px">
                {filteredMovies.map((movie) => (
                    <SelectionCard
                        key={movie.id}
                        movie={movie}
                        onSelect={() => onSelect(movie)}
                    />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default MovieSelection;
