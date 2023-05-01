import React, { useState, useContext, useEffect } from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Logo from "../public/assets/Logo_Purbani.png";
import { useRouter } from "next/router";
import { authContext } from "../context/authContext";
import { POST } from "../api/api";

const Register = () => {
  //authContext  State
  const { state, dispatch } = useContext(authContext);

  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const body = {
    name: name,
    email: email,
    employeeId: employeeId,
    password: password,
  };

  const router = useRouter();

  useEffect(() => {
    state.user && router.push("./dashboard");
  }, [state.user, router]);

  // Registration API
  const handleRegistration = () => {
    POST("/user/register", body).then(({ data, status }) => {
      if (status !== 200) {
        console.log(data);
        console.log(status);
      } else if (status === 200) {
        console.log("Registration successful");
        console.log(data);
        router.push("/dashboard");
      }
    });
  };

  return (
    <div className="bg-main-global h-screen">
      <Navbar />
      <div className="w-full flex items-center justify-center pt-28">
        <div className="flex flex-col items-center bg-white rounded-lg w-[540px] h-full">
          <div className="pt-8 flex flex-col items-center">
            <Image src={Logo} width={184} height={48} alt={"logo"} />
            <div className="text-xl font-semibold">Welcome to Purbani Group</div>
          </div>
          <div className="pt-8 px-10 w-full ">
            <form>
              <div className="w-full ">
                <div className="w-full mt-2 flex gap-8">
                  <div className="w-1/2">
                    <div className="font-semibold">Name</div>
                    <input
                      className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md "
                      placeholder="Name"
                      type="text"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="w-1/2">
                    <div className="font-semibold">Employee ID</div>
                    <input
                      className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md "
                      placeholder="Employee ID"
                      type="text"
                      onChange={(e) => {
                        setEmployeeId(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="font-semibold pt-5">Email</div>
                <div className="mt-2">
                  <input
                    className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md"
                    placeholder="Email ID"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
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

              <div className="pt-6 w-full flex justify-center">
                <button
                  type="button"
                  className={` rounded-xl border bg-color_brand px-4 py-2 font-medium text-gray-100 hover:bg-white hover:text-black transition-all duration-100`}
                  disabled={!employeeId && !password}
                  onClick={(e) => {
                    e.preventDefault();
                    handleRegistration();
                  }}
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
          <div className="flex gap-2 py-4">
            <div>{`Already Registered?`}</div>
            <button
              className="text-color_brand font-semibold"
              onClick={() => {
                router.push("./login");
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
