import { atom } from 'recoil'

const localStorageEffect = (key:string) => ({setSelf}:any) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }
};

const userAtom = atom({
  key: 'userAtom',
  default: null,
  effects: [
    localStorageEffect('user-token'),
  ]
})

export { userAtom }
