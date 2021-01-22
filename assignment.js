//problem-1: Kilometer To Metter
function kilometerToMeter(kilometer) {
    var metter = 1000;
    kilometer = kilometer * metter;
    if(kilometer<=0 || kilometer==" "){
        return('Zero and Negative value are not allow');     
    }else{
        return kilometer;
    }
}

console.log(kilometerToMeter(0));