"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderDetail = /** @class */ (function () {
    function OrderDetail(orderNo, productNo, quantity, color, total) {
        this.orderNo = orderNo;
        this.productNo = productNo;
        this.quantity = quantity;
        this.color = color;
        this.total = total;
    }
    return OrderDetail;
}());
exports.default = OrderDetail;
