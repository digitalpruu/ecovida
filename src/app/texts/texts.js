const title = "Ecovida";
const email = "guiomarup8@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = "+573124503322";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Ecovida es tu opción ideal para productos veganos que cuidan tanto de ti como de la naturaleza. Nos especializamos en multivitaminas, belleza y productos de aseo, todo elaborado con ingredientes naturales que respetan el medio ambiente. Creemos que lo mejor para tu vida y el planeta es lo natural y saludable.",
        description2: "Nuestra misión es ofrecer productos que mejoren tu bienestar y promuevan un estilo de vida consciente. En Ecovida, estamos comprometidos con la calidad y la sostenibilidad, buscando siempre lo mejor para ti y para el mundo en el que vivimos."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Productos veganos lo mejor para tu vida y la naturaleza.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61566531756153&mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/guiomarazucena3",
        tiktok: "https://www.tiktok.com/@guiomar.azuzena.r",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
