"use client"
import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";


export default function registro() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const registarUsuario = async () => {
        try {

            const result = await createUserWithEmailAndPassword(auth, email, password)
            console.log(result);
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className="flex items-center justify-between min-h-screen gap-5">
            <div className="flex flex-col justify-center mx-auto">
                <h1 className="text-center">WELCOME RUIX</h1>
                <p>Welcome to Ruix. dashboard Community</p>
                <div className="flex flex-col gap-3">
                    <input type="text" className="border border-black" placeholder="Nombre" />
                    <input type="text" onChange={(e) => setEmail(e.target.value)} className="border border-black" placeholder="Email" />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="border border-black" placeholder="Password" />
                    <button className="bg-black text-white" onClick={registarUsuario}>Register</button>
                    <p>Already have an account? <a className="text-orange-400" href="#">Log in</a></p>
                </div>
            </div>
            <div>
                <img src="/imagen.png" alt="" />
            </div>
        </div>
    )
}