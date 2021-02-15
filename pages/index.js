import withApollo from "../lib/apollo";
import UserList from "../components/UserList";

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

export default withApollo({ ssr: true })(Home);
