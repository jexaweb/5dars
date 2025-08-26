import React from "react";

import FormInput from "../components/FormInput";
import { useActionData } from "react-router-dom";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  return data;
}

function Login() {
  const data = useActionData();
  console.log(data);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                    flex items-center justify-center px-4 py-12"
    >
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div class="mx-auto h-16 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-log-in h-8 w-8 text-white"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" x2="3" y1="12" y2="12"></line>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Sign in to your account to continue
          </p>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
          <Form method="post" className="space-y-6">
            <div>
              {" "}
              <FormInput
                type="email"
                label="Email address
"
                name="email"
                icon={Mail}
              />{" "}
            </div>
            <FormInput type="password" label="Password" name="password" />
            <div className="flex justify-between">
              <div className="flex justify-center items-center">
                {" "}
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />{" "}
                <label
                  for="remember-me"
                  class="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>{" "}
              <Link className="text-sm text-blue-600 hover:text-blue-500 font-medium transition duration-200">
                Forgot password?
              </Link>
            </div>
            <button
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm 
                         text-sm font-medium text-white 
                         bg-gradient-to-r from-blue-600 to-purple-600 
                         hover:from-blue-700 hover:to-purple-700 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                         transform hover:scale-105 transition duration-200 ease-in-out"
            >
              Login
            </button>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-blue-600 hover:text-blue-500 transition duration-200"
              >
                Create one now
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
