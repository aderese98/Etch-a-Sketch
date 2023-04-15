const container = document.querySelector('.grid');
const btnGrid = document.querySelector('#grid-size');
const eraser = document.querySelector('.fa-eraser');

btnGrid.addEventListener('click', (e)=>{
    let size = e.target.classList[0];
    container.innerHTML = '';
    for(let i = 1; i <= size; i++) {
        const grid = document.createElement('div');
        grid.classList.add('row');
        for(let j = 1; j <= size; j++){
            const gridHorizontal = document.createElement('div');
            gridHorizontal.classList.add('square');
            grid.append(gridHorizontal);
        }
        container.append(grid);
    }

    const colorPicker = document.querySelector('#color-picker');
    let isClicked = false;
    let color;

    colorPicker.addEventListener('input', () => {
        color = colorPicker.value;
    });

    container.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('square')) {
            isClicked = true;
            e.target.style.backgroundColor = color;
        }
    });
    
    container.addEventListener('mousemove', (e) => {
        if (isClicked && e.target.classList.contains('square')) {
            e.target.style.backgroundColor = color;
        }
    });

    container.addEventListener('mouseup', () => {
        isClicked = false;
    });

    eraser.addEventListener('click', ()=>{
        container.innerHTML = '';
        for(let i = 1; i <= size; i++) {
            const grid = document.createElement('div');
            grid.classList.add('row');
            for(let j = 1; j <= size; j++){
                const gridHorizontal = document.createElement('div');
                gridHorizontal.classList.add('square');
                grid.append(gridHorizontal);
            }
            container.append(grid);
        }
    })
});

