const form = document.getElementByTagName("form");
const productContainer = document.querySelector[".product"]
const nameInput = form['name'];
const descriptionInput = form['description'];
const priceInput = form['price'];

const product = [{
    name: 'dress',
    description: 'this is a bodycon dress',
    price: 100000,
}];

const addProduct = (name, description, price) => {}

const createProductElement = ({name, description, price}) => {
    const productDiv = document.createElement('Div')
    const productName = document.createElement('h2')
    const productDescription = document.createElement('p')
    const productPrice = document.createElement('p')

    productName.innerText = "Product name: " + name;
    productDescription.innerText = "Product description: " + description
    productPrice.innerText = "Product price: " + price

    productDiv.append(productName, productDescription, productPrice);
    productContainer.appendChild();
}

product.forEach(createProduct)

