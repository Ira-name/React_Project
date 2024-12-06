import { GenericAbortSignal } from "axios";
import { HttpClient } from "../../../utils/http/HttpClient";

interface PaginatedResponse {
  total: number;
  skip: number;
  limit: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password?: string;
}

export interface PaginatedUserResponse extends PaginatedResponse {
  users: User[];
}

type CreateUserRequest = Omit<User, "id">;
type UpdateUserRequest = Omit<User, "id">;
type DeleteUserResponse = User & {
  isDeleted: boolean;
  deletedOn: Date | string;
};

export class UserService {
  private httpClient: HttpClient;

  constructor(signal?: GenericAbortSignal) {
    this.httpClient = new HttpClient({
      baseURL: "https://dummyjson.com",
      signal,
    });
  }

  public async getUsers(): Promise<PaginatedUserResponse> {
    return await this.httpClient.get<PaginatedUserResponse>("/users");
  }

  public async getUserById(id: number): Promise<User> {
    return await this.httpClient.get<User>(`/users/${id}`);
  }

  public async searchUsers(query: string): Promise<PaginatedUserResponse> {
    return await this.httpClient.get<PaginatedUserResponse>(
      `/users/search?q=${query}`
    );
  }

  public async getPaginatedUsers(
    limit: number,
    skip: number
  ): Promise<PaginatedUserResponse> {
    return await this.httpClient.get<PaginatedUserResponse>(
      `/users?limit=${limit}&skip=${skip}`
    );
  }

  public async getFilteredUsers(
    key: string,
    value: string
  ): Promise<PaginatedUserResponse> {
    return await this.httpClient.get<PaginatedUserResponse>(
      `/users/filter?key=${key}&value=${value}`
    );
  }

  public async getSortedUsers(
    sortBy: string,
    order: "asc" | "desc"
  ): Promise<PaginatedUserResponse> {
    return await this.httpClient.get<PaginatedUserResponse>(
      `/users?sortBy=${sortBy}&order=${order}`
    );
  }

  public async addUser(user: CreateUserRequest): Promise<User> {
    return await this.httpClient.post<User, CreateUserRequest>(
      "/users/add",
      user
    );
  }

  public async updateUser(
    id: number,
    updates: UpdateUserRequest
  ): Promise<User> {
    return await this.httpClient.put<User, UpdateUserRequest>(
      `/users/${id}`,
      updates
    );
  }

  public async deleteUser(id: number): Promise<DeleteUserResponse> {
    return await this.httpClient.delete<DeleteUserResponse>(`/users/${id}`);
  }
}
