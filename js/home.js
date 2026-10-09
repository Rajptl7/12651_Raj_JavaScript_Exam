let displayProduct = document.querySelector('#displayProduct')
let list = JSON.parse(localStorage.getItem('list')) || []

list.forEach((product, index) => {

    const { id, title, price, Image, category } = product;

    const col = document.createElement('div');
    col.classList.add('col-md-3')

    col.innerHTML = `
        <div class="card text-center p-3">
            <img src="${Image}" 
                 class="card-img-top" 
                 style="height:70px; object-fit:contain" 
                 alt="${title}">

            <div class="card-body">
                <h5 class="card-title fs-5">${title}</h5>
                <p class="card-body">${category || 'No Category'}</p> 
                <strong class="fs-6">$${price}</strong>
                <br/>
            </div>
        </div>
    `;

    displayProduct.append(col);
})