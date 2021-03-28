import React, { useContext, useEffect } from "react";
import UserContext from "./userContext";
import Router from "next/router";

const withAuth = (Component) => (props) => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      Router.push("/login");
    }
  }, [user]);

  if (user) return <Component {...props} loggedInUser={user} />;

  return null;
};

export default withAuth;
