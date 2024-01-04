function carregar(){
    var hora= new Date().getHours() 
    var imagem=document.getElementById("imagem") // pegar a div de id imagem
    var mesg=document.getElementById("msg").innerHTML=` Horario atual: ${hora} hr`  // na id msg ele vai exibir a hra atual

    // condicoes para saber se e dia , tarde ou noite.
    if (hora>=0 && hora<12){
        imagem.src="https://i.pinimg.com/736x/8e/b1/68/8eb1685a02648338d7c3d3e1c2d04fb7.jpg"  // no elemento imagem ele muda o atributo src.
        document.body.style.background="lightblue"
        document.body.footer.style.color="black"
        
    }else if(hora>=12 && hora<18) {
        imagem.src=" https://png.pngtree.com/png-clipart/20210808/original/pngtree-boa-tarde-lettering-local-text-good-afternoon-on-portuguese-vector-png-image_6623477.jpg"
        document.body.style.background="lightsalmon"
        
    }else{
        imagem.src="https://as1.ftcdn.net/v2/jpg/03/53/76/86/1000_F_353768614_XWW2DPH4ic56Q4aUTlt7jAaERMX8CAcZ.jpg"
        document.body.style.background=" lightgrey"

    }

}