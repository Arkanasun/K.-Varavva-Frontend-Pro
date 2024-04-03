const input = document.querySelector('#elem');
input.addEventListener("focus", function(){
    const first = document.querySelector('#first').style.display = "flex";
    document.querySelector('#first').style.justifyContent = "center";
    document.querySelector('#first').style.alignItems = "center";
}, "blur");
input.addEventListener("blur", function(){
    const second = document.querySelector('#first').style.display = "none";
})

