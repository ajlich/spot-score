import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
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
}
