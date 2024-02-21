import { useState } from "react"

const initProducts = [
    {
        name: 'Monitor samsung 65',
        price: 500,
        descripcion: ' el monitor es increible'
    },
    {
        name: 'Iphone 14',
        price: 800,
        descripcion: ' El telefono es muy bueno'
    }
];
export const ProductApp = () => {
    const [products, setProducts] = useState(initProducts);
    return (
        <>
            <h1>Hola mundo</h1>
            <table>
                <thead>
                    <tr>
                        <th>name</th>                        
                        <th>price</th>
                        <th>descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return (<tr key={product.name}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.descripcion}</td>
                        </tr>)
                    })}

                </tbody>
            </table>
        </>
    )
}