

const op=document.querySelectorAll('.option');

ans=['bla','boom'];

for(let i=0;i<op.length;i++){
    op[i].addEventListener('click',function(){
         let selectedOption=op[i].querySelector('p').textContent;

         if(ans.includes(selectedOption) ){
            op[i].style.background='green';
            op[i].style.color='white';
         }
         else{
            op[i].style.background='red';
            op[i].style.color='white';
         }
        


    })

     op[i].addEventListener("click", function () {
       for(let j=0;j<op.length;j++){
        op[j].disabled='true';
       }
       

       


    
})}