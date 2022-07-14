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
    static getOffSet(currPage: number = 1) {
        return ((currPage - 1) * 5);
    }
    static getLimit(currPage: number = 1) {
        return (currPage * 5)
    }
    static createUserID(): string {
        var dateObj = new Date();
        return dateObj.getTime().toString();
    }

}