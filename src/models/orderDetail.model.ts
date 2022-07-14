export default class OrderDetail {
    public orderNo : string;
    public productNo : string;
    public quantity : number;
    public color : string;
    public total : string;


  constructor(
    orderNo: string, 
    productNo: string, 
    quantity: number,
    color : string,
    total: string
) {
    this.orderNo = orderNo
    this.productNo = productNo
    this.quantity = quantity
    this.color = color
    this.total = total
  }

}