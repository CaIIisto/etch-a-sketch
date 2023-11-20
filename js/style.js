const pixelNum = 100;
const container = document.querySelector(".drawing-bounds");
const refresh = document.querySelector(".refresh")

function makeGrid(pixelNum){
    for (let i=0; i < pixelNum;i++) {
        const dimensions = 700/pixelNum
        const row = document.createElement('div')
        row.classList.add('grid-row')
        row.style.height = `${dimensions}px`

        for (let j=0; j< pixelNum; j++){
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${dimensions}px`
            gridBox.style.height = `${dimensions}px`
            row.appendChild(gridBox)

            gridBox.addEventListener('mouseenter',() => {
                gridBox.style.backgroundColor = 'black'
            })
        }
       container.appendChild(row) 
    }
}

makeGrid(pixelNum)

