import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Flex, Box } from "@chakra-ui/react";

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
        <Box>{data.user.name}</Box>
        <Box>{data.user.bio}</Box>
      </Box>
    );
  }

  return <Box>User not found.</Box>;
}

export default UserProfile;
