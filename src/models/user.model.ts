export default class User {

    public id : string;
    public fullname : string;
    public username : string;
    public password : string;
    public email : string;
    public phoneNumber : string;
    public birthday : string;
    public address : string;
    public role : string;

    constructor(id:string, fullname : string, username : string, 
        password : string, role : string,
        email : string, phoneNumber : string, birthday : string,
        address : string) {
        this.id = id;
        this.fullname = fullname;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.birthday = birthday;
        this.address = address;
        this.role = role;
    }

}