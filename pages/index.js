import withApollo from "../lib/apollo";
import UserList from "../components/UserList";

const Home = (props) => {
  return (
    <div>
      <img src="/fitfam-blue@2x.png" alt="FitFam" height="25px" />
      <UserList />
    </div>
  );
};

export default withApollo({ ssr: true })(Home);
