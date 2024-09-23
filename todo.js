const taskinput= document.getElementById('taskinput');
const addbutton=document.getElementById('addbutton');
const tasklist=document.getElementById('tasklist');
const cleartask=document.getElementById('cleartask');

let tasks=[];

addbutton.addEventListener("click",addtask);
tasklist.addEventListener("click",handleTaskClick);

function addtask(){
    const tasktext=taskinput.value.trim();

    if(tasktext !== ""){
        tasks.push(tasktext)
        rendertasks();
        taskinput.value=""
    }
}
 
function handleTaskClick(e) {
    if(e.target.classList.contains("remove")){
        const taskitem=e.target.parentElement;
        const taskitem2=taskitem.parentElement;
        const taskindex=Array.from(tasklist.children).indexOf(taskitem2)
        tasks.splice(taskindex, 1);
        rendertasks();
    }
}

function rendertasks() {
    tasklist.innerHTML="";

    tasks.forEach((tasktext,index)=>{
        const taskitem=document.createElement('li');
        taskitem.textContent=`${index+1}. ${tasktext}`; // add list number to task test
 
        const removebutton = document.createElement('button');
        removebutton.innerHTML=`<i 
        class="fa fa-trash remove"></i>`;
        removebutton.classList.add("remove")

        taskitem.appendChild(removebutton); 
        tasklist.appendChild(taskitem);
    })
    if(tasklist.innerHTML !== ""){
        cleartask.style.display='block';
    }
    else{
        cleartask.style.display='none';
    }

}
cleartask.addEventListener("click",function(){
    tasklist.innerHTML="";
    tasks=[]
    cleartask.style.display='none'

})
