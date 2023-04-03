import React from "react";
import { Box, VStack, Heading, Divider } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

interface SidebarItemProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  id,
  label,
  isActive,
  onClick,
}) => {
  return (
    <MotionBox
      as="button"
      w="100%"
      textAlign="left"
      color={isActive ? "blue.200" : undefined}
      bg={isActive ? "gray.700" : undefined}
      _hover={{ backgroundColor: "gray.700", textDecoration: "none" }}
      onClick={() => onClick(id)}
      py={1}
      borderRadius="md"
      position="relative"
      animate={{ paddingLeft: isActive ? 25 : 10 }}
      transition={{ duration: 0.3 }}
    >
      {label}
      <AnimatePresence>
        {isActive && (
          <MotionBox
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.4 }}
            position="absolute"
            left={0}
            top={0}
            bottom={0}
            width="4px"
            backgroundColor={"blue.200"}
            borderRadius="md"
          />
        )}
      </AnimatePresence>
    </MotionBox>
  );
};

interface SidebarProps {
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar: React.FC<SidebarProps> = ({ activeLink, setActiveLink }) => {
  const links = [
    { id: "alerts", label: "Alerts" },
    { id: "users", label: "Users" },
  ];

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
  };

  return (
    <VStack
      sx={{ display: "flex", flex: 1 }}
      borderRight="1px"
      align="start"
      spacing={1}
    >
      <Box>
        <Heading size="sm" mb={2} fontSize={25}>
          Admin Panel
        </Heading>
      </Box>
      <Divider bg="white" />
      {links.map((link) => (
        <SidebarItem
          key={link.id}
          id={link.id}
          label={link.label}
          isActive={activeLink === link.id}
          onClick={handleLinkClick}
        />
      ))}
    </VStack>
  );
};

export default Sidebar;
