import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

export const GET_LOGGED_IN_USER_QUERY = gql`
  query getLoggedInUser {
    getLoggedInUser {
      id
      name
      username
      email
      avatar
    }
  }
`;

const UserContext = React.createContext({});

export const UserProvider = (props) => {
  //let [user, setUser] = useState(null);
  const { loading, data, refetch } = useQuery(GET_LOGGED_IN_USER_QUERY);

  const user = loading || !data?.getLoggedInUser ? null : data?.getLoggedInUser;

  return (
    <UserContext.Provider value={{ user, refetch }}>
      {props.children}
    </UserContext.Provider>
  );
};
export const UserConsumer = UserContext.Consumer;
export default UserContext;
