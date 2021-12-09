document.addEventListener('DOMContentLoaded', e => { 
    pintarCarrito();

});
function pintarCarrito(){
    if(localStorage.getItem("carrito")!=null) {//si existe
        const ancla=document.getElementById("productos");
        let carrito=JSON.parse(localStorage.getItem("carrito"));
        let plantillaFinal='';
        let total=0;
        for(idProducto in carrito){
            let subtotal=carrito[idProducto].precio*carrito[idProducto].cantidad;
            total=total+subtotal;
            let card=`
                <tr class="Producto">                                  
                    <td class="name">
                        <span>${carrito[idProducto].nombre}</span>
                    </td>
                    <td class="pu">
                        $<span>${carrito[idProducto].precio}</span>MXN
                    </td>
                    <td class="qty">
                        <span>${carrito[idProducto].cantidad}</span>
                    </td>
                    <td class="subtot">
                        $<span>${subtotal}</span>
                    </td>
                    <td class="rm">
                        <button id=${idProducto} onclick="addCarrito(this)" class="btn btn-info btn-sm">+</button>
                        <button id=${idProducto} onclick="removeCarrito(this)" class="btn btn-danger btn-sm">-</button>
                    </td>
                </tr> <!--product --> 
            `;
            plantillaFinal = plantillaFinal + card;
        }
        let final=`
            <div class="botones col-12">
                <p class="cta">
                    <button  onclick="vaciarCarrito()" class="btn btn-success ">Vaciar Carrito</button>
                </p>
            </div>
            <h2 >Total: $<span>${total}</span></h2>
        `;
        plantillaFinal = plantillaFinal + final;
        ancla.innerHTML = plantillaFinal;
    }
    else{//no hay productos en el carrito
        const ancla=document.getElementById("productos");
        let card=`
                <h1>No hay productos en el carrito</h1>
            `;
        ancla.innerHTML = card;
    }
}
function addCarrito (producto){
    let id = producto.id;//cargar id producto
    carrito=JSON.parse(localStorage.getItem("carrito"));//llamar carrito
    carrito[id].cantidad = carrito[id].cantidad + 1//agregar producto 
    //guardar nuevo carrito
    let carritoJson=JSON.stringify(carrito);
    localStorage.removeItem("carrito");
    localStorage.setItem("carrito", carritoJson);
    pintarCarrito();
}
 
function removeCarrito (producto){
    let id = producto.id;//cargar id producto
    carrito=JSON.parse(localStorage.getItem("carrito"));//llamar carrito
    carrito[id].cantidad = carrito[id].cantidad - 1//agregar producto 
    if(carrito[id].cantidad<=0){
        delete carrito[id]
    }
    localStorage.removeItem("carrito");
    if(Object.keys(carrito).length>=1){//si no se vacía el carrito
        let carritoJson=JSON.stringify(carrito);
        localStorage.setItem("carrito", carritoJson);
    }
    pintarCarrito();
}
function vaciarCarrito(){
    localStorage.removeItem("carrito");
    pintarCarrito();
}