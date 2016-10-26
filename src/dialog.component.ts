import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'selector',
  templateUrl: 'feature.component.html'
})
export class DialogComponent implements OnInit {
  constructor(private el: ElementRef) { }

  @Input() modal: boolean = true;
  @Input() style: string = 'native';

  @Output() onOpen: EventEmitter<void> = new EventEmitter<void>();
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
  @Output() onDismiss: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() { }
}