import { search } from "./modules"

const FAQ = {
    0:{
        id: 0,
        question: '¿Qué es un Ecofiltro?', 
        answer: 'Es un purificador para agua hecho de materiales que la misma naturaleza produce, como el barro y el aserrín.',
        type: 'General'
    },
    1:{
        id: 1,
        question: '¿Qué hace el Ecofiltro?', 
        answer: 'Purifica agua de cualquier fuente eliminando los microbios, sedimentos, mal olor, mal sabor y color.',
        type: 'General'
    },
    2:{
        id: 2,
        question: '¿Por qué necesito un Ecofiltro?', 
        answer: 'Para tener agua purficada sin salir de casa y a bajo costo.',
        type: 'General'
    },
    3:{
        id: 3,
        question: '¿Cuándo debería usar un Ecofiltro?', 
        answer: 'Cuando tengo la necesidad de tomar agua purificada con ahorro económico.',
        type: 'General'
    },
    4:{
        id: 4,
        question: '¿Cómo puedo comprar un Ecofiltro?', 
        answer: 'Puedes escribir por whatsapp al número 3128-4550 o por correo electrónico a mreyes@ecofiltro.com, para recibir el ecofiltro en tu casa',
        type: 'Compra y pago'
    },
    5:{
        id: 5,
        question: 'Si quiero comprar varios, ¿Con quién debo hablar?', 
        answer: 'Puedes escribir por whatsapp al número 3128-4550 o por correo electrónico a mreyes@ecofiltro.com',
        type: 'Compra y pago'
    },
    6:{
        id: 6,
        question: '¿Cuál es el precio de Ecofiltro?', 
        answer: 'El modelo más común tiene un precio de Q.350.00',
        type: 'Compra y pago'
    },
    7:{
        id: 7,
        question: '¿Dónde se ubican las tiendas?', 
        answer: 'Tenemos tiendas en la mayor parte del territorio nacional. Puedes escribir distribuidor de Ecofiltro en el buscador de Google Maps y te indicará los distribuidores más cercanos a tu ubicación. También puedes utilizar nuestro mapa interactivo en esta misma aplicación en la página de contáctanos. También puedes escribir por whatsapp al número 3128-4550.',
        type: 'Compra y pago'
    },
    8:{
        id: 8,
        question: '¿Cómo debo usar el dispositivo?', 
        answer: 'La primera vez no se lava la unidad filtrante de barro, unicamente las piezas externas como la tapadera, el recipiente, el chorro y la base. Se lavaría con agua, jabón y cloro.',
        type: 'Servicio y Soporte'
    },
    9:{
        id: 9,
        question: '¿Cómo cambio el filtro?', 
        answer: 'La unidad filtrante se cambia cada dos años, se compra únicamente el repuesto de barro.',
        type: 'Servicio y Soporte'
    },
    10:{
        id: 10,
        question: '¿Cómo se que esta funcionando?', 
        answer: 'Cuando me brinda de uno a dos litros de agua por hora.',
        type: 'Servicio y Soporte'
    },
    11:{
        id: 11,
        question: '¿Hay algún requisito específico para la fuente de agua?', 
        answer: 'Sí, no puede ser agua de cualquier fuente para consumo humano.',
        type: 'Tecnología del producto'
    },
    12:{
        id: 12,
        question: '¿Cuál es el precio de la unidad filtrante o repuesto del Ecofiltro?', 
        answer: 'El precio es Q.200.00',
        type: 'Compra y pago'
    }
}

export default FAQ