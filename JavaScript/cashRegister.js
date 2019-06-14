// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.


function checkCashRegister(price, cash, cid) {
    const values = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .1,
        "QUARTER": .25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    }
    
    function addDrawer(cid){
        totalDrawer = 0;
        cid.forEach(element => {
            totalDrawer += element[1];
        });
        totalDrawer = totalDrawer.toFixed(2);
        return totalDrawer;
    }
    
    function checkDrawer(cid, calcedChange){
        var endPoint = 8;
        var change = []
        for(endPoint; endPoint >= 0; endPoint--){
            // console.log(`calcedChange this round: ${calcedChange} \nyou're on ${cid[endPoint][0]}`)
            if (calcedChange < cid[endPoint][1]){
                var quotient = Math.floor(calcedChange/values[cid[endPoint][0]])
                if(quotient > 0){
                var subtract = values[cid[endPoint][0]] * quotient;
                calcedChange -= subtract;
                calcedChange = calcedChange.toFixed(2)
                change.push([cid[endPoint][0], subtract])
                }
            }
            if (calcedChange > cid[endPoint][1]){
                change.push(cid[endPoint])
                calcedChange -= cid[endPoint][1];
                calcedChange = calcedChange.toFixed(2)
            }
        }
        if(calcedChange == 0){
            return {status: "OPEN", change: change}
        }
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    var change = [];
    var status = "";
    var totalDrawer = addDrawer(cid);
    console.log(`totalDrawer is: ${totalDrawer}`);
    var calcedChange = cash-price
    console.log(`change reqd: ${calcedChange}`)
    if(totalDrawer < calcedChange){
        status = "INSUFFICIENT_FUNDS"
        change = [];
        return {status: status, change: change}
    }
    if(totalDrawer == calcedChange){
        status = "CLOSED"
        change = cid
        return {status: status, change: change}
    }
    if(totalDrawer > calcedChange){
        return checkDrawer(cid, calcedChange);
    }
  }
  
// PASSED ALL TESTS
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// console.log('should return an object.');
// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) )
// console.log(`should return {status: "OPEN", change: [["QUARTER", 0.5]]}.`);
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) )
// console.log('should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.');
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// console.log(`should return {status: "INSUFFICIENT_FUNDS", change: []}.`)
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// console.log(`should return {status: "INSUFFICIENT_FUNDS", change: []}.`);
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) );
// console.log(`should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.`)