import { Component, Input, OnInit } from '@angular/core';
import { GymInfo2, table } from 'src/service';

@Component({
  selector: 'app-tues',
  templateUrl: './tues.component.html',
  styleUrls: ['./tues.component.css']
})
export class TuesComponent implements OnInit {
  constructor(private service:table) { }

  ngOnInit(): void {

//this.service.gymdata2=[];
this.service.calltuesdayapi().subscribe((data:any)=>{
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
