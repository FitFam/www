import React from "react";
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
  const { loading, data } = useQuery(GET_LOGGED_IN_USER_QUERY);
  const user = loading || !data?.getLoggedInUser ? null : data?.getLoggedInUser;
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
export const UserConsumer = UserContext.Consumer;
export default UserContext;
