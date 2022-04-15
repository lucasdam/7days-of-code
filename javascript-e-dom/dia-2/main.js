const submitForm = (event) => {
    const name = document.getElementById('name').value
    const birthDate = document.getElementById('birth-date').value.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')

    console.log(`O ${name} nasceu em ${birthDate}.`)

    /* event.preventDefault() */
}

document.querySelector('#btn-submit-form').addEventListener('click', submitForm)