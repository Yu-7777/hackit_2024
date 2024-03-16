'use client'
import { Box, Button, Center, Container, Heading, Stack, VStack } from "@chakra-ui/react";
import { FaDoorClosed } from "react-icons/fa";

export default function Home() {
  return (
    <VStack h="100vh" w="100vw" justify="center">
      <Stack spacing={5} mt={10} align="center">
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            きゅうおん！
          </Heading>
          <Heading as="h2" size="lg">
            <Box display="inline" color="#ff3132">Q</Box>-ON!
          </Heading>
        </Box>
        <Box color="gray">
          <p>アルバイトの給料を計算するならこのアプリ！</p>
        </Box>
      </Stack>

      <Box textAlign="center">
        <Button as="a" colorScheme="teal" size="lg" mt={10} leftIcon={<FaDoorClosed/>} href="/register">
          はじめる
        </Button>
      </Box>
    </VStack>
  );
}
