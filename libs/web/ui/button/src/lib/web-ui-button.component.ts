import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ui-button',
  template: `
    <ng-container *ngIf="routerLink">
      <a [routerLink]="routerLink" [class]="classes">
        {{ label }}
      </a>
    </ng-container>
    <ng-container *ngIf="!routerLink">
      <button (click)="handleClick($event)" [class]="classes" [disabled]="disabled" [type]="type">{{ label }}</button>
    </ng-container>
  `,
})
export class WebUiButtonComponent {
  @Input() routerLink?: string
  @Input() disabled?: boolean
  @Input() border?: string
  @Input() label: string
  @Input() type = 'button'
  @Input() color: string
  @Output() click = new EventEmitter()
  @Output() handler = new EventEmitter()

  getColor() {
    return `text-${this.color}-300 bg-${this.color}-700 border-${this.color}-600 hover:bg-${this.color}-800  focus:ring-${this.color}-500`
  }

  get classes(): string {
    return `inline-flex items-center px-4 py-2 border-transparent text-white shadow-sm text-sm font-medium  disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 ${this.getColor()} ${
      this.border
    }`
  }

  handleClick($event: MouseEvent) {
    if (this.click) {
      this.click.emit($event)
    }
    if (this.handler) {
      this.handler.emit($event)
    }
  }
}
