
import { Component, Input, OnInit } from '@angular/core';
import { GymInfo2, table } from 'src/service';
@Component({
  selector: 'app-thrus',
  templateUrl: './thrus.component.html',
  styleUrls: ['./thrus.component.css']
})
export class ThrusComponent implements OnInit {

  constructor(private service:table) { }

  ngOnInit(): void {

//this.service.gymdata2=[];
this.service.callthrusdayapi().subscribe((data:any)=>{
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
