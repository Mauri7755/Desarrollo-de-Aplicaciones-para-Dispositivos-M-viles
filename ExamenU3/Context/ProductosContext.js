import React, {createContext, useState} from 'react';

export const ProductosContext = createContext();

const ProductProvider = (props)=>{
    const [productos, setProductos] = useState([
{codigo:1,descripcion:"Huawei Matebook D 15", precio:15899},
{codigo:2,descripcion:"Samsung Galaxy S10", precio:13999},
{codigo:3,descripcion:"Samsung Galaxy A01", precio:1850},
{codigo:4,descripcion:"Xiaomi Redmi Note 9s", precio:5949},
{codigo:5,descripcion:"Mochila Xiaomi", precio:699},
{codigo:6,descripcion:"Teclado Primus Gaming Ballista", precio:1999},
{codigo:7,descripcion:"Xiaomi Redmi Note 8s", precio:4989},
{codigo:8,descripcion:"Mochila Targus", precio:999},
{codigo:9,descripcion:"Teclado Logitech", precio:1489},
    ])

const [carro, setCarro]= useState([])

const [total, setTotal]= useState([])

const agregar=(productos, precio)=>{
   alert("Producto agregado");
    setCarro([...carro,productos])
        setTotal(Number(total)+Number(precio))
        console.log(carro)
}

const eliminar =(index, precio)=>{
   alert("Producto eliminado");
    const temporal = carro.filter((c,i)=>i!==index)

        setCarro(temporal)
        setTotal(Number(total)-Number(precio))
   }

return(
        <ProductosContext.Provider
            value={{
                productos,
                carro,
                total,
                setProductos,
                setCarro,
                setTotal,
                agregar,
                eliminar
            }}
        >
            {props.children}
        </ProductosContext.Provider>
    )
}

export default ProductProvider;