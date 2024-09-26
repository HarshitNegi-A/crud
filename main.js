let price=0
let p=document.querySelector("p")
p.appendChild(document.createTextNode(""))
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/4271e87e2c37483995002111e0f8a68d/product")
    .then(res => {
      for(var i=0;i<res.data.length;i++){
        
        price=Number(res.data[i].price)+price;
        
        displayUserOnScreen(res.data[i])
        
      }
      updatevalue(price)
      
      
    })
    .catch(err => {
      console.log(err)
    })
  })
  
function handleFormSubmit(event){
    event.preventDefault();
    const details={
        price: event.target.price.value,
        product : event.target.product.value
    };

    axios
        .post("https://crudcrud.com/api/4271e87e2c37483995002111e0f8a68d/product",details)
        .then(res => displayUserOnScreen(res.data))
        .catch(err => console.log(err))
        price=Number(details.price)+price
        updatevalue(price)

        document.getElementById("price").value=""
        document.getElementById("product").value=""

}

function displayUserOnScreen(details){
    const item=document.createElement("li")
    item.appendChild(
        document.createTextNode(
            `${details.price}-${details.product}`
        )
    )

    const deleteBtn = document.createElement("button")
    deleteBtn.appendChild(document.createTextNode("Delete"))
    item.appendChild(deleteBtn)

    const list=document.querySelector("ul")
    list.appendChild(item)

    deleteBtn.addEventListener("click",function (event){
        list.removeChild(event.target.parentElement)
        console.log(details)
        axios
            .delete("https://crudcrud.com/api/4271e87e2c37483995002111e0f8a68d/product/"+details._id)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            price=price-Number(details.price)
            updatevalue(price)

    })

}

function updatevalue(price){
    
        p.innerText=("Total value worth of products: Rs "+price)
    
   
}
