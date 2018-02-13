import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';

import { ContentView, Property } from 'tns-core-modules/ui/content-view';

export abstract class BottomSheetBase extends ContentView {
  public static dismissEvent: string = "dismiss";
  public static visibleEvent: string = "visible";
  public static peekEvent: string = "peeked";
  public static extendEvent: string = "extended";

}

export interface BottomSheetControls {
  open(peek?: boolean);
  peek?:() => void;
  extend?: () => void;
  close();
  toggle();
}

