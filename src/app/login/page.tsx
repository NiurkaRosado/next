"use client"

import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"

export default function Page() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const iniciarSesion = async () => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password)
            alert("Exito! Puede pasar")
        }
        catch (error) {
            alert(error)
        }
    }

        return (
            <div>
                <input type="text" onChange={(e) => setEmail(e.target.value)} className="border border-black" placeholder="Email" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} className="border border-black" placeholder="Password" />
                <button className="bg-black text-white" onClick={iniciarSesion}>Iniciar sesion</button>
            </div>
        )
    }