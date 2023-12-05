document.getElementById('menu-icon').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '250px' || sidebar.style.width === '') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '250px';
    }
});

document.getElementById('close-icon').addEventListener('click', function () {
    document.getElementById('sidebar').style.width = '0';
});
