import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <Box borderRadius="lg" bg="white">
      <VStack spacing={3}>
        <Image src={imageSrc} borderRadius="lg" />
        <VStack spacing={3} p={3} align="left">
          <Heading size="sm" color="black">
            {title}
          </Heading>
          <Text color="gray" fontSize={13}>
            {description}
          </Text>
          <HStack spacing={4}>
            <Text color="black">See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Card;
