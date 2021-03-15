import React, { useContext } from "react";
import withApollo from "../lib/apolloClient";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import UserContext from "../lib/userContext";
import SingUpForm from "../components/SignUpForm";

const Home = (props) => {
  const { user } = useContext(UserContext);

  return <div>{!user ? <SingUpForm /> : <div>Welcome</div>}</div>;
};

export default Home;
