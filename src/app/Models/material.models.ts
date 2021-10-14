export class material{
    value:boolean=false;
    description:string="";
    constructor(data?:any){
        this.value = data ? data.value :false;
        this.description = data? data.description : "";
    }
}