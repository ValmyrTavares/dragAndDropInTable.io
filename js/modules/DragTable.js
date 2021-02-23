function R(msg){
    console.log(msg)
}

export default class DragTable{

    constructor(){
        this.dataTable = document.querySelectorAll(".data")      
        this.dropZone = document.querySelectorAll(".dropzone")   
        this.container = document.querySelector(" tbody") 
        this.img = document.querySelectorAll("img")
          
   
    }
     addEvent(){           
        console.log("Rolou")
         this.dataTable.forEach((item,index) => {
             item.addEventListener('dragstart',()=>{
                 this.onStart(index)
             })
         })
         this.dataTable.forEach((item,index) => {
         item.addEventListener('dragend',()=>{
             this.dropOut(index)
             })
         })   
         this.dropZone.forEach((item,index) => {
             item.addEventListener('dragenter',()=>{
                 this.receivingLine(index)
             })
         })  

         this.dropZone.forEach((item,index) => {
             item.addEventListener('dragleave',()=>{
                 this.leavingZone(index)
             })
         })               
     }        
 
    leavingZone(){
        this.dropZone.forEach(item => item.classList.remove("high-light"))
    }

    receivingLine(index){     
        this.dropZone[index].classList.add("high-light")  
        JSON.stringify(this.itemMoved)
        this.container.insertBefore(this.itemMoved, this.dropZone[index])            
    }
    
    onStart(index){
        this.dataTable[index].classList.add("selected-item")
        this.itemMoved = this.dataTable[index]
     }
       
     dropOut(index){
        this.dataTable.forEach(item => {
            item.classList.remove("selected-item")
        })
     }     

     init(){
         console.log("Sou o init do DragTable")
         this.addEvent()    
        
       
        
    }
}