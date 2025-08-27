// import React, { use } from "react";
import React from "react";

import FormInput from "../components/FormInput";

import { useActionData } from "react-router-dom";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  return data;
}

function Register() {
  const data = useActionData();
  console.log(data);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                    flex items-center justify-center px-4 py-12"
    >
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div class="mx-auto h-16 w-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
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
              class="lucide lucide-user-plus h-8 w-8 text-white"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <line x1="19" x2="19" y1="8" y2="14"></line>
              <line x1="22" x2="16" y1="11" y2="11"></line>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Create account
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Join us today and get started
          </p>
        </div>

        <div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 
                        border border-gray-100 dark:border-gray-700"
        >
          <Form method="post" className="space-y-6">
            <div>
              <FormInput
                taye="text"
                label="Name"
                name="name"
                lefIcon={<FaRegUser />}
              />
            </div>
            <FormInput
              taye="email"
              label="Email"
              name="email"
              lefIcon={<MdEmail />}
            />
            <FormInput
              type="password"
              label="Password"
              name="password"
              lefIcon={<RiLockPasswordLine />}
            />
            <FormInput
              type="password"
              label="Confirm password"
              name="confirmPassword"
              lefIcon={<RiLockPasswordLine />}
            />
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
                I agree to the{" "}
                <Link className="font-medium text-purple-600 hover:text-purple-500 transition duration-200">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link className="font-medium text-purple-600 hover:text-purple-500 transition duration-200">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <button
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl 
                         shadow-sm text-sm font-medium text-white 
                         bg-gradient-to-r from-purple-600 to-blue-600 
                         hover:from-purple-700 hover:to-blue-700 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
                         transform hover:scale-105 transition duration-200 ease-in-out
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Register
            </button>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              If you have an account, please{" "}
              <Link
                to="/login"
                className="font-medium text-purple-600 hover:text-purple-500 transition duration-200"
              >
                Login
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
