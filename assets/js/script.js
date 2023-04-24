const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.remove('w3-light-grey');
    document.body.classList.toggle('w3-dark-grey');
})