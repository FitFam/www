import { gql, useQuery } from "@apollo/client";
import { Avatar, Flex, Box, Stack, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const ALL_USERS_QUERY = gql`
  query allUsers {
    users {
      id
      name
      email
      avatar
      username
    }
  }
`;

function UserList() {
  const { loading, error, data } = useQuery(ALL_USERS_QUERY);

  if (data && data.users) {
    return (
      <Stack spacing={3}>
        {data.users.map((user) => (
          <Flex key={user.id}>
            <NextLink href="/[username]" as={`/${user.username}`} passHref>
              <Link>
                <Avatar src={user.avatar} alt={user.name} mr={3} />
              </Link>
            </NextLink>

            <Box>
              <NextLink href="/[username]" as={`/${user.username}`} passHref>
                <Link>
                  <div>{user.name}</div>
                  <div>{user.email}</div>
                </Link>
              </NextLink>
            </Box>
          </Flex>
        ))}
      </Stack>
    );
  }

  return <div>No users</div>;
}

export default UserList;
