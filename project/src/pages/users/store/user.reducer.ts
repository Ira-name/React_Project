import { User } from "../service/users.service";
import { UserAction, UserActionTypes } from "./user.actions";

interface UserState {
  userList: User[];
  currentUser: User | null;
}

export const initialUserState: UserState = {
  userList: [],
  currentUser: null,
};

export const userReducer = (
  state: UserState = initialUserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.ADD_USER:
      return {
        ...state,
        userList: [...state.userList, action.payload as User],
      };

    case UserActionTypes.DELETE_USER:
      return {
        ...state,
        userList: state.userList.filter((user) => user.id !== action.payload),
      };

    case UserActionTypes.UPDATE_USER: {
      const { id, data } = action.payload as {
        id: number;
        data: Partial<User>;
      };
      return {
        ...state,
        userList: state.userList.map((user) =>
          user.id === id ? { ...user, ...data } : user
        ),
      };
    }

    case UserActionTypes.SET_USER_LIST:
      return {
        ...state,
        userList: action.payload as User[],
      };

    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload as User,
      };

    default:
      return state;
  }
};
