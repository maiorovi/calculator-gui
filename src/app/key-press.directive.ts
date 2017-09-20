import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[keypresshandler]'
})
export class KeyPressDirective {
  @Output('key-pressed') keyPressedEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  @HostListener('window:keydown', ['$event']) onKeyDown(event:KeyboardEvent) {
    this.keyPressedEvent.emit(event)
  }

}
