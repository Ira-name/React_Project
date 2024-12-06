import { User } from "../service/users.service";

type UserPayloadTypes =
  | User[]
  | User
  | number
  | { id: number; data: Partial<User> };

export interface UserAction {
  type: UserActionTypes;
  payload: UserPayloadTypes;
}

export enum UserActionTypes {
  ADD_USER = "ADD_USER",
  UPDATE_USER = "UPDATE_USER",
  DELETE_USER = "DELETE_USER",
  SET_USER_LIST = "SET_USER_LIST",
  SET_CURRENT_USER = "SET_CURRENT_USER",
}

export const addUserAction = (user: User): UserAction => ({
  type: UserActionTypes.ADD_USER,
  payload: user,
});

export const updateUserAction = (
  id: number,
  data: Partial<User>
): UserAction => ({
  type: UserActionTypes.UPDATE_USER,
  payload: { id, data },
});

export const deleteUserAction = (id: number): UserAction => ({
  type: UserActionTypes.DELETE_USER,
  payload: id,
});

export const setUserListAction = (users: User[]): UserAction => ({
  type: UserActionTypes.SET_USER_LIST,
  payload: users,
});

export const setCurrentUserAction = (user: User): UserAction => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
