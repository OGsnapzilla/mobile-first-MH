function hideSidebar() {
    //document = HTML dokumentet
    //querySelector = søger efter et element
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}