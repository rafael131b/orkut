import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../../interfaces/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

@Input() dados:Profile[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
