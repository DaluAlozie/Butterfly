import { createContext } from "react";

type UserType = {
  id: string,
  firstName: string,
  surname: string,
  email: string
}

const UserContext = createContext<UserType | null>(null);

export{ type UserType, UserContext }