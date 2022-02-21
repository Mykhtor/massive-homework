let names = ['Harry', 'Ross', 'Bruce', 'Cook', 'Carolyn', 'Morgan', 'Albert', 'Walker', 'Randy', 'Reed'];

let jobs = ['Frontend Developer', 'React Developer', 'Javascript Backend Developer', 'Java Developer', 'DevOps', 'Go Developer', 'Android Developer', 'Flutter Developer', 'Graphic Designer', 'Team Lead'];

let btn = document.querySelector('#find')
let input = document.querySelector('#id')
let text = document.querySelector('#text')
btn.onclick = function () {
    if (input.value === '1') {
        text.innerHTML = `${names[0]} is a ${jobs[0]}`
    }
        
    else if (input.value === '2') {
        text.innerHTML = `${names[1]} is a ${jobs[1]}`
    }
    else if (input.value === '3') {
        text.innerHTML = `${names[2]} is a ${jobs[2]}`
    }
    else if (input.value === '4') {
        text.innerHTML = `${names[3]} is a ${jobs[3]}`
    }
    else if (input.value === '5') {
        text.innerHTML = `${names[4]} is a ${jobs[4]}`
    }
    else if (input.value === '6') {
        text.innerHTML = `${names[5]} is a ${jobs[5]}`
    }
    else if (input.value === '7') {
        text.innerHTML = `${names[6]} is a ${jobs[6]}`
    }
    else if (input.value === '8') {
        text.innerHTML = `${names[7]} is a ${jobs[7]}`
    }
    else if (input.value === '9') {
        text.innerHTML = `${names[8]} is a ${jobs[8]}`
    }
    else if (input.value === '10') {
        text.innerHTML = `${names[9]} is a ${jobs[9]}`
    }
    else {
        text.innerHTML = `Undefined value`
    }

}





// let container = document.createElement('div')
// container.classList.add('.container')

// let row = document.createElement('div')
// row.classList.add('.row.justify-content-center')


// let col = document.createElement('div')
// col.classList.add('.list-group.list-group-numbered')




// let ul = document.createElement('ul')
// ul.classList.add('.list-group.list-group-numbered')

// let li = document.createElement('li')
// li.classList.add('list-group-item')
// li.innerText = 'Harry'


// let li = document.createElement('li')
// li.classList.add('list-group-item')
// li.innerText = 'Ross'


// let li = document.createElement('li')
// li.classList.add('.list-group-item')
// li.innerText = 'Bruce'


// let li = document.createElement('li')
// li.classList.add('.list-group-item')
// li.innerText = 'Cook'


// let li = document.createElement('li')
// li.classList.add('.list-group-item')
// li.innerText = 'Carolyn'


// let li = document.createElement('li')
// li.classList.add('.list-group-item')
// li.innerText = 'Morgan'


// let li = document.createElement('li')
// li.classList.add('.list-group-item')
// li.innerText = 'Albert'


// let li = document.createElement('li')
// li.classList.add('.list-group-item')
// li.innerText = 'Walker'


// let li = document.createElement('li')
// li.classList.add('.list-group-item')
// li.innerText = 'Randy'

// let li = document.createElement('li')
// li.classList.add('.list-group-item')
// li.innerText = 'Reed'

// container.appendChild(row)
// row.appendChild(col)
// col.appendChild(ul)
// ul.appendChild(li)

