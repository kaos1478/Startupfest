import { NextPage } from 'next'
import React, { createContext, useCallback, useState, useContext } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import initFirebase from '../services/firebase'
import { valueOf } from '*.jpg'

initFirebase()
const provider = new firebase.auth.GoogleAuthProvider()

const [user, setUser] = useState({})

export const signIn = useCallback(async () => {
  try {
    const result = await firebase.auth().signInWithPopup(provider)

    const { user } = result

    if (!user) {
      throw new Error('The was an issue authorizing')
    } else {
      setUser(user)
      return true
    }
  } catch (error) {
    console.log(error)
  }
}, [])

export const sign = () => {
  return !!user
}
