import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query allUsers {
    users {
      id
      name
      email
    }
  }
`;

function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (data && data.users) {
    return data.users.map((user) => (
      <div>
        <div>{user.name}</div>
        <div>{user.email}</div>
      </div>
    ));
  }

  return <div>No users</div>;
}

export default UserList;
