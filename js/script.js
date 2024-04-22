// NAVIGATION FUNCTIONS
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

// CAROUSSEL FUNCTIONS
const list = document.querySelector(".photoList");

  // We want to know the width of one of the items. We'll use this to decide how many pixels we want our carousel to scroll.
  const item = document.querySelector(".photoItem");
  const itemWidth = item.offsetWidth;

  function handleClick(direction) {
    // Based on the direction we call `scrollBy` with the item width we got earlier
    if(direction === "previous") {
      list.scrollBy({ left: -itemWidth, behavior: "smooth" });
    } else {
      list.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  }