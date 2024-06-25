var buttons =document.querySelectorAll(".button, .button1");
var display=document.getElementById("text");
var operand1 =0;
var operand2=null;
var operator=null;

function isOperator(value){
    return value=="+"||value=="-"||value=="*"||value=="/";
}



for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        var show= display.textContent.trim();
        if(isOperator(value)){
            operator=value;
            operand1=parseFloat(show);
            display.textContent="";
            
        }else if(value=="="){
            operand2=parseFloat(show);
            var result=eval(operand1+' '+operator+' '+operand2);
            if(result){
                display.textContent=result;
                operand1=result;
                operand2=null;
                operator=null;
            }


        }else if(value=="C"){
            display.textContent="";
            
        }
        else if(value=="x1"){
            operand1=parseFloat(show);
            operand1=1/operand1;
            display.textContent=operand1;
            
        }
        else if(value=="x2"){
            operand1=parseFloat(show);
            operand1=operand1*operand1;
            display.textContent=operand1;
            
        }
        else if (value == ".") {
            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        }

        else if(value=="%"){
            operand1=parseFloat(show);
            operand1=operand1/100;
            display.textContent=operand1;

            
        }
   
        else{
            display.textContent+=value;
        }

    });

}
