
// Your Code Here
async function main () {
    const response = await fetch('http://localhost:3001/listBooks');
    const books = await response.json();
    books.forEach(renderBook);
}

function renderBook(book) {
    const root = document.querySelector('#root');

    const li = document.createElement('li');
    li.textContent = book.title;

    const quantityInput = document.createElement('input');
    quantityInput.value = book.quantity;

    const saveButton = document.createElement('button');
    saveButton.textContent = 'save';

    saveButton.addEventListener('click', () =>{
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })

    li.append(quantityInput, saveButton);

    root.append(li);
}

main();