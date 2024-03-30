export interface ILocalStorage{
  key: string;
  set:(value:object) => void;
  get: (to:string) => void;
  delete: () => void;
}