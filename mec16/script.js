document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; 

    fetch(apiUrl)
        .then(response => {
            console.log('Response received:', response);
            return response.json();
        })
        .then(data => {
            console.log('Data fetched:', data);
            populateTable(data); 
        })
        .catch(error => console.error('Error fetching data:', error));
});

function populateTable(data) {
    const tableBody = document.querySelector('#data-table tbody');
    if (tableBody) {
        data.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            `;
            tableBody.appendChild(row);
        });
    } 
}

function populateCards(data) {
    const dataCards = document.getElementById('data-cards');
    if (dataCards) {
        data.forEach(user => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Email:</strong> ${user.email}</p>
            `;
            dataCards.appendChild(card);
        });
    } 
}
