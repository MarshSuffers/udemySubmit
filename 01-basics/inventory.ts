type product = { name: string; price: number; inStock: boolean };

const item1: product = {
    name: 'notebook',
    price: 5,
    inStock: true
}

const item2: product = {
    name: 'pencil',
    price: 1,
    inStock: true
}

const item3: product = {
    name: 'eraser',
    price: 2,
    inStock: false
}

const productList = [item1, item2, item3]

//Prints inventory list to console and returns void
function list() {
let List = productList.toString
console.log(List)
};

//filters and returns only availible products
function listAvailible() {
//get array
// filter for instock=true
// creates new array
//returns new array
}

//calculates and returns value of all products
function listValue() {
// gets array
// filters out the values and adds them
// returns string with value
}