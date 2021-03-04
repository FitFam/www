import withApollo from "../lib/apolloClient";
import UserList, { ALL_USERS_QUERY } from "../components/UserList";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import SingUpForm from "../components/SignUpForm";

const Home = (props) => {
  return (
    <div>
      <SingUpForm />
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

export default Home;
