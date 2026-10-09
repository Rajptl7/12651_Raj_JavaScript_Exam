let displayProduct = document.querySelector('#displayProduct')
let list = JSON.parse(localStorage.getItem('list')) || []

console.log(displayProduct)

list.forEach((product, index) => {
    const { id, title, price, Image, category} = product;
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${index+1}</td>
        <td><img src=${Image} style="width:70px" alt=${title}></td>
        <td>${title}</td>
        <td>${price}</td>
        <td>${category}</td>
        <td>
        <button type="button" class="btn btn-danger" onclick="deleteProduct(${index})">Delete</button>
        <button type="button" class="btn btn-warning" onclick="editProduct(${index})">Edit</button>
        </td>
        `
    displayProduct.append(row);
})

function deleteProduct(index) {
    list.splice(index, 1)
    localStorage.setItem('list', JSON.stringify(list))
    displayProduct.innerHTML = ''

    list.forEach((product, index) => {
        const { id, title, price, Image,category } = product;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index+1}</td>
            <td><img src=${Image} style="width:70px" alt=${title}></td>
            <td>${title}</td>
            <td>${price}</td>
            <td>${category}</td>
            <td>
            <button type="button" class="btn btn-danger" onclick="deleteProduct(${index})">Delete</button>
            <button type="button" class="btn btn-warning" onclick="editProduct(${index})">Edit</button>
            </td>
            `
        displayProduct.append(row);
    })
}

function editProduct(index) {
    let title = prompt("Enter new title", list[index].title)
    let price = prompt("Enter new price", list[index].price)

    list[index].title = title
    list[index].price = price

    localStorage.setItem('list', JSON.stringify(list))

    displayProduct.innerHTML = ''

    list.forEach((product, index) => {
        const { id, title, price, Image } = product;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index+1}</td>
            <td><img src=${Image} style="width:70px" alt=${title}></td>
            <td>${title}</td>
            <td>${price}</td>
            <td>
            <button type="button" class="btn btn-danger" onclick="deleteProduct(${index})">Delete</button>
            <button type="button" class="btn btn-warning" onclick="editProduct(${index})">Edit</button>
            </td>
            `
        displayProduct.append(row);
    })
}