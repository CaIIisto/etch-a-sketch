
//Gets user input for grid dimensions
const pixelNum = Number(prompt('What dimensions would you like for the grid?'));
//Rejects any numbers not between 2 and 100 and prompts again
while(pixelNum > 100 || pixelNum < 2){
    pixelNum = Number(prompt('Invalid response: Please choose a number between 2 and 100'))}

//Establishes variables
const container = document.querySelector(".drawing-bounds");
const refreshButton = document.querySelector(".refresh");

//Function to create grid and add drawing aspect
function makeGrid(pixelNum){
    //Wrapper element that contains the entire drawing pad, makes it easier to delete later
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    //Creates rows
    for (let i=0; i < pixelNum;i++) {
        const dimensions = 700/pixelNum
        const row = document.createElement('div')
        row.classList.add('grid-row')
        row.style.height = `${dimensions}px`
        //Creates grid boxes
        for (let j=0; j< pixelNum; j++){
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${dimensions}px`
            gridBox.style.height = `${dimensions}px`
            row.appendChild(gridBox)
//Adds drawing functionality
            gridBox.addEventListener('mouseenter',() => {
                gridBox.style.backgroundColor = 'black'
            })
        }
       wrapper.appendChild(row)
    }
    container.appendChild(wrapper)
}
//Calling function
makeGrid(pixelNum)

//Reset button functionality
refreshButton.addEventListener('click',() => {
    //Prompt for new value, reject outliers
    let newSize = Number(prompt('What dimensions would you like for the grid?'))
    console.log(newSize)

    while(newSize > 100 || newSize < 2){
        newSize = Number(prompt('Invalid response: Please choose a number between 2 and 100'))
    }
    //Delete canvas and redraws a new one
    const wrapper = document.querySelector('.wrapper')
    wrapper.remove()
    makeGrid(newSize)
    })