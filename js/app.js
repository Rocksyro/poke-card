
document.addEventListener('DOMContentLoaded', () =>{
    const random = getRandomArbitrary(1, 152)
    fetchData(random)
})

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const imprimirInfo = (pokemon) => {
    console.log(pokemon)
    const flex = document.querySelector('.flex')
    const template = document.getElementById('plantilla').content
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment()

    clone.querySelector('.card-body-img').setAttribute('src', pokemon.sprites.front_default)
    clone.querySelector('.card-body-title').innerHTML = `${pokemon.name} <span>${pokemon.stats[0].base_stat} Hp</span>`
    clone.querySelector('.card-body-text').textContent = `${pokemon.base_experience} Exp`
    clone.querySelectorAll('.card-footer-social h3')[0].textContent = `${pokemon.stats[1].base_stat}`
    clone.querySelectorAll('.card-footer-social h3')[1].textContent = `${pokemon.stats[2].base_stat}`
    clone.querySelectorAll('.card-footer-social h3')[2].textContent = `${pokemon.stats[3].base_stat}`

    fragment.appendChild(clone)
    flex.appendChild(fragment)
}

const fetchData = async (id) => {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const dataJSON = await respuesta.json()
        imprimirInfo(dataJSON)
    }catch (error) {
        console.log(error)
    }
}
