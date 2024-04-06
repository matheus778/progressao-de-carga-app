type RegisterInputType = {
  rep: number;
  weight: number;
}

export interface IRegisterWorkout {
  idExercise: string;
  date: string;
  warming: RegisterInputType,
  set: RegisterInputType,
  superSet: RegisterInputType
}

export interface IExercises {
  id: string;
  name: string;
}

export interface IWorkout {
  id:string;
  nameWorkout: string;
  exercises: IExercises[]
  comment: string;
}