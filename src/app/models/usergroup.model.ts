import { User } from './user.model';

export class UserGroup {
  name: string;
  imageUrl: string;
  users: Array<User>;
}
