import { Observable } from 'tns-core-modules/data/observable';
import { getViewById } from 'tns-core-modules/ui/core/view';
import { Bottomsheet } from 'nativescript-bottomsheet';

export class HelloWorldModel extends Observable {
  public message: string = "Tap Me!";
  public page: any;

  constructor(page: any) {
    super();
    this.page = page;
  }

  openSheet() {
    const bottomSheet: Bottomsheet = getViewById(this.page, 'bottomSheet');

    console.dir(bottomSheet);
  }

  closeSheet() {
    const bottomSheet: Bottomsheet = getViewById(this.page, 'bottomSheet');

    console.dir(bottomSheet);
  }

}
