interface IRegisterWorkout {
  id?: string;
  date: string;
  warming: {

  },
  set: {},
  superSet: {}
}

export interface IExercises {
  id: string;
  name: string;
  registers?: IRegisterWorkout[]
}

export interface IWorkout {
  nameWorkout: string;
  exercises: IExercises[]
  comment: string;
}