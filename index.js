var inputvalue = document.getElementById("inputvalue");
var ul = document.getElementById("lu");

class todo{
    add(){
        document.getElementById("btn").addEventListener("click", () => {
            if(inputvalue.value.length == 0){
                alert("please enter value");
            }
            var li = document.createElement("li");
            li.innerText = inputvalue.value;
            ul.appendChild(li);
            inputvalue.value = "";
            li.addEventListener("click", () => {
                li.style.textDecoration = "line-through";
            })
            li.addEventListener("dblclick", () => {
                ul.removeChild(li);
            })
        })
    }
}
var td = new todo();
td.add();