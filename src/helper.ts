export default class MyHelper {
    static getOffset(currPage: number = 1, listPerPage: number) {
        return ((currPage - 1) * listPerPage);
    }
    static isEmpty(rows: Array<any>) {
        if (!rows || rows.length === 0) {
            return []
        }
        return rows;
    }
    static dbLog(fncName: string, sql: string) {
        console.log(`${fncName} : ${sql}`);
    }

}