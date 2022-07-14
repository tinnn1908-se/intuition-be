export default class Category{
    public no : string;
    public name : string;
    public insertID : string;
    public insertDate : string;
    public modifiedID : string;
    public modifiedDate : string;

    constructor(no : string,name : string,
        insertID : string, insertDate : string,
        modifiedID : string, modifiedDate : string
        ){
        this.no = no;
        this.name = name;
        this.insertDate = insertDate;
        this.insertID = insertID;
        this.modifiedDate = modifiedDate;
        this.modifiedID = modifiedID;
    }

}