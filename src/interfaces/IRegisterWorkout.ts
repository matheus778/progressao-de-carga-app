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