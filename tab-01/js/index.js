window.onload = () =>{
    let tabs = document.querySelectorAll(".tab-item>div")
    let contents = document.querySelectorAll(".tab-content>div")
    for(let i=0;i<tabs.length;i++){
        let tab = tabs[i]
        tab.addEventListener('click',function(e){
            for(let j=0;j<tabs.length;j++){
                tabs[j].classList.remove('active')
                contents[j].classList.remove('active')
            }
            this.classList.add('active');
            contents[i].classList.add('active')
        })
    }
}