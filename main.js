const data = ["first", "second"]
var index = -1
function add() {
  const text = document.getElementById("text").value


  data.push(text)

  document.getElementById("text").value = " "
  init()
}


function init() {
  var javob = ""
  data.forEach((val, raqam) => {
    javob += `<p>${val}<button  style="margin-left: 10px"  class="button1" onclick = "edit(${raqam})" style="margin-left: 10px"  ><img src="./editt.png" style="height: 15px; width: 15px;" alt=""></button><button class="button1" onclick="del(${raqam})"><img src="./delete.jpg" style="height: 15px; width: 15px;" alt=""></button></p>`
  })

  document.getElementById("todo").innerHTML = javob
}
init()

function edit(a) {
  console.log(a);
  document.getElementById("text").value = data[a]
  index = a
}


function update() {
  console.log(index);

  data[index] = document.getElementById("text").value
  init()
}

function del(delIndex) {
  console.log("deletee", delIndex);
  var isDelete = confirm("rostnan ham o'chirmoqchimisz?")
  console.log(isDelete);
  if (isDelete) {


    data.splice(delIndex, 1)
    init()
  }
}

function saqlashh() {
  alert("saqlashni unutmang")

}