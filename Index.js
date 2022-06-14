// const form = document.forms['form']
// form.onsubmit = (e)=> {
//     e.preventDefault();
    
//     const name = ["name"].value;
//     const description = ["description"].value;
//     const price = ["price"].value;
//     const category = ["category"].value;
//     localStorage.setItem('name','name' )
    
   
//     console.log(name, description, price, category);

// }


const form = document.forms['form']
form.addEventListener("submit",(event) => {
     
    event.preventDefault();

       const name = form.elements["name"].value;
       const category = form.elements["category"].value;
       const description = form.elements["description"].value;
       const price = form.elements["price"].value;

        if(name.trim().length<1)  {
        document.getElementById("name-error").innerHTML = 'Fill in the Name';

        return
        
        }

        if(category.trim().length <1)  {
        document.getElementById("category-error").innerHTML = 'Select the Category';  
         
        return
       }
     
        if(description.trim().length <1)  {
        document.getElementById("description-error").innerHTML = 'Fill in the Description';
         
        return
    
       }
     
        if(price.trim().length<1)  {
        document.getElementById("price-error").innerHTML = 'Fill in the Price';

        return
      }

      const product = JSON.parse(localStorage.getItem("products"));

      const products = {
           name: name,
           category: category,
           description: description,
           price: price
       }
    
       let newArr=[];
       if(product?.length>0){
           newArr = product
       }
      newArr.push(products);

       localStorage.setItem("products", JSON.stringify(newArr));
       
       redirect();
});

function redirect(){
    window.location.href = "Index.html";
}


 function getFunction(){
 const product = localStorage.getItem("products");
   
  console.log("geeettt",JSON.parse(product));
  
  const products = JSON.parse(product);
  document.getElementById('item1').innerHTML = products.map((product,i) => 
         
    ` <a class="card-wrapper" href="Shop.html?position=${i}">
      <div class="card1">
        <div class="row">
        <img class="item"src="Images/home1.jpg">
          <div>${product.name}</div>
          <div>Ugx ${product.price}</div>
        </div>
        </div>
       </a>`
   ).join('')

    // const name = products.name;
    // const price = products.price;
    // const category = products.category;
    // const description = products.description;

    //  document.getElementById("name").innerHTML = name
    //  document.getElementById("price").innerHTML = price
    //  document.getElementById("category").innerHTML = category
    //  document.getElementById("description").innerHTML = description
 return (JSON.parse(product));

 } 

function getAnotherFunction(){
 const product = localStorage.getItem("products");
   
  console.log("geeettt",JSON.parse(product));

  const params = new URLSearchParams(window.location.search);
  const position = params.get("position");
  
    const products = JSON.parse(product); 

    console.log('fghj',products[1])
  
   
   const name = products[position].name;
   const price = products[position].price
   const category = products[position].category;
   const description = products[position].description;

    document.getElementById("name").innerHTML = name
    document.getElementById("price").innerHTML ="Ugx" + price
    document.getElementById("category").innerHTML = category
    document.getElementById("description").innerHTML = description


    return (JSON.parse(product));

}





