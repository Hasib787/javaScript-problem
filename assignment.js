//problem-1: Kilometer To Metter
function kilometerToMeter(kilometer) {
    var metter = 1000;
    kilometer = kilometer * metter;
    if (kilometer <= 0) {
        return ('Zero and Negative value are not allow');
    } else {
        return kilometer;
    }
}

//problem-2: Budget Calculator
function budgetCalculator(watch, mobile, laptop) {
    var perWatchPrice = 50;
    var perMobilePrice = 100;
    var perLaptopPrice = 500;
    var totalPrice = (perWatchPrice*watch)+(perMobilePrice*mobile)+(perLaptopPrice*laptop);
    return totalPrice;  
}
