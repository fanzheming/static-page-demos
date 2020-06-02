window.onload = function(){
    const defaultBtn = document.querySelector("#default-btn")
    const customBtn = document.querySelector("#custom-btn")
    const cancelBtn = document.querySelector("#cancel-btn")
    const wrapper = document.querySelector(".wrapper")
    const img = document.querySelector(".wrapper .image img")
    const fileName = document.querySelector(".file-name")
    customBtn.addEventListener("click",function(){
        defaultBtn.click()
    })
    defaultBtn.addEventListener("change",function(){
        console.dir(this)
        console.log(`文件名为:${this.files[0].name}`)
        const file = this.files[0]
        if(file){
            if(!/image\/\w+/.test(file.type)){
                alert("请确保文件为图像类型");
                return;
            }
            if(window.FileReader){
                const reader = new FileReader();
                // 文件读取完毕的回调  result接收成果 如果读取失败则为null
                reader.onload = function(){
                    if(this.result === null){
                        alert("文件读取失败")
                    } else {
                        // 显示图片
                        img.src = this.result;
                        fileName.textContent = file.name
                        wrapper.classList.add("active")
                        cancelBtn.addEventListener("click",function(){
                            img.src = ""
                            wrapper.classList.remove("active")
                        })
                    }
                    
                }
                reader.readAsDataURL(file) //把文件读成data url
            } else {
                alert("您的浏览器不支持文件读取");
            }
            

        }
    })
}