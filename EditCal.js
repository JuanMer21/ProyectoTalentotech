document.addEventListener('DOMContentLoaded', function() {
    const editButtons = document.querySelectorAll('.edit-btn');
    const saveButtons = document.querySelectorAll('.save-btn');

    editButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const row = btn.closest('tr');
            const editableCells = row.querySelectorAll('td[contenteditable]');
            editableCells.forEach(cell => cell.setAttribute('contenteditable', 'true'));
            btn.style.display = 'none'; // Ocultar botón de editar
            saveButtons[index].style.display = 'inline'; // Mostrar botón de guardar
        });
    });

    saveButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const row = btn.closest('tr');
            const editableCells = row.querySelectorAll('td[contenteditable]');
            editableCells.forEach(cell => cell.setAttribute('contenteditable', 'false'));
            btn.style.display = 'none'; // Ocultar botón de guardar
            editButtons[index].style.display = 'inline'; // Mostrar botón de editar
            // Aquí puedes agregar lógica para guardar los cambios en el servidor si es necesario
        });
    });
});
