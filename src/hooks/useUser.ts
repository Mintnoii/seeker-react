import { useState, useCallback } from 'react'
import { useRecoilState, useSetRecoilState, useResetRecoilState } from 'recoil'
import { useMount, useRequest } from 'ahooks'
import { userLogin } from '@/features/auth/api/login'
import { userAtom } from '@/stores'

type IUser = {
  username: string
  password: string
}

const useUser = () => {
  const setUser = useSetRecoilState(userAtom)
  const { run, data } = useRequest(userLogin, {
    manual: true,
    onSuccess: (data: any) => {
      console.log('userInfo', data)
      localStorage.setItem('user', JSON.stringify(data))
      setUser(data)
    }
  })

  const login = (user: IUser) => {
    run(user)

    // return fetchWrapper.post(`${baseUrl}/authenticate`, { username, password })
    //     .then(user => {
    //         // store user details and jwt token in local storage to keep user logged in between page refreshes
    //         localStorage.setItem('user', JSON.stringify(user));
    //         setAuth(user);

    //         // get return url from location state or default to home page
    //         const { from } = history.location.state || { from: { pathname: '/' } };
    //         history.push(from);
    //     });
  }

  return { login }
}
export default useUser
