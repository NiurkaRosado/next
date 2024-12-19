import Link from "next/link";

export default function home() {
  return (
    <>
      <h1>HOLA!!</h1>
      <Link href={'/perfil'}>Ir al perfil</Link>
    </>
  )
}