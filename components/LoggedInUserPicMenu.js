import React, { useContext } from "react";
import NextLink from "next/link";
import {
  Link,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  Button,
  Box,
  Avatar,
} from "@chakra-ui/react";
import UserContext from "../lib/userContext";
import Router from "next/router";

const LoggedInUserPicMenu = () => {
  const { user, refetch } = useContext(UserContext);

  if (!user) {
    return (
      <Button>
        <Link href="/login">Login</Link>
      </Button>
    );
  }

  return (
    <Menu>
      <MenuButton>
        <Avatar src={user.avatar} alt={user.name} height="35px" width="35px" />
      </MenuButton>
      <MenuList>
        <MenuItem>
          <NextLink href="/[username]" as={`/${user.username}`}>
            <Link width="100%">@{user.username}</Link>
          </NextLink>
        </MenuItem>
        <MenuItem>
          <NextLink href="/profile/edit">
            <Link width="100%">Edit Profile</Link>
          </NextLink>
        </MenuItem>
        <MenuItem>
          <NextLink href="/">
            <Link
              onClick={() => {
                localStorage.removeItem("authToken");
                window.location.href = "/";
              }}
            >
              Log Out
            </Link>
          </NextLink>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LoggedInUserPicMenu;
