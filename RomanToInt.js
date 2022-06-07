var s = "MCMXCIV";

console.log(s + " = " + RomanToInt(s));

function RomanToInt(s){
    var i = 0;
    var number = 0;
    
    if(s.length > 15){
        console.log("String is too long");
        return 0;
    }
    switch(s.charAt(i)){
        case 'I':
            number = letterI(s, number, i);
            break;
        case 'V':
            number = letterV(s, number, i);
            break;
        case 'X':
            number = letterX(s, number, i);
            break;
        case 'L':
            number = letterL(s, number, i);
            break;
        case 'C':
            number = letterC(s, number, i);
            break;
        case 'D':
            number = letterD(s, number, i);
            break;
        case 'M':
            number = letterM(s, number, i);
            break;
        default:
            number = 0;
            break;
    }
    return number;
}
function letterI(s, number, index){
    if(index == (s.length - 1)){
        number = number + 1;
    }
    else {
        index++;
        switch(s.charAt(index)){
            case 'I':
                number = 1 + letterI(s, number, index);
                break;
            case 'V':
                number = letterV(s, number, index) - 1;
                break;
            case 'X':
                number = letterX(s, number, index) - 1;
                break;
            default:
                number = 0;
                break;
        }
    }
    return number;
}
function letterV(s, number, index){
    if(index == (s.length - 1)){
        number = number + 5;
    }
    else{
        index++;
        number = 5 + letterI(s, number, index);
    }
    return number;
}

function letterX(s, number, index){
    if(index == (s.length - 1)){
        number = number + 10;
    }
    else{
        index++;
        switch(s.charAt(index)){
            case 'I':
                number = 10 + letterI(s, number, index);
                break;
            case 'V':
                number = 10 + letterV(s, number, index);
                break;
            case 'X':
                number = 10 + letterX(s, number, index);
                break;
            case 'L':
                number = letterL(s, number, index) - 10;
                break;
            case 'C':
                number = letterC(s, number, index) - 10;
                break;
            default:
                number = 0;
                break;
        }
    }
    return number;
}

function letterL(s, number, index){
    if(index == (s.length - 1)){
        number = number + 50;
    }
    else{
        index++;
        switch(s.charAt(index)){
            case 'I':
                number = 50 + letterI(s, number, index);
                break;
            case 'V':
                number = 50 + letterV(s, number, index);
                break;
            case 'X':
                number = 50 + letterX(s, number, index);
                break;
            default:
                number = 0;
                break;
        }
    }
    return number;
}

function letterC(s, number, index){
    if(index == (s.length - 1)){
        number = number + 100;
    }
    else{
        index++;
        switch(s.charAt(index)){
            case 'I':
                number = 100 + letterI(s, number, index);
                break;
            case 'V':
                number = 100 + letterV(s, number, index);
                break;
            case 'X':
                number = 100 + letterX(s, number, index);
                break;
            case 'L':
                number = 100 + letterL(s, number, index);
                break;
            case 'C':
                number = 100 + letterC(s, number, index);
                break;
            case 'D':
                number = letterD(s, number, index) - 100;
                break;
            case 'M':
                number = letterM(s, number, index) - 100;
                break;
            default:
                number = 0;
                break;
        }
    }
    return number;
}

function letterD(s, number, index){
    if(index == (s.length - 1)){
        number = number + 500;
    }
    else {
        index++;
        switch(s.charAt(index)){
            case 'I':
                number = 500 + letterI(s, number, index);
                break;
            case 'V':
                number = 500 + letterV(s, number, index);
                break;
            case 'X':
                number = 500 + letterX(s, number, index);
                break;
            case 'L':
                number = 500 + letterL(s, number, index);
                break;
            case 'C':
                number = 500 + letterC(s, number, index);
                break;
            default:
                number = 0;
                break;
        }
    }
    return number;
}

function letterM(s, number, index){
    if(index == (s.length - 1)){
        number = number + 1000;
    }
    else{
        index++;
        switch(s.charAt(index)){
            case 'I':
                number = 1000 + letterI(s, number, index);
                break;
            case 'V':
                number = 1000 + letterV(s, number, index);
                break;
            case 'X':
                number = 1000 + letterX(s, number, index);
                break;
            case 'L':
                number = 1000 + letterL(s, number, index);
                break;
            case 'C':
                number = 1000 + letterC(s, number, index);
                break;
            case 'D':
                number = 1000 + letterD(s, number, index);
                break;
            case 'M':
                number = 1000 + letterM(s, number, index);
                break;
            default:
                number = 0;
                break;
        }
    }
    return number;
}