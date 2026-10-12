const displayProduct = document.querySelector('#displayProduct');

let list = JSON.parse(localStorage.getItem('list')) || [];

function displayProducts() {

    displayProduct.innerHTML = '';

    list.forEach((product, index) => {

        const { id, title, price, Image, category } = product;

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>

            <td>
                <img src="${Image}"style="width="200" height="50" " alt="${title}"
                >
            </td>

            <td>${title}</td>
            <td>${price}</td>
            <td>${category}</td>

            <td>
                <button 
                    type="button" class="btn btn-danger" onclick="deleteProduct(${index})">Delete
                </button>

                <button type="button" class="btn btn-warning" onclick="editProduct(${index})">Edit
                </button>
            </td>
        `;

        displayProduct.append(row);
    });
}


function deleteProduct(index) {

    list.splice(index, 1);

    localStorage.setItem('list', JSON.stringify(list));

    displayProducts();
}


function editProduct(index) {

    const title = prompt("Enter New Ttile",
        list[index].title
    )

    const price = prompt("Enter new price",
        list[index].price
    );

    const category = prompt("Enter new category",
        list[index].category
    )

    if (title !== null && price !== null && category !== null) {

        list[index].title = title;
        list[index].price = price;
        list[index].category = category;

        localStorage.setItem('list',JSON.stringify(list));

        displayProducts();
    }
}

displayProducts();