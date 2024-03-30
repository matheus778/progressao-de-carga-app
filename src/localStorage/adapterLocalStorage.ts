import { ILocalStorage } from './localStorageInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorageService implements ILocalStorage{
    key:string;

    constructor(name:string){
        this.key = name;
    }

    async get(){
        const getItems = await AsyncStorage.getItem(this.key);
        const json = getItems != null ? JSON.parse(getItems) : null;
        return json;
    }

   async set(obj:object) {
        const data = JSON.stringify(obj);
        await AsyncStorage.setItem(this.key, data);
    }

    delete() {
    }
}

export { LocalStorageService }