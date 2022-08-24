import { Component, Input, OnInit } from '@angular/core';
import { Profile, IOrganization } from '../../../interfaces/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

@Input() dados:Profile[]=[]
@Input() org:IOrganization[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
