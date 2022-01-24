import './Item.css'
const Items = ({productos})=> {
    return (
    <div className="itemIndividual">
        <img src={productos.img} alt={productos.productos} />
        <p>{productos.producto}</p>
        <p>Descripcion:{productos.descripcion}</p>
        <p>$: {productos.precio}</p>
    </div>
    )

}
export default Items;