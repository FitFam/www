import React from "react";
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
import { gql, useQuery } from "@apollo/client";

export const GET_LOGGED_IN_USER_QUERY = gql`
  query getLoggedInUser {
    getLoggedInUser {
      id
      name
      username
      email
      avatar
    }
  }
`;

const LoggedInUserPicMenu = () => {
  const { loading, error, data } = useQuery(GET_LOGGED_IN_USER_QUERY);

  if (!data && !data?.getLoggedInUser) {
    return (
      <Button>
        <Link href="/login">Login</Link>
      </Button>
    );
  }

  const user = data.getLoggedInUser;

  return (
    <Menu>
      <MenuButton>
        <Avatar
          src={user.avatar}
          alt={user.name}
          height="35px"
          width="35px"
          ignoreFallback
        />
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
                window.location;
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
