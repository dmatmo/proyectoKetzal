const anclaHeader=document.getElementById("menu");
const anclaFooter=document.getElementById("footer");

let head = `
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent container-fluid">
    <div id="menuBG" class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button><!--Icono desplegable-->
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center moveText">
                <li id="moveText1" class="nav-item">
                    <a class="nav-link" href="../index.html">INICIO</a>
                </li>
                <li id="moveText2" class="nav-item">
                    <a class="nav-link" href="../pages/productosExp.html">PRODUCTOS</a>
                </li>
                <li id="logoNav" class="navbar-item d-lg-block d-none" href="#">
                <a class="nav-link" href="../index.html"><img src="../src/images/logo.svg"></a>
                </li><!--Logo navbar--> 
                <li id="moveText3" class="nav-item">
                    <a class="nav-link" href="../pages/contáctanos.html">CONTÁCTANOS</a>
                </li>
                <li id="moveText4" class="nav-item">
                    <a class="nav-link" href="../pages/acerca.html">ACERCA&nbsp;DE</a>
                </li>
                <li id="moveText7" class="nav-item">
                    <a class="nav-link" href="../pages/carrito.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                        </svg>
                    </a>
                </li>
                <li id="moveText5" class="nav-item">
                    <a class="nav-link" href="../pages/login.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg></a>
                </li>
                <li id="moveText6" class="nav-item">
                    <a class="nav-link" href="../pages/login.html" id="logout" onclick="eliminarUsuario()">
                        
                    </a>
                </li>
            </ul><!--Items navbar-->
        </div>
    </div>
    </nav><!--Menú navbar-->
`

let foot = `
    <ul class="redes">
    <li><a href="https://www.facebook.com/profile.php?id=100074260975975" alt="Facebook">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"
            class="bi bi-facebook" viewBox="0 0 16 16">
                <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg></a></li>
    <li><a href="https://www.instagram.com/ketzal_cafeteria/" alt="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"
                class="bi bi-instagram" viewBox="0 0 16 16">
                <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
        </a></li>
    <li><a href="https://twitter.com/CafeteriaKetzal" alt="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"
                class="bi bi-twitter" viewBox="0 0 16 16">
                <path
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
        </a></li>
    <li><a href="#" alt="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"
                class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path
                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
            </i></a></li>
    </ul>
`

