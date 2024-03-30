import { LocalStorageService } from './adapterLocalStorage';

const exercisesStorage = new LocalStorageService('exercises');
const settingStorage = new LocalStorageService('settings');

export { exercisesStorage, settingStorage };