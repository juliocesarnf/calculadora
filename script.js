const preview = document.getElementById('preview');
var math ='';

function addDigit(digit){
    if(preview.value == 'ERRO'){
        preview.value = '';
    }
    preview.value += digit;
    math += digit;
}

function addOperation(operation){
    if(preview.value == 'ERRO'){
        preview.value = '';
    }
    switch(operation){
        case '+':
        case '-':
            preview.value += operation;
            math += operation;
            break;
        case 'x':
            preview.value += operation;
            math += '*';
            break;
        case '÷':
            preview.value += operation;
            math += '/';
            break;
        case '^':
            preview.value += operation;
            math += '**';
            break;    
    }
}

function equality(){
    try{
        math = String(eval(math));
        preview.value = math;
    } catch(error){
        math = '';
        preview.value = 'ERRO';
    }
}

function squareRoot(){
    try{
        math = String(Math.sqrt(eval(math)));
        preview.value = math;
    } catch(error){
        math = '';
        preview.value = 'ERRO';
    }
}

function opposite(){
    try{
        math = String(eval(math) * -1);
        preview.value = math;
    } catch(error){
        math = '';
        preview.value = 'ERRO';
    }  
}

function clearScreen(){
    math = '';
    preview.value = '';
}
