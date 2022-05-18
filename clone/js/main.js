
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItmes = document.querySelectorAll(".tab-content-item");



function removeTabBorder(){
    tabItems.forEach(item=>item.classList.remove("tab-border"));
}

function removeShow(){
    tabContentItmes.forEach(item => item.classList.remove("show"));
}

function selectedTab(e){
    removeTabBorder();
    removeShow();

    
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    this.classList.add("tab-border");
    tabContentItem.classList.add("show");
}

tabItems.forEach(item=> item.addEventListener('click',selectedTab))