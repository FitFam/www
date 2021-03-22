import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Flex, Box, Avatar, Heading, Text } from "@chakra-ui/react";

const GET_USER = gql`
  query UserProfile($username: String!) {
    user(username: $username) {
      id
      name
      email
      avatar
      username
      bio
    }
  }
`;

function UserProfile() {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      username: router.query.username,
    },
  });

  if (data && data.user) {
    return (
      <Box>
        <Flex mb={4}>
          <Avatar src={data.user.avatar} mr={3} />
          <Box>
            <Heading size="md">{data.user.username}</Heading>
            <Box>{data.user.name}</Box>
          </Box>
        </Flex>

        <Text>{data.user.bio}</Text>
      </Box>
    );
  }

  return <Box>User not found.</Box>;
}

export default UserProfile;
