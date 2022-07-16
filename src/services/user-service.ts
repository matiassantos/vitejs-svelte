import { BehaviorSubject } from 'rxjs';

export class UserService {
  private thisRef: UserService;

  constructor() {
    if (!this.thisRef) {
      const newService = new UserService();
      this.thisRef = newService;
      return newService;
    } else {
      return this.thisRef;
    }
  }

  public state$ = new BehaviorSubject('Matias');

  public updateState = (change) => this.state$.next(change);
}
