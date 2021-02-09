import withApollo from "../lib/apollo";
import UserProfile from "../components/UserProfile";

const UserProfilePage = (props) => {
  return <UserProfile />;
};

export default withApollo({ ssr: true })(UserProfilePage);
