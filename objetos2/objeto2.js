const televisao = {
    marca: "Toshiba",
    cor: "preto",
    ligar:function(){
        console.log("ligando...")
    },
    controle:{
        modelo: "S1",
        cor: "preto",
        mudarCanal: function() {
            console.log("Canal alterado")
        }
    }
};
televisao.ligar()