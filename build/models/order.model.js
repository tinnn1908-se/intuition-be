"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order = /** @class */ (function () {
    function Order(no, address, quantity, promotion_id, payment_method, subtotal, user_id, fullname, phoneNumber, status, insert_date, modified_date) {
        this.no = no;
        this.address = address;
        this.quantity = quantity;
        this.promotion_id = promotion_id;
        this.payment_method = payment_method;
        this.subtotal = subtotal;
        this.user_id = user_id;
        this.fullname = fullname;
        this.phoneNumber = phoneNumber;
        this.status = status,
            this.insert_date = insert_date,
            this.modified_date = modified_date;
    }
    return Order;
}());
exports.default = Order;
