const initialState = [
    {
        id: 1,
        name: "Iphone 7 Plus",
        image: '',
        description: "Sản phẩm do Apple sản xuất",
        price: 500,
        inventory: 10
    },
    {
        id: 2,
        name: "SamSung Galaxy S7",
        image: '',
        description: "Sản phẩm do SamSung sản xuất",
        price: 400,
        inventory: 15
    },
    {
        id: 3,
        name: "Oppo F1s",
        image: '',
        description: "Sản phẩm do China sản xuất",
        price: 450,
        inventory: 5
    }
];

const product = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}

export default product;