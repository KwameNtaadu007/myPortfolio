import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { transform } from "framer-motion";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: engyamfi@st.ug.edu.gh",
  },
  {
    icon: faGithub,
    url: "https://github.com/KwameNtaadu742b4949",
  },
  {
    icon: faLinkedin,
    url: "https://gh.linkedin.com/in/emmanuel-kwame-gyamfi-742b4949",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        headerRef.current.style.transform = "translateY(0)";
      } else {
        headerRef.current.style.transform = "translateY(-200px)";
      }
      setPrevScrollPos(currentScrollPos);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      ref={headerRef}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack>
              <a href={socials[0].url}>
                <FontAwesomeIcon icon={socials[0].icon} size="2x" />
              </a>
              <a href={socials[1].url}>
                <FontAwesomeIcon icon={socials[1].icon} size="2x" />
              </a>
              <a href={socials[2].url}>
                <FontAwesomeIcon icon={socials[2].icon} size="2x" />
              </a>
              <a href={socials[3].url}>
                <FontAwesomeIcon icon={socials[3].icon} size="2x" />
              </a>
              <a href={socials[4].url}>
                <FontAwesomeIcon icon={socials[4].icon} size="2x" />
              </a>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#projects" onClick={() => handleClick("projects")}>
                Projects
              </a>
              <a href="/#contact-me" onClick={() => handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
