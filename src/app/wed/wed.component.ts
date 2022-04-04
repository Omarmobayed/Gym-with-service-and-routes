import { Component, Input, OnInit } from '@angular/core';
import { GymInfo2, table } from 'src/service';


@Component({
  selector: 'app-wed',
  templateUrl: './wed.component.html',
  styleUrls: ['./wed.component.css']
})
export class WedComponent implements OnInit {

  constructor(private service:table) { }

  ngOnInit(): void {

//this.service.gymdata2=[];
this.service.callwednesdayapi().subscribe((data:any)=>{
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
