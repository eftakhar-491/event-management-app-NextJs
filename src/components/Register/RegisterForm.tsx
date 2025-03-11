"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "@/Firebase/AuthProvider";
import { useAppDispatch, useAppSelector } from "@/store/Hooks/useRedux";
import { checkAuthState } from "@/store/AuthSlice";

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    userType: "user",
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch]);

  const user = useAppSelector((state) => state?.auth?.user);
  console.log(user);

  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    createUser(formData.email, formData.password)
      .then((data: any) => {
        // console.log(data);
      })
      .catch((err: any) => {
        // console.log(err);
      });
    console.log(formData);
  };

  return (
    <>
      <form
        className={cn("flex flex-col gap-6", className)}
        {...props}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Register an account</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Fill in the details below to create your account
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="grid gap-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="John Doe"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2 text-white">
            <Label htmlFor="photo">Choose Photo</Label>
            <Input
              className="text-white"
              id="photo"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2 col-span-2">
            <Label htmlFor="userType">User Type</Label>
            <select
              id="userType"
              className="border rounded p-2 bg-black"
              value={formData.userType}
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="organizer">Organizer</option>
            </select>
          </div>
          <Button type="submit" className="w-full cursor-pointer col-span-2">
            Register
          </Button>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border col-span-2">
            <span className="relative z-10 bg-black px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
      </form>
      <Button
        onClick={() => signInWithGoogle()}
        variant="outline"
        className="mt-5 w-full bg-transparent cursor-pointer col-span-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <path
            fill="#fbc02d"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          />
          <path
            fill="#e53935"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          />
          <path
            fill="#4caf50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          />
          <path
            fill="#1565c0"
            d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          />
        </svg>
        Register with Google
      </Button>
      <div className="mt-5 text-center text-sm col-span-2">
        Already have an account?{" "}
        <Link href="/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </>
  );
}
