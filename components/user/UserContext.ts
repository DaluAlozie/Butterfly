import { createContext } from "react";

type UserType = {
    firstName: string,
    surname: string,
    email: string
  }

const UserContext = createContext<UserType | null>(null);

export{ type UserType, UserContext }