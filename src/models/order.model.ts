export default class Order{
    public no : string;
    public address : string;
    public quantity : number;
    public promotion_id : string;
    public payment_method : number;
    public subtotal : string;
    public user_id : string;
    public fullname : string;
    public phoneNumber : string;
    public status : number;
    public insert_date : string;
    public modified_date : string


  constructor(
    no: string, 
    address: string, 
    quantity: number, 
    promotion_id: string, 
    payment_method: number, 
    subtotal: string, 
    user_id: string, 
    fullname: string,
    phoneNumber : string,
    status: number,
    insert_date : string,
    modified_date : string
) {
    this.no = no
    this.address = address
    this.quantity = quantity
    this.promotion_id = promotion_id
    this.payment_method = payment_method
    this.subtotal = subtotal
    this.user_id = user_id
    this.fullname = fullname
    this.phoneNumber = phoneNumber
    this.status = status,
    this.insert_date = insert_date,
    this.modified_date = modified_date
  }


}