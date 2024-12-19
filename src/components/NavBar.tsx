import Link from "next/link";

export default function NavBar() {
    return (
        <div className="bg-black text-white h-20 flex justify-around items-center font-bold">
           <div><h1>Cripto Planet</h1></div> 
           <div >
            <ul className="flex justify-between gap-5">
                <li className="text-blue-900">Market</li>
                <li>Watchlist</li>
                <li><Link href={'/productos'}>Productos</Link></li>
                <li>Learn</li>
            </ul>
           </div>
           <div>
            <ul className="flex justify-between gap-6">
                <li>English | USD</li>
                <li className="text-blue-900">Sign in</li>
                <li><button className="bg-blue-800 rounded-lg "><Link href={'/registro'}>Registrer</Link></button></li>
            </ul>
           </div>
        </div>
    )

}