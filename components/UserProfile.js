import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const GET_USER = gql`
  query UserProfile($id: ID!) {
    user(id: $id) {
      id
      name
      email
      avatar
    }
  }
`;

function UserProfile() {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      id: router.query.username,
    },
  });

  if (data && data.user) {
    return <div>{data.user.name}</div>;
  }

  return <div>User not found.</div>;
}

export default UserProfile;
