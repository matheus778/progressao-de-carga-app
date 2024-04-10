import { createContext, useState } from "react";

interface IUser {
  userName?:string
}

interface IUserContext {
  user: IUser;
  setUser:React.Dispatch<React.SetStateAction<IUser>>
}

export const UserContext = createContext<IUserContext>({} as IUserContext)

export const UserProvider = ({children}:{children:React.ReactNode}) => {
  const [user, setUser] = useState<IUser | {}>({});

  return(
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}