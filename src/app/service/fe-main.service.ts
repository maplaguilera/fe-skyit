import { Injectable} from "@angular/core";
import { HttpClient,HttpParams} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {map,catchError} from 'rxjs/operators';
import {Router } from '@angular/router'
import {Movies} from '../../app/Models/movie.models';

@Injectable()
export class service{
    readonly BASE_URL = "https://skyit-coding-challenge.herokuapp.com/movies";

    constructor(private http:HttpClient , private router:Router){

    }

    GetMovies() :Observable <Movies[]>{
        return this.http.get(this.BASE_URL).pipe(
            map((response:any) => {

                console.log("response API",response);
                let MoviesObject:Movies[]=[];
                for(const element in response){
                    MoviesObject.push(new Movies(response[element]));
                }
                
                return MoviesObject;
                
            }),
            catchError((err) => {
                console.log(err);
                return throwError(err);
            })

        );
    }

    
}