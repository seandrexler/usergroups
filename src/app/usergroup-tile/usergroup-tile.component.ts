import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-usergroup-tile',
  templateUrl: './usergroup-tile.component.html',
  styleUrls: ['./usergroup-tile.component.scss']
})
export class UsergroupTileComponent implements OnInit {
  usergroupName = 'My Awesome Team';
  users: Array<string> = [];

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor() { }

  ngOnInit() {
  }

}
