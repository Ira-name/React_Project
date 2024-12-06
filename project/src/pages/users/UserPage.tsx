import PageTitle from "../../components/layout/PageTitle";
import UsersTableContainer from "./components/table/UsersTableContainer";

const UserPage = () => {
  return (
    <div>
      <PageTitle title="Users" />
      <UsersTableContainer />
    </div>
  );
};

export default UserPage;
