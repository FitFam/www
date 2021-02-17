import { gql, useQuery } from "@apollo/client";

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
    return data.users.map((user) => (
      <div key={user.id}>
        <div>
          <img src={user.avatar} alt={user.name} />
        </div>
        <div>{user.name}</div>
        <div>{user.email}</div>
      </div>
    ));
  }

  return <div>No users</div>;
}

export default UserList;
