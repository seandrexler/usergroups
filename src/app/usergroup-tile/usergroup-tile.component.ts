import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-usergroup-tile',
  templateUrl: './usergroup-tile.component.html',
  styleUrls: ['./usergroup-tile.component.scss']
})
export class UsergroupTileComponent implements OnInit {
  isOpen = false;
  userGroupName = 'My Team';
  myControl = new FormControl();
  allUsers = [
    'Al Jenkins',
    'Freddie From',
    'Ethan Jones',
    'Gina Hurley',
    'Kevin Armstrong',
    'Bobbie Schroeder',
    'Anne Batdorf',
    'Ford Wright',
    'John Smith',
    'Sam Wellington',
    'Jane Doe',
    'Fred Rogers',
    'John Stanley',
    'Samuel Wellington',
    'Janet Doe',
    'Fredrick Rogers',
    'Jonah Smith',
    'Sam Well',
    'Joyce Done',
    'Fredda Robbert',
    'Steve Blitz',
    'Forrest Tracker',
    'Mercedes Liberty',
    'Roger Zapp',
    'George Ronalds',
    'Patty Snicker',
    'Lake Johnson',
    'Brian Davis'
  ];
  groupUsers = [
    'John Smith',
    'Sam Wellington',
    'Jane Doe',
    'Fred Rogers',
    'John Stanley',
    'Samuel Wellington',
    'Janet Doe',
    'Fredrick Rogers',
    'Jonah Smith',
    'Sam Well',
    'Joyce Done',
    'Fredda Robbert',
    'Steve Blitz',
    'Forrest Tracker',
    'Mercedes Liberty',
    'Roger Zapp',
    'George Ronalds',
    'Patty Snicker',
    'Lake Johnson',
    'Brian Davis'
  ];
  filteredUsers: Observable<string[]>;

  constructor() {}

  ngOnInit() {
    this.groupUsers.sort();
    this.setupAddUser();
  }

  onClickAdd(event: Event): void {
    const user = this.myControl.value;
    this.setupAddUser();
    this.groupUsers.push(user);
    this.groupUsers.sort();
  }

  onClickOpen(): void {
    this.isOpen = !this.isOpen;
  }

  onClickDeleteUserGroup(): void {
    // TODO: pass in usergroup id and delete this group
  }

  onClickRemoveUser(username: string): void {
    this.groupUsers = this.groupUsers.filter(element => element !== username);
  }

  private setupAddUser(): void {
    this.myControl.reset();
    this.filteredUsers = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    return this.allUsers.filter(
      user => user.toLowerCase().includes(value.toLowerCase()) && !this.groupUsers.includes(user)
    );
  }
}
