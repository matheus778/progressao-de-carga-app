export interface IlocalStorage {
  save?:() => void;
  update?:() => void;
  delete: () => void;
}