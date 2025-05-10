"use client"
import React, { useState } from 'react'
import Container from '../components/Container'
import Cookies from 'js-cookie'
import { redirect } from 'next/navigation'
// import axios from 'axios'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        // axios({
        //     url:"/login",
        //     method:"POST",
        //     data:{
        //         username:username,
        //        password: password
        //     }
        // })

        const response = {
            token: "vdmfvmfilmvilfmjvilfjblignv",
            expire: 7
        };
        Cookies.set("token", response.token, { expires: response.expire })
        redirect("/dashboard")
    }
    return (
        <Container>
            <div className="p-8 mx-auto w-[400px] shadow-2xl my-10">
                <div>
                    <h3 className="text-lg leading-6 font-medium text-center text-gray-900">ورود ادمین</h3>
                </div>
                <div className="mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="">
                        <label htmlFor="user-name" className="block text-sm font-medium text-gray-700">
                            نام کاربری
                        </label>
                        <div className="mt-1">
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                type="text"
                                name="user-name"
                                id="user-name"
                                autoComplete="given-name"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                    </div>

                    <div className="">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            رمزعبور
                        </label>
                        <div className="mt-1">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="family-name"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="pt-5 mx-auto">
                        <button
                            onClick={handleLogin}
                            type="button"
                            className=" inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            ورود
                        </button>
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default Login