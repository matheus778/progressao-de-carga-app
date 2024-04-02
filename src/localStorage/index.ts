import { LocalStorageService } from './adapterLocalStorage';

const workoutStorage = new LocalStorageService('workoutt');
const settingStorage = new LocalStorageService('settings');

export { workoutStorage, settingStorage };