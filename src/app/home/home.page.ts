import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public products = [
    {
      name:"Coca Cola 600ml",
      price:20,
      type: "Abarrotes"
    },
    {
      name:"Jabon Zote",
      price:30,
      type: "Limpieza"
    },
    {
      name:"Croquetes 50kg",
      price:400,
      type: "Mascotas"
    },
    {
      name:"Zucaritas 500g",
      price:100,
      type: "Abarrotes"
    }
];
  constructor() {}
  getColor(type: String) : string{
    let color = "";

    switch(type){
      case "Abarrotes":
        color = "primary";
        break;
      case "Limpieza":
        color = "success";
        break;
      case "Mascotas":
        color = "warning";
        break;  
      default:
        break;
    }
    return color;
  }
}
