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
      <button
        (click)="handleClick($event)"
        [ngClass]="{ 'rounded-full': type == 'circlebtn' }"
        [class]="classes"
        [disabled]="disabled"
        [type]="type"
      >
        <svg
          *ngIf="position == 'left' || type == 'circlebtn'"
          [ngClass]="{ 'mr-2': type == 'button' }"
          class="-ml-0.5 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        {{ label }}
        <svg
          *ngIf="position == 'right'"
          class=" ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      </button>
    </ng-container>
  `,
})
export class WebUiButtonComponent {
  @Input() routerLink?: string
  @Input() disabled?: boolean
  @Input() border?: string
  @Input() label: string
  @Input() type?: string
  @Input() color?: string
  @Input() position: String
  @Input() textTransform: String
  @Output() click = new EventEmitter()
  @Output() handler = new EventEmitter()

  getColor() {
    return `text-${this.color}-300 bg-${this.color}-700 border-${this.color}-600 hover:bg-${this.color}-800  focus:ring-${this.color}-500`
  }

  get classes(): string {
    return this.type == 'button'
      ? `inline-flex items-center px-4 py-2 border-transparent text-white shadow-sm text-sm font-medium  disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 ${this.getColor()} ${
          this.border
        } ${this.textTransform}`
      : `inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${this.getColor()} ${
          this.border
        }`
  }

  handleClick($event: MouseEvent) {
    this.label
      ? alert(this.label + ' button clicked and text is in ' + this.textTransform)
      : alert('Circular Button clicked')

    if (this.click) {
      this.click.emit($event)
    }
    if (this.handler) {
      this.handler.emit($event)
    }
  }
}
