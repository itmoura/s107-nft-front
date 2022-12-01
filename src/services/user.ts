import api from "./api";

export interface loginProps {
  email: string;
  password: string;
}

export interface User {
  userId: string;
  name: string;
  email: string;
  description: string;
  avatar: string;
  phone: string;
  cash: number;
}

export const login = async ({
  email,
  password,
}: loginProps): Promise<string> => {
  const response = await api.post("/login", { email, password });
  return response.data;
};

export const me = async (): Promise<User> => {
  const response = await api.get("/api/v1/users/me");
  return response.data;
};

export const addCash = async (cash: number): Promise<User> => {
  const response = await api.post(
    "/api/v1/users/add-cash",
    {},
    {
      params: {
        cash,
      },
    }
  );
  return response.data;
};

export interface createUserProps {
  name: string;
  email: string;
  password: string;
  description?: string;
  avatar?: string;
  phone?: string;
  cash?: number;
}

export const createUser = async (user: createUserProps): Promise<User> => {
  const response = await api.post("/api/v1/users/signup", user);
  return response.data;
};
