let displayProduct = document.querySelector('#displayProduct')
let searchInput = document.querySelector('#searchInput')
let searchForm = document.querySelector('#searchForm')
let sortProduct = document.querySelector('#sortProduct')

let list = JSON.parse(localStorage.getItem('list')) || []


function displayProducts(products) {

    displayProduct.innerHTML = ''

    products.forEach((product, index) => {

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
                    <strong class="fs-6">₹${price}</strong>
                    <br/>
                </div>
            </div>
        `;

        displayProduct.append(col);
    })
}


displayProducts(list)


searchForm.addEventListener('submit', (e) => {

    e.preventDefault()

    let searchValue = searchInput.value.toLowerCase()

    let filteredList = list.filter((product) => {

        return product.title.toLowerCase().includes(searchValue) ||
            product.category.toLowerCase().includes(searchValue)
    })

    displayProducts(filteredList)

})


sortProduct.addEventListener('change', () => {

    let sortedList = [...list]

    if(sortProduct.value == 'low'){
        sortedList.sort((a, b) => a.price - b.price)
    }

    else if(sortProduct.value == 'high'){
        sortedList.sort((a, b) => b.price - a.price)
    }

    displayProducts(sortedList);

})