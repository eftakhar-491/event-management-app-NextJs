import { RegisterForm } from "@/components/Register/RegisterForm";
import { Background } from "@/components/Shared/Background";
import { GalleryVerticalEnd } from "lucide-react";

export default function page() {
  return (
    <>
      <Background />
      <div className="grid min-h-svh lg:grid-cols-2 max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-4 p-6 md:p-10 bg-black">
          <div className="flex justify-center gap-2 md:justify-start">
            <a href="#" className="flex items-center gap-2 font-medium">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <GalleryVerticalEnd className="size-4" />
              </div>
              Acme Inc.
            </a>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full">
              <RegisterForm />
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block pl-5">
          {/* <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
          <div className="">
            <h1
              style={{
                WebkitTextStroke: "0.9px #ffffff",
              }}
              className="absolute -z-20 font-extrabold text-transparent text-[140px] top-1/2 left-0 opacity-35 -translate-y-1/2  "
            >
              REGISTER
            </h1>
          </div>
          <div className="w-full h-full flex-col flex justify-center ">
            <h1 className="text-[50px]">Welcome To Events.</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas, sapiente.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
