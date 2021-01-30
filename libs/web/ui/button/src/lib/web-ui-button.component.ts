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
      <button (click)="click.emit($event)" [class]="classes" [disabled]="disabled" [type]="type">
        {{ label }}
      </button>
    </ng-container>
  `,
})
export class WebUiButtonComponent {
  @Input() routerLink?: string
  @Input() disabled?: boolean
  @Input() label: string
  @Input() type = 'button'
  @Input() color: 'indigo' | 'gray' | 'red' = 'indigo'
  @Output() click = new EventEmitter()

  getColor() {
    const color = (name) =>
      `text-${name}-300 bg-${name}-800 border-${name}-600 hover:bg-${name}-800  focus:ring-${name}-500`
    switch (this.color) {
      case 'indigo':
        return color('indigo')
      case 'red':
        return color('red')
      case 'gray':
      default:
        return color('gray')
    }
  }

  get classes(): string {
    return `inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium  disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 ${this.getColor()}`
  }
}
