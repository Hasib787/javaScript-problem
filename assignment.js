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
    if (watch, mobile, laptop < 0) {
        return ('Negative value are not allow');
    }
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
        var totalCost = firstTenDays * days;
    } else if (days > 10 && days <= 20) {
        totalCost = firstTenDays * 10;
        days -= 10;
        totalCost += secondTenDays * days;
    } else {
        totalCost = 10 * 100;
        days -= 10;
        totalCost += 10 * 80;
        days -= 10;
        totalCost += twentyDaysMore * days;
    }
    return totalCost;
}
//problem-4: Mega Friend
function megaFriend(friendName) {
    var nameLength = 0;
    var megaName = '';
    for (var i = 0; i < friendName.length; i++) {
        var element = friendName[i];
        if (element.length > nameLength) {
            nameLength = element.length;
            megaName = element;
        }
    }
    return megaName;
}