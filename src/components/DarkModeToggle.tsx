import React from 'react';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            variant="ghost"
            position="fixed"
            top="1rem"
            right="1rem"
        />
    );
};

export default DarkModeToggle;
