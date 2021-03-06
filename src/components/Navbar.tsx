/* eslint-disable react/jsx-props-no-spreading */
import {
    Box,
    Container,
    Flex,
    Heading,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList
} from '@chakra-ui/react';
import React from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Navbar: React.FC = () => {
    return (
        <header>
            <Box as="nav" w="100%" css={{ backdropFilter: 'blur(10px)' }}>
                <Container display="flex" p={2} maxW="container.md">
                    <Flex align="center" mr={5}>
                        <Heading as="h1" size="lg" letterSpacing="tighter">
                            <div>Here Logo</div>
                        </Heading>
                    </Flex>
                    <Flex
                        justify="right"
                        gap="5"
                        direction={{ base: 'column', md: 'row' }}
                        display={{ base: 'none', md: 'flex' }}
                        width={{ base: 'full', md: 'auto' }}
                        alignItems="center"
                        flexGrow={2}
                        mt={{ base: 4, md: 0 }}
                    >
                        <Link p={2} href="/" style={{ color: 'inherit' }}>
                            Works
                        </Link>
                        <Link p={2} bg="grassTeal" href="/" style={{ color: 'inherit' }}>
                            Posts
                        </Link>
                        <Link
                            p={2}
                            bg="grassTeal"
                            display="inline-flex"
                            alignItems="center"
                            style={{ gap: 4, color: 'inherit' }}
                            pl={2}
                            href="/"
                        >
                            <IoLogoGithub />
                            Source
                        </Link>
                    </Flex>

                    {/* @ts-ignore */}
                    <Box
                        align="right"
                        flex={1}
                        ml={2}
                        display={{ base: 'inline-block', md: 'none' }}
                    >
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <MenuItem
                                    as={Link}
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                    href="/"
                                >
                                    About
                                </MenuItem>
                                <MenuItem
                                    as={Link}
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                    href="/"
                                >
                                    Works
                                </MenuItem>
                                <MenuItem
                                    as={Link}
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                    href="/"
                                >
                                    Posts
                                </MenuItem>
                                <MenuItem
                                    as={Link}
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                    href="https://github.com/craftzdog/craftzdog-homepage"
                                >
                                    View Source
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Container>
            </Box>
        </header>
    );
};

export default Navbar;
