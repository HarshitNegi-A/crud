let ul = document.querySelector("ul");

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const exAmt = event.target.expense.value;
  const desc = event.target.desc.value;
  const category = event.target.category.value;
  const obj = {
    exAmt,
    desc,
    category,
  };
  const myObj = JSON.stringify(obj);
  localStorage.setItem(category, myObj);

  let li = document.createElement("li");
  li.innerHTML = exAmt + "-" + desc + "-" + category;

  ul.appendChild(li);

  let delBtn = document.createElement("button");
  delBtn.innerHTML = "Delete Expense";
  delBtn.classList = "delBtn";
  delBtn.onclick=()=>{
    localStorage.removeItem(obj.category)
    ul.removeChild(li)
    
}
  

  li.appendChild(delBtn);

  let editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit Expense";
  editBtn.classList = "editBtn";
  editBtn.onclick = () => {
    localStorage.removeItem(obj.category);
    ul.removeChild(li);
    document.getElementById("expense").value = obj.exAmt;
    document.getElementById("desc").value = obj.desc;
    document.getElementById("category").value = obj.category;
  };

  li.appendChild(editBtn);
});

