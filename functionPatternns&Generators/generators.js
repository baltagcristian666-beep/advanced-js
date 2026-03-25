//Generators

function* colorGenerator() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        const ranNum = Math.floor(Math.random() * 16)
        color += '0123456789ABCDEF'[ranNum]
    }
    yield color
}

document.getElementById('nextColorButton').addEventListener('click', () => {
    const generatedColor = colorGenerator()
    const result = generatedColor.next()
    const color = result.value
    console.log(color)
    //#4B7EC5

        document.getElementById('colorText').textContent = color
        document.getElementById('colorDisplay').style.backgroundColor = color
})



/*
Purpose: 
Mechanism: Functions that can be paused and resumed. Produce a sequence of
values.
Use case: async functions, handling state, lazy evaluation
Return: A response (object) which contains a value (value) and a boolean status (done).
!!Use yield instead of return. Return stops the generations and can return a value.
!!Has it's own methods.

*/