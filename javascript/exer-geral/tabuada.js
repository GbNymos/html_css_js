function calcular(){
    var numero=document.getElementById("numero").value
    var tabuada=document.getElementById("tabuada")

    if(numero.length===0){
        window.alert("Por favor! digite algum numero")
    }else{
        var c=1
        tabuada.innerHTML=""
        while(c<=10){
            var item= document.createElement("li")
            item.innerText=`${numero}  x  ${c}  =  ${Number(numero) * c} `
            tabuada.appendChild(item)
            c++
        }
       
    }
}