import { LocalStorageService } from './adapterLocalStorage';

export const workoutStorage = new LocalStorageService('workoutt');
export const settingStorage = new LocalStorageService('settings');
export const registerWorkoutStorage = new LocalStorageService('registerWorkout');