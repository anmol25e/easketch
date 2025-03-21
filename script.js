
let container = document.getElementById("container")
let showUnbtn = document.getElementById("show-unshow")
let unshowbtn = document.getElementById("unshow")
let bgColour = document.getElementById("change-bg")


function changeColorFromPicker() {
    const selectedColor = document.getElementById("colorPicker").value;
    document.getElementById("container").style.backgroundColor = selectedColor;
}




let gridSize = prompt("any num smaller than 100")
function createBoard() {
    let num = parseInt(gridSize)
    if (num > 100) {
        return alert("insert smaller number");

    } else {

        container.innerHTML = "";
        const containerSize = 400;
        const colCal =num
        const rowCal = num
        const itemSize = containerSize/ colCal


        for(let a=0; a<num * num; a++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add('gridItem')
            gridItem.style.width = itemSize + 'px';
            gridItem.style.height = itemSize + 'px';
            gridItem.style.boxSizing = 'border-box';
    
            showUnbtn.addEventListener('click', function () {
                gridItem.style.border = '1px solid #ccc';
                
            })
    
            unshowbtn.addEventListener('click', function () {
                gridItem.style.border = 'none';
            })
    
    
            gridItem.addEventListener('mouseover', () => {
                gridItem.style.backgroundColor = 'black';
            });
    
    
            container.appendChild(gridItem);
    
            console.log(`Rows: ${rowCal}, Columns: ${colCal}`);
    
        }

        
    }

}
createBoard()


bgColour.addEventListener('click', function () {
    document.getElementById("colorPicker").style.display = "block"
    
})