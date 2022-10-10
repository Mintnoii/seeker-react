import { atom } from 'recoil'

const userAtom = atom({
  key: 'userAtom',
  default: null
})

export { userAtom }
