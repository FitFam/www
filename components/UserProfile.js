import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  Flex,
  Box,
  Avatar,
  Stack,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";

const GET_USER = gql`
  query UserProfile($username: String!) {
    user(username: $username) {
      id
      name
      email
      avatar
      username
      bio
      instagram
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

  if (loading) return null;

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

        <Stack spacing={3}>
          <Box>
            <Heading size="sm">Bio</Heading>
            <Text>{data.user.bio}</Text>
          </Box>

          <Box>
            <Heading size="sm">Instagram</Heading>
            <Link
              isExternal
              href={`https://instagram.com/${data.user.instagram}`}
            >
              {data.user.instagram}
            </Link>
          </Box>
        </Stack>
      </Box>
    );
  }

  return <Box>User not found.</Box>;
}

export default UserProfile;
