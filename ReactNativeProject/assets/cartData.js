export const cartData = [
    {
        "id": 1,
        "name": "Hair Dryer",
        "img": {
            "src": require("../media/HairDryer.jpg"),
            "alt": "Hair Dryer"
        },
        "desc": "a 95% new hair dryer",
        "price": "$10",
        "category": "electric device"
    }
]

export function addToCartData(item){
    cartData.push(item)
}

