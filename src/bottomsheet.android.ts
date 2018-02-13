import { BottomSheetControls, BottomSheetBase } from './bottomsheet.common';

import { android } from 'tns-core-modules/application';

declare const com: any;
// com.flipboard.bottomsheet.BottomSheetLayout;

let sheetDismissedListener: any;
let sheetStateChangedListener: any;

export function registerSheetDismissedListener() {
    if ( sheetDismissedListener ) {
        return;
    }

    @Interfaces([ com.flipboard.bottomsheet.OnSheetDismissedListener ])
    class SheetDismissedListener extends java.lang.Object {
        public owner: Bottomsheet;

        constructor() {
            super();

            return global.__native(this);
        }

        public onDismissed(v: android.view.View): void {
            const owner = (v as any).owner;
            if (owner && this.owner) {
                this.owner._onDismissed();
            }
        }
    }

    sheetDismissedListener = new SheetDismissedListener();
}

export function registerSheetStateChangedListner() {
    if ( sheetStateChangedListener ) {
        return;
    }

    @Interfaces([ com.flipboard.bottomsheet.BottomSheetLayout.OnSheetStateChangeListener ])
    class SheetStateChangeListener extends java.lang.Object {
        public owner: Bottomsheet;

        constructor() {
            super();

            return global.__native(this);
        }


    }
}

export class Bottomsheet extends BottomSheetBase implements BottomSheetControls {

    // nativeView: com.flipboard.bottomsheet.BottomSheetLayout;

    createNativeView() {

        registerSheetDismissedListener();

        const bottomSheet = new com.flipboard.bottomsheet.BottomSheetLayout(this._context);
        return bottomSheet;
    }

    initNativeView() {
        (<any>this.nativeView).owner = this;

        this.nativeView.addOnSheetDismissedListener(sheetDismissedListener);
        super.initNativeView();
    }

    disposeNativeView() {
        (<any>this.nativeView).owner = null;

        this.nativeView.removeOnSheetDismissedListener(sheetDismissedListener);

        super.disposeNativeView();
    }

    // #region 
    
    open(expand?: boolean) {
        if ( expand ) {
            return this.nativeView.expandSheet();
        }

        return this.nativeView.peekSheet();
    }

    close() {
        return this.nativeView.dismissSheet();
    }

    toggle() {
        return this.nativeView.isSheetShowing() ? this.close() : this.open();
    }
    // #region

    get _context() {
        return android.context;
    }

    get _activity() {
        return android.foregroundActivity || android.startActivity;
    }

    _onPeek() {
        console.log('Peeked');
        this.notify({
            eventName: BottomSheetBase.peekEvent,
            object: this
        });
    }

    _onExtended() {
        console.log('extended');
        this.notify({
            eventName: BottomSheetBase.extendEvent,
            object: this
        });
    }

    _onDismissed() {
        console.log('Dismissed');
        this.notify({
            eventName: BottomSheetBase.dismissEvent,
            object: this
        });
    }

}
