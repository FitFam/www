import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const GET_USER = gql`
  query UserProfile($username: String!) {
    user(username: $username) {
      id
      name
      email
      avatar
      username
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
    return <div>{data.user.name}</div>;
  }

  return <div>User not found.</div>;
}

export default UserProfile;
