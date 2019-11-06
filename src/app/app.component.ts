import { Component } from '@angular/core';
import { UserGroup } from './models/usergroup.model';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'usergroup-app';
  groups = [];

  constructor() {
    const groupNames = [
      'Group 0',
      'Group 1',
      'Group 2',
      'Group 3',
      'Group 4',
      'Group 5',
      'Group 6',
      'Group 7',
      'Group 8',
      'Group 9'
    ];

    const groupUsers: Array<User> = [
      { id: 1, firstName: 'Sam', lastName: 'Ford' },
      { id: 2, firstName: 'Steve', lastName: 'Sellers' },
      { id: 3, firstName: 'John', lastName: 'Almond' },
      { id: 4, firstName: 'Sue', lastName: 'Creek' },
      { id: 5, firstName: 'Megan', lastName: 'Short' },
      { id: 6, firstName: 'Thomas', lastName: 'Martin' },
      { id: 7, firstName: 'Zach', lastName: 'Striker' },
      { id: 8, firstName: 'Rick', lastName: 'Cross' },
      { id: 9, firstName: 'Jane', lastName: 'Little' },
      { id: 10, firstName: 'Anne', lastName: 'Ocean' },
      { id: 11, firstName: 'Frank', lastName: 'Richards' },
      { id: 12, firstName: 'James', lastName: 'Smith' },
      { id: 13, firstName: 'Tom', lastName: 'Fritz' },
      { id: 14, firstName: 'Fran', lastName: 'Samson' },
      { id: 15, firstName: 'Will', lastName: 'Jones' },
      { id: 16, firstName: 'Robert', lastName: 'Williamson' },
      { id: 17, firstName: 'Jennifer', lastName: 'McMasters' },
      { id: 18, firstName: 'Mary', lastName: 'Cedar' },
      { id: 19, firstName: 'Carole', lastName: 'Shivers' },
      { id: 20, firstName: 'Geoff', lastName: 'Johnson' }
    ];

    for (let groupName of groupNames) {
      const group: UserGroup = {
        name: groupName,
        imageUrl: './assets/team-pngrepo-com.png',
        users: groupUsers
      };
      this.groups.push(group);
    }
  }
}
