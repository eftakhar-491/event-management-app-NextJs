import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export interface UserState {
  user: {
    email: string;
    uid: string;
  } | null; // You can define a more specific type for the user
  loading: boolean;
  error: { error: string } | string | null;
}

const initialState: UserState = {
  user: {
    email: "",
    uid: "",
  },
  loading: false,
  error: "",
};

// Thunk
export const checkAuthState = createAsyncThunk<UserState | null, void>(
  "auth/checkAuthState",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
          if (currentUser) {
            const userData: any = {
              email: currentUser.email,
              uid: currentUser.uid,
              photoURL: currentUser.photoURL,
              displayName: currentUser.displayName,
            };
            dispatch(setUser(userData));
            console.log(currentUser);
            // Call API to store JWT token in cookies
            try {
              const res = await axios.post(
                `${process.env.NEXT_PUBLIC_APIURL}/jwt/createCookie`,
                { email: userData.email, uid: userData.uid }
              );
              // console.log("JWT Response:", res.data);

              if (currentUser?.providerData[0]?.providerId === "google.com") {
                // Call API to store user in database
                const userRes = await axios.post("/", {
                  email: userData.email,
                  uid: userData.uid,
                  photoURL: currentUser.photoURL,
                  displayName: currentUser.displayName,
                  role: "user",
                });
              }
            } catch (error) {
              console.error("JWT API Error:", error);
            }

            resolve(userData);
          } else {
            dispatch(clearUser());
            localStorage.removeItem("token");
            resolve(null);
          }
        });

        return () => unsubscribe();
      });
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
// create user
export const createUser = createAsyncThunk(
  "auth/createUser",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      return {
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        provider: userCredential.user.providerData[0].providerId,
      };
    } catch (err: any) {
      return rejectWithValue({ error: err.message }); // Send error message to Redux state
    }
  }
);
// update
export const updateUserProfile = createAsyncThunk(
  "auth/updateUserProfile",
  async (
    { name, photo }: { name: string; photo: string },
    { rejectWithValue }
  ) => {
    try {
      if (!auth.currentUser) throw new Error("No authenticated user found");

      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });

      // Return updated user data
      return { name, photo };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
// login
export const signIn = createAsyncThunk(
  "auth/signIn",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return { email: userCredential.user.email, uid: userCredential.user.uid };
    } catch (error: any) {
      return rejectWithValue(error.message); // Send error message to Redux state
    }
  }
);
// login with google
export const signInWithGoogle = createAsyncThunk(
  "auth/signInWithGoogle",
  async (_, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      return { email: userCredential.user.email, uid: userCredential.user.uid };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk(
  "auth/logOut",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      return null; // No user data after logout
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload ? action.payload : null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<{ error: string }>) => {
      state.error = action?.payload?.error;
    },

    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        checkAuthState.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.user = action.payload;
        }
      )
      .addCase(checkAuthState.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setLoading, clearUser } = authSlice.actions;

export default authSlice.reducer;
