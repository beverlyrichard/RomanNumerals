var num = 100;
console.log(intToRoman(num));
function intToRoman(num){
    var s = "";
    if(num > 3999){
        console.log("Too long");
    }
    else {
        switch (num.toString().length){
            case 1:
                // num is 0-9
                s = caseOne(num, s);
                break;
            case 2:
                // num is 10-99
                s = caseTwo(num, s);
                break;
            case 3:
                // num is 100-999
                s = caseThree(num, s);
                break;
            case 4:
                // num is 1000-3999
                s = caseFour(num, s);
                break;
            default:
                s = "Invalid";
                break;
        }
    }
    return s;
}

function caseOne(num, s){
    if(num < 4){
        while(num > 0){
            s = s + "I";
            num--;
        }
    }
    else if(num == 4){
        s = s + "IV";
    }
    else if(num == 5){
        s = s + "V";
    }
    else if(num == 9){
        s = s + "IX";
    }
    else{
        s = s + "V";
        num = num - 5;
        while(num > 0){
            s = s + "I";
            num--;
        }
    }
    return s;
}

function caseTwo(num, s){
    if(num < 40){
        while(num >= 10){
            s = s + "X";
            num = num - 10;
        }
        s = caseOne(num, s);
    }
    else if(40 <= num && num <= 49){
        s = s + "XL";
        num = num - 40;
        s = caseOne(num, s);
    }
    else if(50 <= num && num <= 89){
        s = s + "L";
        num = num - 50;
        while(num >= 10){
            s = s + "X";
            num = num - 10;
        }
        s = caseOne(num, s);
    }
    else if(num >= 90){
        s = s + "XC";
        num = num - 90;
        s = caseOne(num, s);
    }
    return s;
}

function caseThree(num, s){
    if(num < 400){
        while(num >= 100){
            s = s + "C";
            num = num - 100;
        }
        s = caseTwo(num, s);
    }
    else if(num >= 400 && num <= 499){
        s = s + "CD";
        num = num - 400;
        s = caseTwo(num, s);
    }
    else if(num >= 500 && num < 900){
        s = s + "D";
        num = num - 500;
        while(num >= 100){
            s = s + "C";
            num = num - 100;
        }
        s = caseTwo(num, s);
    }
    else if(num >= 900){
        s = s + "CM";
        num = num - 900;
        s = caseTwo(num, s);
    }
    return s;
}

function caseFour(num, s){
    while(num >= 1000){
        s = s + "M";
        num = num - 1000;
    }
    s = caseThree(num, s);
    return s;
}