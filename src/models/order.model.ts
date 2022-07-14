export default class Order{
    public no : string;
    public address : string;
    public quantity : number;
    public promotionID : string;
    public paymentMethod : number;
    public subTotal : string;
    public userID : string;
    public fullname : string;
    public phoneNumber : string;
    public status : number;
    public insertDate : string;
    public modifiedDate : string


  constructor(
    no: string, 
    address: string, 
    quantity: number, 
    promotionID: string, 
    paymentMethod: number, 
    subTotal: string, 
    userID: string, 
    fullname: string,
    phoneNumber : string,
    status: number,
    insertDate : string,
    modifiedDate : string
) {
    this.no = no
    this.address = address
    this.quantity = quantity
    this.promotionID = promotionID
    this.paymentMethod = paymentMethod
    this.subTotal = subTotal
    this.userID = userID
    this.fullname = fullname
    this.phoneNumber = phoneNumber
    this.status = status,
    this.insertDate = insertDate,
    this.modifiedDate = modifiedDate
  }


}