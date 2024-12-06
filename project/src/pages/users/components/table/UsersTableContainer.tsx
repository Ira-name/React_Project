import ErrorMessage from "../../../../components/layout/ErrorMessage";
import Loading from "../../../../components/layout/Loading";
import { useRenderCount } from "../../../../hooks/useRenderCount";

import UserTable from "./UserTable";
import { useUserTableStore } from "../../hooks/useUsersTableStore";
import AddUserForm from "../AddUserForm";

const UsersTableContainer = () => {
  const renderCount = useRenderCount();

  const {
    error,
    loading,
    memoizedSaveUserButtonClickCallback,
    memoizedUserItemDeleteButtonClickCallback,
    memoizedAddUserCallback,
    userList,
  } = useUserTableStore();

  return (
    <div>
      <h5>UsersTableContainer count: {renderCount}</h5>
      {loading && <Loading />}
      {error && <ErrorMessage error={error} />}
      <AddUserForm onAddUser={memoizedAddUserCallback} />
      <UserTable
        userList={userList}
        onUserItemDelete={memoizedUserItemDeleteButtonClickCallback}
        onSaveUserButtonClick={memoizedSaveUserButtonClickCallback}
      />
    </div>
  );
};

export default UsersTableContainer;
