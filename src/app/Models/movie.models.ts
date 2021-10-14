export class Movies{
    title:string="";
    year:number=0;
    running_time:string="";
    director:string="";
    certification:string="";
    rating:number=0;
    cast :string[]=[]
    genre :string[]=[]
    plot:string="";
    
    constructor(data?:any){
        this.title =  data? data.title : "";
        this.year = data? data.releaseDate as number : 0 ;
        this.running_time = data? data.length :"";
        this.director = data? data.director : "";
        this.certification = data? data.certification : "";
        this.rating = data? data.rating :  0 ;
        this.cast = data? data.cast : [];
        this.genre = data? data.genre :[];
        this.plot = data? data.plot : "";
    }

}