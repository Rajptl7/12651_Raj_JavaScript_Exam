const productForm = document.querySelector('#productForm')
const inputs = document.querySelectorAll('#productForm .form-control')

let data = {}
let list = JSON.parse(localStorage.getItem('list')) || []

inputs.forEach((input)=>{
    input.addEventListener('input',(e)=>{
        const {name,value} = e.target
        data = {...data,[name]:value}
    })    
})

function addProduct(){

    list.push({...data, id:Date.now()})
    localStorage.setItem('list', JSON.stringify(list)) 

    alert("Product Added");
    productForm.reset()
}

productForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    addProduct()
})