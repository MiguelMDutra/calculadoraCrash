const html = document.documentElement;

html.addEventListener('keydown',(enter)=>{
    console.log(enter.key)
    if(enter.key==="Enter"){
        window.location.href = "inicial/comando/comando.html"
    }
})