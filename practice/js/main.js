
const tabs = document.querySelectorAll(".tab");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove("show"));
}

function removeBorderBottom(){
    tabs.forEach(item => item.classList.remove("border-bottom"));
}

function selectTabItem(e){
    removeBorderBottom();
    removeShow();

    this.classList.add("border-bottom");
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    tabContentItem.classList.add("show");
}

tabs.forEach(item=> item.addEventListener('click',selectTabItem));