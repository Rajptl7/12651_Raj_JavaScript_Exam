const productForm = document.querySelector('#productForm');

let list = JSON.parse(localStorage.getItem('list')) || [];

productForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = productForm.querySelector('[name="title"]').value;
    const price = productForm.querySelector('[name="price"]').value;
    const Image = productForm.querySelector('[name="Image"]').value;
    const category = productForm.querySelector('[name="category"]').value;

    const product = {
        title: title,
        price: price,
        Image: Image,
        category: category,
        id: Date.now()
    };

    list.push(product);

    localStorage.setItem('list', JSON.stringify(list));

    alert("Product Added");

    productForm.reset();
});

// and make it simple and with my style also don't change my coding style   