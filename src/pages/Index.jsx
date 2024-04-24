import { Box, Heading, Text, Image, Button, VStack, HStack, Container } from "@chakra-ui/react";
import { FaStar, FaFilm } from "react-icons/fa";

const movies = [
  {
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    imageUrl: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxJbmNlcHRpb24lMjBtb3ZpZXxlbnwwfHx8fDE3MTM5MjI3MjV8MA&ixlib=rb-4.0.3&q=80&w=1080",
    rating: "8.8/10",
  },
  {
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxJbnRlcnN0ZWxsYXIlMjBtb3ZpZXxlbnwwfHx8fDE3MTM5MjI3MjV8MA&ixlib=rb-4.0.3&q=80&w=1080",
    rating: "8.6/10",
  },
  {
    title: "The Matrix",
    description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    imageUrl: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxUaGUlMjBNYXRyaXglMjBtb3ZpZXxlbnwwfHx8fDE3MTM5MjI3MjV8MA&ixlib=rb-4.0.3&q=80&w=1080",
    rating: "8.7/10",
  },
];

const MovieCard = ({ movie }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
      <Image borderRadius="md" src={movie.imageUrl} alt={`Image of ${movie.title}`} />
      <Heading fontSize="xl" mt={4}>
        {movie.title}
      </Heading>
      <Text mt={2}>{movie.description}</Text>
      <HStack justifyContent="space-between" mt={3}>
        <Button leftIcon={<FaFilm />} colorScheme="teal" variant="solid">
          Watch Now
        </Button>
        <HStack>
          <FaStar color="yellow" />
          <Text>{movie.rating}</Text>
        </HStack>
      </HStack>
    </Box>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" my={10}>
          Movie Recommendations
        </Heading>
        <HStack spacing={8} alignItems="stretch">
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
