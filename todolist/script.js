const but = document.querySelector('button');
const input = document.getElementById('input');
const here = document.querySelector('#here'); 

but.addEventListener('click', function () {
    if (input.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = input.value;
        li.classList.add("cursor-pointer", "py-2", "flex", "justify-between", "items-center");
        const delBtn = document.createElement('button');
        delBtn.textContent = "❌";
        delBtn.addEventListener("click", function (event) {
            event.stopPropagation(); 
            li.remove();
        });
        li.addEventListener("click", function () {
            li.classList.toggle("line-through");
        });
        li.appendChild(delBtn);
        here.appendChild(li); 
        input.value = ""; 
    }
});
