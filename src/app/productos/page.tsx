import Image from "next/image";

export default async function Page(){
    const data = await fetch ('https://fakestoreapi.com/products');
    const productos = await data.json();

    console.log(productos)

    return (
        <div>
            <h1>Hola este es mi pagina de productos</h1>
            <div className="flex flex-wrap">
                {
                    productos.map(
                        (producto) => (
                            <div>
                                <Image src={producto.image} width={200} height={200} alt="Imagen producto"/>
                               <h1>{producto.title}</h1>
                            </div>
                        )
                    )
                }
            </div>

        </div>
    )
} 