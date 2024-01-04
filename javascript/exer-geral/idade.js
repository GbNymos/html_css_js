function verificar(){
    var ano = new Date().getUTCFullYear()
    var msg= document.getElementById("msg")
    var nasc=document.getElementById("ano")

    if(nasc.value.length===0 || Number(nasc.value)>ano ){
        window.alert("Erro,insira os dados corretamente")
    }else{
        var idade=ano- Number(nasc.value)
        var sexo= document.getElementsByName("sexo")
        var genero=""
        if(sexo[0].checked){   //verificar se o primeiro elemento input radio foi marcado
            genero="Homem"
        }else{
            genero="Mulher"
        }
        msg.innerHTML=` ${genero} com ${idade} anos de idade`
    }
}