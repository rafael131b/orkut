import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  informacaoPessoal=[
    {job:"@Rockseat",
    imgJog:["assets/img/building.png","assets/img/pin.png","assets/img/email.png","assets/img/twiiter.png"],
    local:"caieiras",
    email:"gabrielDuarte@gmail.com",
    linkedin:"@duarteEE",
    twitter:"@eusouBatman"
  }
  ]

  organizations=[
    {org:"assets/img/rocketseat.png",name:"rocketseat"},
    {org:"assets/img/rocketseat.png",name:"Omini Theme"},
    {org:"assets/img/rocketseat.png",name:"rocketseat Education"},
    {org:"assets/img/rocketseat.png",name:"starlab"},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
