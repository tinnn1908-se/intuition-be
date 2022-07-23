export default class MyHelper {

    static isEmpty(rows: Array<any>) {
        if (!rows || rows.length === 0) {
            return []
        }
        return rows;
    }
    static dbLog(fncName: string, sql: string) {
        console.log(`${fncName} : ${sql}`);
    }
    static errLog(fncName: string, err: any) {
        console.log(`${fncName} : ${err}`)
    }
    // qpo : quantity loading per one
    static getOffSet(currPage: number = 1, qlpo: number) {
        return ((currPage - 1) * qlpo);
    }
    static getLimit(currPage: number = 1, qlpo: number) {
        return (currPage * qlpo)
    }
    static createUserID(): string {
        var dateObj = new Date();
        return dateObj.getTime().toString();
    }
    static getCurrentDateTime() {
        var dateObj = new Date();
        var second = dateObj.getSeconds();
        var minute = dateObj.getMinutes();
        var hour = dateObj.getHours();
        var month = dateObj.getMonth() + 1; //months from 1-12
        var day = dateObj.getDate();
        var year = dateObj.getFullYear();
        var returnValue = `${day}/${month}/${year} ${hour}:${minute}:${second}`;
        return returnValue;
    }

}