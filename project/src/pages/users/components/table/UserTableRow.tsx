import { ChangeEvent, memo, useCallback, useMemo, useState } from "react";

// import { useRenderCount } from "../../../../hooks/useRenderCount";
import { User } from "../../service/users.service";
import UserTitleInput from "../UserTitleInput";

interface UserTableRowProps {
  user: User;
  onUserItemDelete: (id: number) => void;
  onSaveUserButtonClick: (id: number, data: Partial<User>) => void;
}

const UserTableRowComponent = ({
  user,
  onUserItemDelete,
  onSaveUserButtonClick,
}: UserTableRowProps) => {
  // const renderCount = useRenderCount();

  const memoizedFirstName = useMemo(() => user.firstName, [user.firstName]);
  const memoizedLastName = useMemo(() => user.lastName, [user.lastName]);
  const memoizedEmail = useMemo(() => user.email, [user.email]);
  const memoizedUsername = useMemo(() => user.username, [user.username]);
  const memoizedPassword = useMemo(() => user.password || "", [user.password]);

  const [firstName, setFirstName] = useState(memoizedFirstName);
  const [lastName, setLastName] = useState(memoizedLastName);
  const [email, setEmail] = useState(memoizedEmail);
  const [username, setUsername] = useState(memoizedUsername);
  const [password, setPassword] = useState(memoizedPassword);

  const [isEditMode, setIsEditMode] = useState(false);

  const memoizedSetFirstName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFirstName(event.target.value);
    },
    []
  );

  const memoizedSetLastName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setLastName(event.target.value);
    },
    []
  );

  const memoizedSetEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    []
  );

  const memoizedSetUsername = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    },
    []
  );

  const memoizedSetPassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [],
  );
  const memoizedSetIsEditModeCallback = useCallback((isEdit: boolean) => {
    setIsEditMode(isEdit);
  }, []);

  const memoizedSaveUserButtonClickCallback = useCallback(() => {
    onSaveUserButtonClick(user.id, { firstName, lastName, email, username,password});
    setIsEditMode(false);
  }, [onSaveUserButtonClick, user.id, firstName, lastName, email, username, password]);

  const memoizedUserItemDeleteCallback = useCallback(() => {
    onUserItemDelete(user.id);
  }, [onUserItemDelete, user.id]);

  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>
        {isEditMode ? (
          <UserTitleInput
            value={firstName}
            onUserTitleChange={memoizedSetFirstName}
          />
        ) : (
          user.firstName
        )}
      </td>
      <td>
        {isEditMode ? (
          <UserTitleInput
            value={lastName}
            onUserTitleChange={memoizedSetLastName}
          />
        ) : (
          user.lastName
        )}
      </td>
      <td>
        {isEditMode ? (
          <UserTitleInput value={email} onUserTitleChange={memoizedSetEmail} />
        ) : (
          user.email
        )}
      </td>
      <td>
        {isEditMode ? (
          <UserTitleInput
            value={username}
            onUserTitleChange={memoizedSetUsername}
          />
        ) : (
          user.username
        )}
      </td>
      <td>
        {isEditMode ? (
          <UserTitleInput
            value={password}
            onUserTitleChange={memoizedSetPassword}
          />
        ) : (
          user.password
        )}
      </td>
      <td>
        <div
          style={{
            display: "flex",
            gap: "1em",
          }}
        >
          {isEditMode ? (
            <button onClick={memoizedSaveUserButtonClickCallback}>Save</button>
          ) : (
            <button onClick={() => memoizedSetIsEditModeCallback(true)}>
              Edit
            </button>
          )}
          {isEditMode ? (
            <button onClick={() => memoizedSetIsEditModeCallback(false)}>
              Cancel
            </button>
          ) : (
            <button onClick={memoizedUserItemDeleteCallback}>Delete</button>
          )}
        </div>
      </td>
      {/* <td>{renderCount}</td> */}
    </tr>
  );
};

const UserTableRow = memo(UserTableRowComponent);

export default UserTableRow;
