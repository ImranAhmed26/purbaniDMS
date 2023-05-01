import React, { useState, useContext, useEffect } from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Logo from "../public/assets/Logo_Purbani.png";
import { useRouter } from "next/router";
import { authContext } from "../context/authContext";
import { POST } from "../api/api";

const Login = () => {
  //authContext  State
  const { state, dispatch } = useContext(authContext);

  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectCredentials, setIncorrectCredentials] = useState(false);

  const body = {
    employeeId: employeeId,

    password: password,
  };

  const router = useRouter();

  useEffect(() => {
    state.user && router.push("./dashboard");
  }, [state.user, router]);

  // Login API
  const handleLogin = () => {
    POST(`/user/login`, body).then(({ data, status }) => {
      if (status !== 200) {
        console.log(data);
        console.log(status);
        setIncorrectCredentials(true);
      } else if (status === 200) {
        console.log("Login success");
        console.log(data);
        dispatch({
          type: "LOGIN",
          payload: data.user,
        });
        localStorage.setItem("user", JSON.stringify(data?.user));
        localStorage.setItem("token", data?.token);
        setIncorrectCredentials(false);
        router.push(`/dashboard`);
        console.log({ state: state, token: localStorage.getItem("token") });
      }
    });
  };

  return (
    <div className="bg-main-global h-screen">
      <Navbar />
      <div className="w-full flex items-center justify-center pt-28">
        <div className="flex flex-col items-center bg-white rounded-lg w-[440px] h-full">
          <div className="pt-8 flex flex-col items-center">
            <Image src={Logo} width={184} height={48} alt={"logo"} />
            <div className="text-xl font-semibold">Welcome to Purbani Group</div>
          </div>
          <div className="pt-8 px-10 w-full ">
            <form>
              <div>
                <div className="font-semibold">Employee ID</div>
                <div className="mt-2">
                  <input
                    className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md "
                    placeholder="Name"
                    type="text"
                    onChange={(e) => {
                      setEmployeeId(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="font-semibold pt-5">Password</div>
                <div>
                  <input
                    className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md mr-2"
                    placeholder="Password"
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="text-center py-2 text-rose-500 font-medium h-10">
                <span
                  className={`${
                    incorrectCredentials === false ? "invisible" : "visible"
                  } transition-all duration-300`}
                >
                  Your employee ID or password is incorrect
                </span>
              </div>

              <div className="pt-6 w-full flex justify-center">
                <button
                  type="button"
                  className={` rounded-xl border bg-color_brand px-4 py-2 font-medium text-gray-100 hover:bg-white hover:text-black transition-all duration-100`}
                  disabled={!employeeId && !password}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <div className="flex gap-2 py-4">
            <div>{`Don't have any account?`}</div>
            <button
              className="text-color_brand font-semibold"
              onClick={() => {
                router.push("./register");
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
