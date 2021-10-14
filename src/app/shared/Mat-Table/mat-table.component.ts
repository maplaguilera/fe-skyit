import {AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {DialogPoupBox} from '../DialogBox/dialogBox.component';
import { Movies} from '../../Models/movie.models';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'mat-table',
  styleUrls: ['mat-table.component.css'],
  templateUrl: 'mat-table.component.html',
})
export class MatTableComponent implements AfterViewInit ,OnChanges {
  @Input() MoviesList :Movies[] =[];
  hover:boolean=false;
  MovieDetail:Movies=new Movies();
  FileteredMovielist:Movies[] =[];
  DistinctDirectors:string[] =[];
  DistinctCertifications:string[]=[];
  CheckBoxs:boolean[]=[];
  HoversRow:boolean[]=[];
  displayedColumns: string[] = ['IsSelected','Title', 'Year', 'Running_Time', 'Director','Certification','Rating'];
  dataSource = new MatTableDataSource<Movies>(this.FileteredMovielist);

  constructor(public dialog: MatDialog) {}
  
  testCheckBox(event:any){
    console.log("event ",event);

  }
  
SetDistinctDirectors(){
  const Directors :string [] = this.MoviesList.map(x => x.director);
  const DistinctDirectorsTemp :string [] = [... new Set(Directors)];
  this.DistinctDirectors = DistinctDirectorsTemp;
}

SetDistinctCertifications(){
  const certifications :string [] = this.MoviesList.map(x => x.certification);
  const DistinctCertificationsTemp :string [] = [... new Set(certifications)];
  this.DistinctCertifications = DistinctCertificationsTemp;
}

SetUpCheckboxes(){
  this.FileteredMovielist.forEach((x,index)=>{
    this.CheckBoxs.push(false);
    this.HoversRow.push(false);
  });
}

SetUpMovies(movies:Movies[]){
  this.MoviesList=movies;
  this.FileteredMovielist=[];
  this.FileteredMovielist.push(new Movies());
  
  movies.forEach(x=>{
    this.FileteredMovielist.push(x);
  });
  this.SetDistinctDirectors();
  this.SetDistinctCertifications();
  this.SetUpCheckboxes();
}


ngOnChanges(changes:SimpleChanges){
  for (const propName in changes){
    if (propName =="MoviesList"){
      console.log("Onchangesmovies List",changes[propName].currentValue);
      this.SetUpMovies(changes[propName].currentValue);
      this.ngAfterViewInit();
    }
  }
}

FiltereByTitle(data:string){
  this.FileteredMovielist.splice(1); // Do not remove the first row
  this.MoviesList.filter(x=> x.title.toLowerCase().indexOf(data.toLowerCase()) > -1 ).forEach(x=>{
    this.FileteredMovielist.push(x);
  });
  this.dataSource = new MatTableDataSource<Movies>(this.FileteredMovielist);
}

FiltereByYear(data:string){
  this.FileteredMovielist.splice(1); // Do not remove the first row
  this.MoviesList.filter(x=> x.year.toString().toLowerCase().indexOf(data.toLowerCase()) > -1 ).forEach(x=>{
    this.FileteredMovielist.push(x);
  });
  this.dataSource = new MatTableDataSource<Movies>(this.FileteredMovielist);
}

FiltereByRunningTime(data:string){
  this.FileteredMovielist.splice(1); // Do not remove the first row
  this.MoviesList.filter(x=> x.running_time.toLowerCase().indexOf(data.toLowerCase()) > -1 ).forEach(x=>{
    this.FileteredMovielist.push(x);
  });
  this.dataSource = new MatTableDataSource<Movies>(this.FileteredMovielist);
}

FiltereByRating(data:string){
  this.FileteredMovielist.splice(1); // Do not remove the first row
  this.MoviesList.filter(x=> x.rating.toString().toLowerCase().indexOf(data.toLowerCase()) > -1 ).forEach(x=>{
    this.FileteredMovielist.push(x);
  });
  this.dataSource = new MatTableDataSource<Movies>(this.FileteredMovielist);
}

FiltereByDirectors(list:string[]){
  if(list.length> 0 && !list.includes("All")){
    this.FileteredMovielist.splice(1); // Do not remove the first row
    this.MoviesList.forEach(x=>{
      list.forEach(d=>{
        if(x.director === d){
          this.FileteredMovielist.push(x);
        }
      });
    });
  }else{
    this.FileteredMovielist.splice(1); // Do not remove the first row
    this.MoviesList.forEach(x=>{
      this.FileteredMovielist.push(x);
    });
  }
  this.dataSource = new MatTableDataSource<Movies>(this.FileteredMovielist);
}

FilterByCertifications(data:string){
  if(data.toUpperCase() =="ALL"){
    data = "";
  }
  this.FileteredMovielist.splice(1); // Do not remove the first row
  this.MoviesList.filter(x=> x.certification.toString().toLowerCase().indexOf(data.toLowerCase()) > -1 ).forEach(x=>{
    this.FileteredMovielist.push(x);
  });
  this.dataSource = new MatTableDataSource<Movies>(this.FileteredMovielist);
}

openDialog(data:Movies,index:number): void {
  this.MovieDetail=data;
  this.CheckBoxs[index]=true;
  const dialogRef = this.dialog.open(DialogPoupBox, {
    width: '550px',
    height:'600px',
    data: {title: this.MovieDetail.title, 
            year: this.MovieDetail.year,
            running_time :this.MovieDetail.running_time,
            director:this.MovieDetail.director,
            certification: this.MovieDetail.certification,
            rating:this.MovieDetail.rating,
            cast : this.MovieDetail.cast,
            genre :this.MovieDetail.genre,
            plot:this.MovieDetail.plot
    
          }
  });
  dialogRef.updatePosition({ 
  right: `20px`});


  dialogRef.afterClosed().subscribe(result => {
  for(var i =0;i<this.CheckBoxs.length;i++){
    this.CheckBoxs[i]=false;
  }

  });
}


  @ViewChild(MatPaginator) paginator: MatPaginator ;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Movies>(this.FileteredMovielist);
    this.dataSource.paginator = this.paginator;
  }
}



