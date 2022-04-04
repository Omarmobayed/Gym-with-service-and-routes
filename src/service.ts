import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class table{

 gymdata2:GymInfo2[]=[];
    
    constructor(private apiCaller:HttpClient){

    }

callmondayapi(){
    this.gymdata2=[];
return this.apiCaller.get("https://angular-gym-api.herokuapp.com/Monday");
}
calltuesdayapi(){
    this.gymdata2=[];
    return this.apiCaller.get("https://angular-gym-api.herokuapp.com/tuesday");
    }
callwednesdayapi(){
        this.gymdata2=[];
        return this.apiCaller.get("https://angular-gym-api.herokuapp.com/Wednesday");
        }
callthrusdayapi(){
            this.gymdata2=[];
            return this.apiCaller.get("https://angular-gym-api.herokuapp.com/Thrusday");
            }
callfridayapi(){
                this.gymdata2=[];
                return this.apiCaller.get("https://angular-gym-api.herokuapp.com/Friday");
                }
                        

}


export class GymInfo2{
    trainingname:string="";
    timing:string="";
   coach:string="";
    }