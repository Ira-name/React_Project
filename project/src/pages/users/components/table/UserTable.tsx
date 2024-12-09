import { memo } from "react";
import Table from "react-bootstrap/Table";

// import { useRenderCount } from "../../../../hooks/useRenderCount";
import { User } from "../../service/users.service";
import UserTableRow from "./UserTableRow";

interface UserTableProps {
  userList: User[];
  onUserItemDelete: (id: number) => void;
  onSaveUserButtonClick: (id: number, data: Partial<User>) => void;
}

const UserTableComponent = ({
  userList,
  onUserItemDelete,
  onSaveUserButtonClick,
}: UserTableProps) => {
  // const renderCount = useRenderCount();

  return (
    <>
      {/* <h5>UserTable count: {renderCount}</h5> */}
      <Table striped bordered hover variant="white">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
            {/* <th>Render Count</th> */}
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <UserTableRow
              key={user.id}
              user={user}
              onUserItemDelete={onUserItemDelete}
              onSaveUserButtonClick={onSaveUserButtonClick}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

const UserTable = memo(UserTableComponent);

export default UserTable;
