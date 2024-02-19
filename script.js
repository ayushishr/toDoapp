
/*document.addEventListener("DOMContentLoaded", function() {
  const listItems = document.querySelectorAll('.list');
  const rightContainer = document.getElementById('right');

  // Add event listeners to each draggable list item
  listItems.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
  });

  // Add event listeners to the drop zone
  rightContainer.addEventListener('dragover', dragOver);
  rightContainer.addEventListener('drop', drop);

  let draggedItem = null;

  // Function to handle dragstart event
  function dragStart(e) {
    draggedItem = this;
    setTimeout(() => {
      this.style.display = 'none'; // Hide the dragged element
    }, 0);
  }

  // Function to handle dragend event
  function dragEnd() {
    draggedItem.style.display = 'block'; // Show the dragged element
    draggedItem = null;
  }

  // Function to handle dragover event
  function dragOver(e) {
    e.preventDefault(); // Allow drop
  }

  // Function to handle drop event
  function drop() {
    this.append(draggedItem); // Append the dragged element to the drop zone
  }
});*/

/*let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  alert(code);
  alert(codes[code]);// 1, 41, 44, 49
}*/
const inputs = document.getElementById('inp');
const texts = document.querySelector('.text');


function Add(){
  if(inputs.value == ""){
    alert("please enter the test")
  }else{
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${inputs.value} <i class="ri-delete-bin-line"></i>`;
    texts.appendChild(newEle);
    inputs.value = "";
    newEle.querySelector("i").addEventListener("click", remove);
    function remove(){
      newEle.remove()
    }


  }

}
