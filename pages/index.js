import withApollo from "../lib/apolloClient";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import SingUpForm from "../components/SignUpForm";

const Home = (props) => {
  return (
    <div>
      <SingUpForm />
    </div>
  );
};

export default Home;
