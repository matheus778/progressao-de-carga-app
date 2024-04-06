import { IRegisterWorkout } from "@/interfaces/IRegisterWorkout";
import { createContext, useState } from "react";

interface IRegisterWorkoutContext {
  registerWorkout: IRegisterWorkout[];
  setRegisterWorkout: React.Dispatch<React.SetStateAction<IRegisterWorkout[]>>;
}

export const RegisterWorkoutContext = createContext<IRegisterWorkoutContext>({} as IRegisterWorkoutContext);

export const RegisterWorkoutProvider = ({children}:{children: React.ReactNode}) => {
  const [registerWorkout, setRegisterWorkout] = useState<IRegisterWorkout[]>([]);

  return (
    <RegisterWorkoutContext.Provider value={{registerWorkout, setRegisterWorkout}}>
      {children}
    </RegisterWorkoutContext.Provider>
  )
}