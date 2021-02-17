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

  console.log("loggedInUserPicMenu", data);

  if (!data.getLoggedInUser) {
    return (
      <Button>
        <Link href={`${process.env.NEXT_PUBLIC_AUTH_API_URL}/facebook`}>
          Login
        </Link>
      </Button>
    );
  }

  const user = data.getLoggedInUser;

  return (
    <Menu>
      <MenuButton>
        <Image
          src={user.avatar}
          alt={user.name}
          height="35px"
          rounded="full"
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
          <NextLink href="/[username]/edit" as={`/${user.username}/edit`}>
            <Link width="100%">Edit Profile</Link>
          </NextLink>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LoggedInUserPicMenu;
