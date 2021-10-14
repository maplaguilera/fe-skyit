import {Component,OnInit} from '@angular/core';
import {service} from '../../app/service/fe-main.service';
import {Movies} from '../Models/movie.models';
@Component({
    selector:'fe-main',
    templateUrl:'./main.component.html',
    styleUrls:['./main.component.css']
})

export class FE_Main implements OnInit{
    Movies:Movies[]=[];
    constructor(private service:service){}

    FormatPercentagesRating(item:Movies) :number{
        let result:number=0;
        result =  (item.rating/5)*100;
        return result;
    }

    MoviesFormat(movies :Movies[]){
   for(var i=0 ; i< movies.length ;i++){
       movies[i].rating = this.FormatPercentagesRating(movies[i]);
   }
   this.Movies = movies;

    }

    ngOnInit(){
        this.service.GetMovies().
        subscribe(x=>{ 
            this.MoviesFormat(x);
            //this.Movies = x;
            
        });
    }
}