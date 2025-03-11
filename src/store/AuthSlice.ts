import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.init";
const auth = getAuth(app);
export interface UserState {
  user: {
    email: string;
    uid: string;
  } | null; // You can define a more specific type for the user
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: {
    email: "",
    uid: "",
  },
  loading: false,
  error: null,
};

// Thunk
export const checkAuthState = createAsyncThunk(
  "auth/checkAuthState",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
          if (currentUser) {
            const userData: any = {
              email: currentUser.email,
              uid: currentUser.uid,
            };
            dispatch(setUser(userData));

            // Call API to store JWT token in cookies
            try {
              const res = await axios.post(
                `${process.env.NEXT_PUBLIC_APIURL}/jwt/createCookie`,
                userData
              );
              console.log("JWT Response:", res.data);
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

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthState.fulfilled, (state, action) => {
        // console.log(state, action, checkAuthState.fulfilled);
        state.user = action.payload;
      })
      .addCase(checkAuthState.rejected, (state, action) => {
        // state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setLoading, clearUser } = authSlice.actions;

export default authSlice.reducer;
