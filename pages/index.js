import withApollo from "../lib/apollo";
import UserList from "../components/UserList";

const Home = (props) => {
  return (
    <div>
      <UserList />
    </div>
  );
};

export default withApollo({ ssr: true })(Home);
