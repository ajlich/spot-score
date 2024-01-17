import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  offers=[{
    id:1,
    name:'Noma, Denmark',
    img:'assets/noma.jpg',
    rating:'stars',
    type:'restaurant'
  },
  { 
     id:2,
    name:'Osteria Francescana, Italia',
    img:'assets/osteria.jpg',
    rating:'stars',
    type:'restaurant'
  },
    {  
      id:3,
      name:'Mirazur, French',
      img:'assets/mirazur.jpg',
      rating:'stars',
      type:'restaurant'
    },
    {  
      id:4,
      name:'Four Seasons Firenze',
      img:'assets/hotel1.jpg',
      rating:'stars',
      type:'hotel'
    },
    {  
      id:5,
      name:'Soneva Fushi',
      img:'assets/hotel2.jpg',
      rating:'stars',
      type:'hotel'
    },
    {  
      id:6,
      name:'Raffles Singapore',
      img:'assets/hotel3.jpg',
      rating:'stars',
      type:'hotel'
    },
    {  
      id:7,
      name:'Don Quijote',
      img:'assets/don.jpg',
      rating:'stars',
      type:'book'
    },
    {  
      id:8,
      name:'The Lord of the Rings',
      img:'assets/rings.jpg',
      rating:'stars',
      type:'book'
    },
    {  
      id:9,
      name:'The Great Gatsby',
      img:'assets/gatsby.jpg',
      rating:'stars',
      type:'book'
    },
    {  
      id:10,
      name:'Avatar',
      img:'assets/avatar.jpg',
      rating:'stars',
      type:'movie'
    },
    {  
      id:11,
      name:'Titanic',
      img:'assets/titanic.jpg',
      rating:'stars',
      type:'movie'
    },
    {  
      id:12,
      name:'Captain America: Civil War',
      img:'assets/america.jpg',
      rating:'stars',
      type:'movie'
    }

]

ponudePodaci:any;
filterPonude:any;
filterNaziv: any;
selectedOption:string="Best";

selectedFilterOption:string='movie';


}



