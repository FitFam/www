import withApollo from "../lib/apolloClient";
import UserList, { ALL_USERS_QUERY } from "../components/UserList";
import { initializeApollo, addApolloState } from "../lib/apolloClient";

const Home = (props) => {
  return (
    <div>
      <a href={`${process.env.NEXT_PUBLIC_AUTH_API_URL}/facebook`}>
        Sign Up With Facebook
      </a>
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
