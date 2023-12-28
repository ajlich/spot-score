import { Component } from '@angular/core';

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
    }
]
selectedOption:string="Best";
}
