"use client";
import React, { createContext, useEffect, ReactNode } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./Firebase.init";
import { setUser, setLoading, clearUser } from "@/store/AuthSlice";
import { useAppDispatch } from "@/store/Hooks/useRedux";
import axios from "axios";

export const AuthContext = createContext<any>(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  const createUser = (email: string, password: string) => {
    dispatch(setLoading(true));
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    dispatch(setLoading(true));
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    dispatch(setLoading(true));
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = async () => {
    dispatch(setLoading(true));
    await signOut(auth);
    dispatch(clearUser());
  };

  // const updateUserProfile = (name: string, photo: string) => {
  //   return updateProfile(auth?.currentUser, {
  //     displayName: name,
  //     photoURL: photo,
  //   });
  // };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       dispatch(setUser({ email: currentUser?.email, uid: currentUser?.uid }));
  //     }
  //     (async (currentUser) => {
  //       if (currentUser) {
  //         // setLoading(true);
  //         const res = await axios.post(
  //           `${process.env.NEXT_PUBLIC_APIURL}/jwt/createCookie`,
  //           { email: currentUser?.email, uid: currentUser?.uid }
  //           // { withCredentials: true }
  //         );
  //         console.log(res);

  //         // localStorage.setItem("token", res.data.token);

  //         // const { data } = await axios.post(
  //         //   `${process.env.NEXT_PUBLIC_APIURL}/users`,
  //         //   {
  //         //     email: currentUser.email,
  //         //     name: currentUser.displayName,
  //         //     imageUrl: currentUser.photoURL,
  //         //     role: "User",
  //         //   }
  //         // );
  //         // setUser({ ...currentUser, userDB: { ...data } });
  //       } else {
  //         localStorage.removeItem("token");
  //         // await axios.post(
  //         //   `${import.meta.env.VITE_APIURL}/logout`,
  //         //   {},
  //         //   { withCredentials: true }
  //         // );
  //       }
  //     })(currentUser);

  //     dispatch(setLoading(false));
  //   });

  //   return () => unsubscribe();
  // }, [dispatch]);

  const authInfo = {
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    // updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
