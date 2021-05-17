import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  HStack,
  Text,
  Divider,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
// Icons
import {
  GearSix,
  Heart,
  Clock,
  Command,
  SignOut,
  Question,
} from 'phosphor-react';

export const Profile = () => {
  return (
    <Menu isLazy placement="bottom-start">
      <MenuButton
        name="Dan Abrahmov"
        src="https://i.pinimg.com/736x/f0/34/58/f034583d34bd2bd5e52732a7ecc96669.jpg"
        as={Avatar}
        cursor="pointer"
      />
      <MenuList
        bg="#1c2128"
        boxShadow="var(--dropdown-shadow)"
        border="1px solid var(--border-color)"
        color="hsla(0,0%,100%,.7)"
      >
        <StyledMenuItem command="⌘⇧S">
          <HStack>
            <GearSix size={20} />
            <Text>Settings</Text>
          </HStack>
        </StyledMenuItem>
        <StyledMenuItem command="⌘⇧F">
          <HStack>
            <Heart size={20} />
            <Text>Favouites</Text>
          </HStack>
        </StyledMenuItem>
        <StyledMenuItem command="⌘⇧W">
          <HStack>
            <Clock size={20} />
            <Text>Watch Later</Text>
          </HStack>
        </StyledMenuItem>
        <StyledMenuItem command="⌘⇧K">
          <HStack>
            <Command size={20} />
            <Text>Shortcuts</Text>
          </HStack>
        </StyledMenuItem>
        <StyledMenuItem command="⌘⇧H">
          <HStack>
            <Question size={20} />
            <Text>Help</Text>
          </HStack>
        </StyledMenuItem>
        <Divider color="var(--font-color)" />
        <StyledMenuItem command="⌘⇧L">
          <HStack>
            <SignOut size={20} />
            <Text>Sign Out</Text>
          </HStack>
        </StyledMenuItem>
      </MenuList>
    </Menu>
  );
};

const StyledMenuItem = styled(MenuItem)`
  :hover {
    background: #0d1117;
  }
  :focus {
    background: #0d1117;
  }
`;
