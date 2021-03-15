import withApollo from "../lib/apolloClient";
import UserList, { ALL_USERS_QUERY } from "../components/UserList";
import { initializeApollo, addApolloState } from "../lib/apolloClient";

const UsersPage = (props) => {
  return (
    <div>
      <UserList />
    </div>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_USERS_QUERY,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default UsersPage;
