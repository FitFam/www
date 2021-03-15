import { gql, useQuery } from "@apollo/client";
import { Avatar, Flex, Box, Stack } from "@chakra-ui/react";

export const ALL_USERS_QUERY = gql`
  query allUsers {
    users {
      id
      name
      email
      avatar
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
            <Avatar src={user.avatar} alt={user.name} mr={3} />
            <Box>
              <div>{user.name}</div>
              <div>{user.email}</div>
            </Box>
          </Flex>
        ))}
      </Stack>
    );
  }

  return <div>No users</div>;
}

export default UserList;
