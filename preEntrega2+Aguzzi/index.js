// CASO ECOMMERCE

// * TODO TIENEN QUE ESTAR DENTRO DE FUNCIONES
// * LA ÚNICA VARIABLE GLOBAL VA A SER LA DEL ARRAY
// * EL ARRAY DE OBJETOS PUEDE ESTAR EN EL MISMO CÓDIGO O EN OTRO ARCHIVO

// 1) Hacer un array de objetos que tenga 15 productos. Cada objeto deberá tener las siguientes propiedades:
//     - id
//     - producto
//     - precio
//     - fechaVencimiento (en el caso de que tenga una)
//     - descripción
//     - categoría (si tiene una)
// //     - oferta (booleano)
const lista = [
    {
        product: "Jellybean",
        id: [0], codename: "Jellybean", price: "$12.50", info: "A jellybean to use with bread", category: "sweet", bestbefore: 12 / 7 / 28, isOffer: false,
    },

    {
        product: "plate",
        id: [1], codename: "big and comfortable plate", price: "$9.00", info: "An elegant dish", category: "dininng room things", isOffer: false,
    },

    {
        product: "cream cheese",
        id: [2], codename: "cream made of cheese and milk", price: "20.00", info: "cheese ideal to eat with bread or toasts", category: "dairy", bestbefore: 10 / 6 / 28, isOffer: false,
    },

    {
        product: "Knife",
        id: [3], codename: "sharped knife", price: "$10.00", info: "A master and multiporpouse knife", category: "cutlery", isOffer: false,
    },
    {
        product: "chips",
        id: [4], codename: "Fried chips", price: "$16.00", info: "at those chips, so his family happones. apprear", category: "snacks", isOffer: false,
    },

    {
        product: "glass",
        id: [5], codename: "big and wide open glass", price: "$4.50", info: "An ideal glass for wine", category: "dininng room things", isOffer: false,
    },

    {
        product: "Chandonnay",
        id: [6], codename: "wine", prices: "20.00", info: "A wine for everyday meals", category: "wines", bestbefore: 12 / 6 / 30, isOffer: false,
    },

    {
        product: "vanish clean",
        id: [7], codename: "cleaner", prices: "$11.00", info: "A great stain remover", category: "cleaner's products", isOffer: false,
    },

    {
        product: "Keyboard Ranger Texas",
        id: [8], codename: "Keyboard", prices: "$12.50", info: "A keyboard with anitghosting", category: "tech", isOffer: false,
    },

    {
        product: "Megadeth Peace Sells But Who's Buying",
        id: [9], codename: "Vinyl disc", prices: "$9.00", info: "A vynil disc of one of the big 4 metal bands", category: "music", isOffer: false,
    },

    {
        product: "Smart Tv Sony",
        id: [10], codename: "tv", price: "500.00", info: "a smart tv ready to run all your fav apps and channels", category: "tech", isOffer: true,
    },

    {
        product: "Sofa The Call of the Mountains",
        id: [11], codename: "sofa", price: "$300.00", info: "A big and comfortable sofa", category: "comfort", isOffer: true,
    },
    {
        product: "Jack Daniels",
        id: [12], codename: "whiskey", prices: "$20.00", info: "The best whiskey of the world", category: "alcohol", bestbefore: 10 / 4 / 28, isOffer: false,
    },
    {
        product: "RHCP TShirt",
        id: [13], codename: "shirt", prices: "$10.00", info: "A tshirt of funk rock band rhcp", category: "clothes", isOffer: true,
    },
    {
        product: "Boulevard Of Broken Dreams",
        id: [14], codename: "and im the only one", prices: "$10.00", info: "i walk alone", category: "music", isOffer: false,
    }
]

const findDiscount = () => {
    let offer = lista.find(offer => offer.isOffer === true);
    if (offer) {
        let finalPrices = offer.price * .15;
        console.log("El precio final con el descuento es " + "$" + finalPrices);
    } else {
        console.log("No se aplica ningún descuento");
    }
}
findDiscount()

function sortNumbers() {
    const numbersInOrder = [...lista].sort((a, b) => {
        return a - b
    })
    console.log(lista)
    console.log(numbersInOrder)
    console.table(numbersInOrder)
}
sortNumbers()

function seeOffers() {
    if (confirm("¿Quieres ver las ofertas de la tienda?")) {
        const ofertas = lista.filter(product => product.isOffer === true);
        for (const product of ofertas) {
            console.log(product);
        }
    }
}
seeOffers()

function detectProduct() {
    let findProduct = prompt("Buscador de productos")
    let search = (lista.find(lista => lista.product == findProduct))
    alert(search.product + " " + search.prices)
}
detectProduct()