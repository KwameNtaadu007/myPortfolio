import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack borderRadius="1rem" bg="white" spacing="0">
      <Image objectFit="cover" src={imageSrc} borderRadius="lg" />
      <VStack
        color="black"
        padding="1em"
        alignItems="flex-start"
        flexWrap="wrap"
        borderRadius="lg"
      >
        <Heading fontSize="1em" children={title} />
        <Text children={description} color="gray" />
        <HStack>
          <a href="#">
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
