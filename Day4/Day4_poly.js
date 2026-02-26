class Payment {

    pay(amount) {
        console.log("Processing payment");
    }
}

class CreditCardPayment extends Payment {

    pay(amount) {
        console.log("Paid ₹" + amount + " using Credit Card");
    }
}

class UPIPayment extends Payment {

    pay(amount) {
        console.log("Paid ₹" + amount + " using UPI");
    }
}

class CashPayment extends Payment {

    pay(amount) {
        console.log("Paid ₹" + amount + " using Cash");
    }
}


let credit = new CreditCardPayment();
let upi = new UPIPayment();
let cash = new CashPayment();


credit.pay(500);
upi.pay(500);
cash.pay(500);