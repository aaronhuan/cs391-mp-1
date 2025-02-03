function calc(op){
    let fval = document.getElementById("first-number").value;
    let fnum = Number(fval);
    let sval = document.getElementById("second-number").value; 
    let snum = Number(sval);
    let result = 0;
    switch (op) {
        case '+':
            result = add(fnum, snum);
    
            break;
        case '-':
            result =sub(fnum, snum);
          
          break;
        case '*':
            result =mul(fnum,snum);

            break;

        case '/':
            result =div(fnum, snum);
            break;

        case '**':
            result =pow(fnum, snum);

            break;
        
        case 'clear':
            result = '';
            document.getElementById("first-number").value=""; 
            document.getElementById("second-number").value= "";
            break;
        default:

          break;
      }

      document.getElementById("answer").innerHTML= String(result)

      if (result <0){  //red when negative
        document.getElementById("answer").style.color="red";
      } else{
        document.getElementById("answer").style.color="black";
      }

}




function add(first,second){
    return first + second;
}

function sub(first,second){
    return first - second;
}

function mul(first,second){
    return first * second;
}

function div(first,second){
    return first/second 
}

function pow(first,second){
    if (isNaN(first) || isNaN(second)){
        return NaN;
    }
    if(second ===0){
        return 1;
    }
    if (first ===0){
        return 0;
    }

    let result = 1;
    if (second <0){
        for(let i=0;i <(-1)*second; i++ ){
            result *=first;
        }  
        result = 1/result;
    } else{
        for(let i=0;i <second; i++ ){
            result *=first;
        }
    }

    return result;
}
