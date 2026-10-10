"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };
    console.log(user);

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Sign in successful!");
      console.log(data);
      redirect("/");
    }
    if (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  };

  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log("data : ", data);
  };
  const handleGithubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="flex flex-col items-center  justify-center mt-5">
      <h2 className="text-2xl font-bold text-red-700"> সাইন আপ </h2>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset   rounded-box w-md ">
          <label className="label">নাম</label>
          <input
            name="name"
            type="text"
            className="input w-md"
            placeholder="Name"
          />

          <label className="label">Image</label>
          <input
            name="image"
            type="url"
            className="input w-md"
            placeholder="Image"
          />

          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="Email"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="Password"
          />

          <button type="submit" className="btn text-white bg-red-700 mt-4">
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>
      <button onClick={handleGoogleSignin} className="btn">
        Sign in with Google
      </button>
      <button onClick={handleGithubSignin} className="btn">
        Sign in with GitHub
      </button>
    </div>
  );
};

export default SignUpPage;
