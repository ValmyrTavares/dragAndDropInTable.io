export default class NewData{
    constructor(){
        this.btnShow = document.querySelector(".btn")
        this.formContainer = document.querySelector(".create")
        this.btnSend = document.querySelector(".send")
        this.inputs = document.querySelectorAll(".create form input")
        this.container = document.querySelector("tbody")

        this.vitrine = {
            titulo: "",
            ordem: "",
            tipo:"",
            ativo:""
        }
        
    }
     
    addEvents(){
        this.btnShow.addEventListener('click',()=>{
            this.showForm()
        })
        this.btnSend.addEventListener('click',()=>{
            this.getData()
        })
    }

    getData(){
        this.vitrine.titulo = this.inputs[0].value
        this.vitrine.ordem = this.inputs[1].value
        this.vitrine.tipo = this.inputs[2].value
        this.vitrine.ativo = this.inputs[3].value
       this.createLine(this.vitrine)
    }
    createLine(x){
        const line = `
        <tr class="data dropzone" draggable="true"  >
        <td>${x.titulo}</td>
        <td>${x.ordem}</td>
        <td>${x.tipo}</td>
        <td>${x.ativo}</td>
        <td><img src="./assets/edit.png" width="25px"/> </td>
        <td><img src="./assets/PikPng.com_trash-png_471206.png" width="20px"/></td>
    </tr>
        `
     console.log(typeof(line))
        this.container.innerHTML += line;
    }

    showForm(){
        console.log("teste")
       this.formContainer.classList.add("show")
    }

    init(){
        this.addEvents()             
    }

}