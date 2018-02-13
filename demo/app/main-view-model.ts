import { Observable } from 'tns-core-modules/data/observable';
import { Bottomsheet } from 'nativescript-bottomsheet';

export class HelloWorldModel extends Observable {
  public message: string;
  private bottomsheet: Bottomsheet;

  constructor() {
    super();

    this.bottomsheet = new Bottomsheet();
    this.message = this.bottomsheet.message;
  }
}