anclaHeader.innerHTML = head;
anclaFooter.innerHTML = foot;
iniciarDefault();
if(localStorage.getItem("usuarioActivo")!=null) {//esta logeado el usuario dueño
    const anclaPagDesarrollador=document.getElementById("logout");
    let botonLogOut=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
    </svg>`;
    anclaPagDesarrollador.innerHTML=botonLogOut;
}

function eliminarUsuario(){
    localStorage.removeItem("usuarioActivo");
}
function iniciarDefault(){
    //productos por default
    if(localStorage.getItem("catalogo")==null) {//si no existe
        let totalProductos=crearProductos();
        let totalProductosJson=JSON.stringify(totalProductos);
        localStorage.setItem("catalogo", totalProductosJson);
    }
    //usuarios por default
    if(localStorage.getItem("usuarios")==null) {//si no existe
        let totalUsuarios=crearUsuarios();
        let totalUsuariosJson=JSON.stringify(totalUsuarios);
        localStorage.setItem("usuarios", totalUsuariosJson);
    }
}
function crearUsuarios(){
    let usuarios = {};
    usuarios[1] = {
        id: 1,
        nombre: "admin",
        password: "ketzal1",
        correo: "admin@gmail.com",   
    };
    usuarios[2] = {
        id: 2,
        nombre: "usuario",
        password: "usuario",
        correo: "usuario@gmail.com",   
    };
    return(usuarios);
}
function crearProductos(){
    let totalProductos = {};
    totalProductos[1] = {
        nombre: "Café Honduras",
        precio: 600,
        id: 1,
        cantidad: 180,
        imagen: "../src/images/productos/cafeHonduras.jpeg",
        descripcion: "Café 100% de café arábica, con una producción ecológicamente sostenible. Suelen ser dulces, achocolatados, con cuerpo redondo, acidez delicada y postgusto sostenido. Perfecto para esos días de descanso."
         
    };
    totalProductos[2] = {
        nombre: "Café Borundi",
        precio: 550,
        id: 2,
        cantidad: 200,
        imagen: "../src/images/productos/cafeBorundi.jpeg",
        descripcion: "Café de grano cosechado a mano y secado al sol en parihuelas elevadas. Se pueden identificar notas de frutas, flores y miel, acompañadas de consistencia, equilibrio y un cuerpo completo. Perfecto para iniciar tus mañanas."
         
    };
    totalProductos[3] = {
        nombre: "Café Guatemala",
        precio: 876,
        id: 3,
        cantidad: 500,
        imagen: "../src/images/productos/cafeGuatemala.jpeg",
        descripcion: "Este preparado gourmet es una mezcla arábiga aromática, El grano es cosechado a la sombra. Es delicioso, con pronunciada acidez cítrica y mucho cuerpo. Perfecto para compartir con amigos."
         
    };
    totalProductos[4] = {
        nombre: "Café Indonesia",
        precio: 490,
        id: 4,
        cantidad: 300,
        imagen: "../src/images/productos/cafeIndonesia.jpeg",
        descripcion: "Está considerado como uno de los mejores del mundo, es un café Arábica procesado húmedo. Es bastante dulce y de baja acidez, de cuerpo medio y aroma complejo a tierra. Ideal para esos días especiales."
         
    };
    totalProductos[5] = {
        nombre: "Café Mimba",
        precio: 637,
        id: 5,
        cantidad: 470,
        imagen: "../src/images/productos/cafeMimba.jpeg",
        descripcion: "Café liofilizado hecho con granos cosechados a mano a nivel del mar. ​​Es apreciado por su dulce fragancia, acidez cítrica, sabores dulces y un cuerpo cremoso que la hacen muy agradable. Lo mejor para los días de trabajo."
         
    };
    totalProductos[6] = {
        nombre: "Café Mujeres",
        precio: 494,
        id: 6,
        cantidad: 360,
        imagen: "../src/images/productos/cafeMujeres.jpeg",
        descripcion: "Café en grano que se cultiva en laderas empinadas, bajo la sombra de árboles y plantas que permiten una maduración más lenta. Es de acidez media y mucho cuerpo, con notas a chocolate y avellana. El mejor para compartir con esa persona especial."
         
    };
    totalProductos[7] = {
        nombre: "Café Perú",
        precio: 498,
        id: 7,
        cantidad: 400,
        imagen: "../src/images/productos/cafePeru.jpeg",
        descripcion: "Café Arábica, de las mejores cosechas debido a la privilegiada ubicación de Perú. Caracterizados por su cuerpo y notas herbáceas, pero con más dulzor. Delicioso para compartir en familia."
         
    };
    totalProductos[8] = {
        nombre: "Café Pétalo",
        precio: 979,
        id: 8,
        cantidad: 550,
        imagen: "../src/images/productos/cafePetalo.jpeg",
        descripcion: "Café robusta, cosechado 100% por familias de las mejores regiones de Perú. Agradable sabor a cítricos, albaricoques y caramelo y acidez tartárica. Lo mejor para esos momentos difíciles."
         
    };
    totalProductos[9] = {
        nombre: "Café Tziscao",
        precio: 725,
        id: 9,
        cantidad: 320,
        imagen: "../src/images/productos/cafeTziscao.jpeg",
        descripcion: "Café granos 100% arábica y orgánico, el tostado del cafés está elaborado en pequeños lotes, con el mayor de los cuidados, con sabor achocolatado y tonos a almendras tostadas, con un aroma y cuerpo intenso. Tu mejor aliado para esos viajes largos."
         
    };
    return(totalProductos);
}