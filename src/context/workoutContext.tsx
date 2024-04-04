import { IWorkout } from "@/interfaces/IWorkout";
import { createContext, useContext, useState } from "react";

interface IWorkoutContext {
  workout:IWorkout[];
  setWorkout:React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const WorkoutContext = createContext<IWorkoutContext>({} as IWorkoutContext);

export const WorkoutProvider = ({children}:{children: React.ReactNode}) => {
  const [workout, setWorkout] = useState<IWorkout[]>([]);
  return (
    <WorkoutContext.Provider value={{workout,setWorkout}}>
      {children}
    </WorkoutContext.Provider>
  )
}