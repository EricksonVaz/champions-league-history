window.addEventListener("load",function(){
    const allFilterFaseButtons = document.querySelectorAll(".btn-filter-fase");
    const allFaseContainer = document.querySelectorAll(`.filter`);
    const linkYoutube = "https://www.youtube.com/embed/imSztAL5af4";
    const btnHiglights = document.querySelector(".btn-highlights");
    const backdropModal = this.document.querySelector(".backdrop");
    const modalPlayerYoutube = document.querySelector(".modal-player-youtube");
    const iframeYoutube = modalPlayerYoutube.querySelector("iframe");
    const btnCloseModal = modalPlayerYoutube.querySelector(".close");

    allFilterFaseButtons.forEach(button=>{
        button.addEventListener("click",function(){
            if(!button.classList.contains("active")){
                let dataFilterValue = button.dataset.filter;
                let parentElement = button.parentElement;
                parentElement.querySelector(".active").classList.remove("active");
                button.classList.add("active");

                allFaseContainer.forEach(container=>{
                    if(dataFilterValue==="all"){
                        container.classList.remove("d-none");
                    }else{
                        if(container.classList.contains(dataFilterValue)) container.classList.remove("d-none");
                        else container.classList.add("d-none");
                    }
                    
                });
            }
        });
    });

    btnHiglights.addEventListener("click",function(){
        backdropModal.classList.add("open");
        modalPlayerYoutube.classList.add("open");
        iframeYoutube.src = linkYoutube;
    });

    btnCloseModal.addEventListener("click",function(){
        backdropModal.classList.remove("open");
        modalPlayerYoutube.classList.remove("open");
        iframeYoutube.src = "";
    });
});