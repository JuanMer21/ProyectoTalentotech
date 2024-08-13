// Función para filtrar la tabla según la búsqueda
function filterTable() {
    // Obtener el valor del campo de búsqueda y convertirlo a minúsculas
    const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();
    
    // Obtener la tabla y todas las filas del cuerpo
    const table = document.getElementById('dataTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    
    // Si el campo de búsqueda está vacío, mostrar todas las filas
    if (searchInput === '') {
        for (let i = 0; i < rows.length; i++) {
            rows[i].style.display = '';
        }
        return;
    }
    
    // Iterar sobre cada fila de la tabla
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let found = false;
        
        // Iterar sobre cada celda de la fila
        for (let j = 0; j < cells.length; j++) {
            const cellText = cells[j].textContent || cells[j].innerText;
            
            // Si el texto de la celda incluye el texto de búsqueda, marcar como encontrado
            if (cellText.toLowerCase().includes(searchInput)) {
                found = true;
                break;
            }
        }
        
        // Mostrar u ocultar la fila según si se encontró o no el texto
        rows[i].style.display = found ? '' : 'none';
    }
}
