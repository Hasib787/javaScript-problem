//problem-1: Kilometer To Metter
function kilometerToMeter(kilometer) {
    var meter = 1000;
    meter = meter * kilometer;
    if (kilometer <= 0) {
        return ('Zero and Negative value are not allow');
    } else {
        return meter;
    }
}
//problem-2: Budget Calculator
function budgetCalculator(watch, mobile, laptop) {
    var perWatchPrice = 50;
    var perMobilePrice = 100;
    var perLaptopPrice = 500;
    var totalPrice = (perWatchPrice * watch) + (perMobilePrice * mobile) + (perLaptopPrice * laptop);
    return totalPrice;
}
//problem-3: Hotel Cost
function hotelCost(days) {
    var firstTenDays = 100;
    var secondTenDays = 80;
    var twentyDaysMore = 50;
    if (days <= 0) {
        return ('Zero and Negative value are not allow');
    }
    if (days <= 10) {
        return firstTenDays * days;
    } else if (days > 10 && days <= 20) {
        return ((firstTenDays * 10) + (secondTenDays * days));
    } else if (days > 20) {
        return twentyDaysMore * days;
    }
    var totalCost = firstTenDays + secondTenDays + twentyDaysMore;
    return totalCost;
}
//console.log(hotelCost(12));
