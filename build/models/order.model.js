"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order = /** @class */ (function () {
    function Order(no, address, quantity, promotionID, paymentMethod, subTotal, userID, fullname, phoneNumber, status, insertDate, modifiedDate) {
        this.no = no;
        this.address = address;
        this.quantity = quantity;
        this.promotionID = promotionID;
        this.paymentMethod = paymentMethod;
        this.subTotal = subTotal;
        this.userID = userID;
        this.fullname = fullname;
        this.phoneNumber = phoneNumber;
        this.status = status,
            this.insertDate = insertDate,
            this.modifiedDate = modifiedDate;
    }
    return Order;
}());
exports.default = Order;
