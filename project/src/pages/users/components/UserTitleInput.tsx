import React, { useCallback } from "react";

interface UserTitleInputProps {
  value: string;
  onUserTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserTitleInputComponent = ({
  value,
  onUserTitleChange,
}: UserTitleInputProps) => {
  const memoizedUserTitleChangeCallback = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onUserTitleChange(event);
    },
    [onUserTitleChange]
  );

  return (
    <input
      style={{
        width: "100%",
      }}
      type="text"
      value={value}
      onChange={memoizedUserTitleChangeCallback}
    />
  );
};

const UserTitleInput = React.memo(UserTitleInputComponent);

export default UserTitleInput;
