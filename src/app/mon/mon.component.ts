import { Component, Input, OnInit } from '@angular/core';
import { GymInfo2, table } from 'src/service';

@Component({
  selector: 'app-mon',
  templateUrl: './mon.component.html',
  styleUrls: ['./mon.component.css']
})
export class MonComponent implements OnInit {


  constructor(private service:table) { }

  ngOnInit(): void {

//this.service.gymdata2=[];
this.service.callmondayapi().subscribe((data:any)=>{
data.forEach((elmt:any) => {

  let s =new GymInfo2();
  s.trainingname=elmt.name;
  s.timing=elmt.time;
  s.coach=elmt.coach;
  this.service.gymdata2.push(s);
})



})
  }
}
 































//     fetch('http://localhost:3000/Monday')
//     .then(response => response.json())
//     .then(json => {
//   json.forEach((elmt:any) => {
  // let s =new GymInfo2();
  // s.trainingname=elmt.name;
  // s.timing=elmt.time;
  // s.coach=elmt.coach;
  // this.gymdata2.push(s);
    
//   });
    
//     })
//   }

// }
// export class GymInfo2{
//   trainingname:string="";
//   timing:string="";
//  coach:string="";
//   }
