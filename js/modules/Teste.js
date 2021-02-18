export default class Teste{
    constructor(){
        this.botao = document.querySelector(".btn")
    }
    addEvent(){
        this.botao.addEventListener('click',()=>{
            this.testando()
        })
    }
    testando(){
        console.log("Testando se para a outra classe")
    }

    init(){
        this.addEvent()
    }
}