import {createModel, Mapping, Model} from 'src/app/core/models/model';

export interface RawUser {
  first_name: string;
  last_name: string;
  email: string;
}

class UserMapping extends Mapping<RawUser> {
  first_name: string;
  last_name: string;
  email: string;

  get initials() {
    return `${this.first_name.charAt(0).toUpperCase()}${this.last_name.charAt(0).toUpperCase()}`;
  }
}

export interface User extends Model<UserMapping> {}
export const User = createModel<User>(UserMapping);
