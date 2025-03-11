import axios from "axios";
import { useContext, useEffect } from "react";

import { AuthContext } from "../Firebase/AuthProvider";
import { redirect } from "next/navigation";
export const axiosSecure = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APIURL,
  withCredentials: true,
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => res,

      async (error) => {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          const res = await logOut();

          if (res.success) {
            alert("Session Expired, Please Login Again");
            redirect("/login");
          }
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
