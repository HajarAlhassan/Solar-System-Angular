import { Component, OnInit } from '@angular/core';
import {Planet} from "../planet"
import {PLANETS} from '../mock-planets'

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
   planets=PLANETS;
   selectedplanet?:Planet;
   selected=false;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(planet:Planet):void{
  this.selectedplanet=planet;
   this.selected=!this.selected;
}
onClick():void{
 
  this.selected=!this.selected;
}

}
