import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [signedIn, setSignedIn] = useState(true);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sign-in success
    setSignedIn(true);
  };

  // Redirect to profile page if signed in
  React.useEffect(() => {
    if (signedIn) {
      router.push("/profile");
    }
  }, [signedIn, router]);

  return (
    <div className="min-h-[400px] mt-40 flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Sign In
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <Link href="#" className="text-sm text-gray-600 hover:underline">
              Forget Password
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-full transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-700 mt-6">
          Don&apos;t have account?{" "}
          <Link href="/sign-up" className="font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
