import { Component, Input, OnInit } from '@angular/core';
import { GymInfo2, table } from 'src/service';

import {MonComponent } from '../mon/mon.component';
@Component({
  selector: 'app-tablegenral',
  templateUrl: './tablegenral.component.html',
  styleUrls: ['./tablegenral.component.css']
})
export class TablegenralComponent implements OnInit {
 
  infoarray:GymInfo2[]=[];
 
  constructor(private service:table) {
   }

  ngOnInit(): void {
    this.infoarray=this.service.gymdata2;
  }

}

