export interface IFilter {
    cates : Array<string>,
    colors : Array<string>,
    sizes : Array<string>,
    price : {
        min : number,
        max : number,
    }
}