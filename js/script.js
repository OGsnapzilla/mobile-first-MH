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

// CAROUSEL FUNCTIONS
document.addEventListener("DOMContentLoaded", function() {
    const list = document.querySelector(".photoList");
  
    // How far it should scroll
    const item = document.querySelector(".photoItem");
    const itemWidth = item.offsetWidth;
  
    function handleClick(direction) {
      if (direction === "previous") {
        list.scrollBy({ left: -itemWidth, behavior: "smooth" });
      } else {
        list.scrollBy({ left: itemWidth, behavior: "smooth" });
      }
    }
  
    // Gets the buttons
    const prevButton = document.querySelector(".button--previous");
    const nextButton = document.querySelector(".button--next");
  
    //Event listeners
    prevButton.addEventListener("click", () => handleClick("previous"));
    nextButton.addEventListener("click", () => handleClick("next"));
});