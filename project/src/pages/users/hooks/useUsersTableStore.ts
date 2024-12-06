import { useCallback, useEffect, useReducer, useState } from "react";
import { AxiosError } from "axios";
import { UserService ,User } from "../service/users.service";
import {
  addUserAction,
  deleteUserAction,
  setUserListAction,
  updateUserAction,
} from "../store/user.actions";
import { initialUserState, userReducer } from "../store/user.reducer";

export const useUserTableStore = () => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const abortController = new AbortController();
    const signal = abortController.signal;

    const userService = new UserService(signal);

    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await userService.getPaginatedUsers(20, 0);

        if (isMounted) {
          dispatch(setUserListAction(response.users));
        }
      } catch (error) {
        setError((error as AxiosError).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, []);

  const memoizedUserItemDeleteButtonClickCallback = useCallback(
    async (id: number) => {
      try {
        setLoading(true);

        await new UserService().deleteUser(id);

        dispatch(deleteUserAction(id));

        setLoading(false);
      } catch (error) {
        setError((error as AxiosError).message);
        setLoading(false);
      }
    },
    []
  );
  const memoizedAddUserCallback = useCallback(
    async (newUser: Partial<User>) => {
      try {
        setLoading(true);
  
        const userService = new UserService();
        const createdUser = await userService.addUser(newUser as User);
  
        dispatch(addUserAction(createdUser));
      } catch (error) {
        setError((error as AxiosError).message);
      } finally {
        setLoading(false);
      }
    },
    []
  );
  const memoizedSaveUserButtonClickCallback = useCallback(
    async (id: number, data: Partial<User>) => {
      try {
        if (!data) {
          return;
        }
        dispatch(updateUserAction(id, data));
      } catch (error) {
        setError((error as AxiosError).message);
      }
    },
    []
  );

  return {
    userList: state.userList,
    loading,
    error,
    memoizedUserItemDeleteButtonClickCallback,
    memoizedSaveUserButtonClickCallback,
    memoizedAddUserCallback,
  };
};
