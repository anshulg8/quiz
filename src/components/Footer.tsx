import React from 'react';
import { Box, Text, Flex, Link } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <Box as="footer" width="100%" py="4" mt="8" borderTop="1px" borderColor="gray.200">
            <Flex justify="center" align="center" direction="column">
                <Text fontSize="sm">
                    Made with ❤️ by{' '}
                    <Link href="https://anshulgarg.in" isExternal>
                        Anshul Garg
                    </Link>
                </Text>
                <Text fontSize="sm">All rights reserved © 2024</Text>
                <Flex align="center" mt="2">
                    <FaGithub style={{ marginRight: '8px' }} />
                    <Link href="https://github.com/anshulg8" isExternal>
                        View on GitHub
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;
