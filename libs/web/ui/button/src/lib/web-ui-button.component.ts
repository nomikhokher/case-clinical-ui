import { Component, EventEmitter, Input, Output } from '@angular/core'

export enum Variant {
  Primary = 'primary',
  Secondary = 'secondary',
  White = 'white',
  Danger = 'danger',
}

export enum Size {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

@Component({
  selector: 'ui-button',
  template: `
    <button (click)="this.handler.emit($event)" [class]="computedClasses" [disabled]="disabled" [type]="type">
      <ui-icon *ngIf="icon" class="-ml-0.5 mr-2 h-4 w-4" [icon]="icon"></ui-icon>
      {{ label }}
    </button>
  `,
})
export class WebUiButtonComponent {
  @Input() icon: string
  @Input() label: string
  @Input() variant: Variant
  @Input() size: Size
  @Input() disabled: boolean
  @Input() type = 'button'

  @Output() handler = new EventEmitter<string>()

  baseClasses = `inline-flex items-center shadow border disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 font-medium`

  get sizeClasses() {
    switch (this.size) {
      case Size.xl:
        return `px-6 py-3 text-base rounded-md `
      case Size.lg:
        return `px-4 py-2 text-base rounded-md `
      case Size.sm:
        return `px-3 py-2 text-sm rounded-md `
      case Size.xs:
        return `px-2.5 py-1.5 text-xs rounded`
      default:
      case Size.md:
        return `px-4 py-2 text-sm rounded-md`
    }
  }

  get variantClasses() {
    switch (this.variant) {
      case Variant.Danger:
        return 'text-white bg-red-600 hover:bg-red-500 focus:ring-red-500'
      case Variant.Secondary:
        return `text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500`
      case Variant.White:
        return `border-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 dark:text-gray-100 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500`
      default:
      case Variant.Primary:
        return 'text-white border-blue-600 bg-blue-600 hover:bg-blue-500 focus:ring-blue-500'
    }
  }

  get computedClasses(): string {
    return `${this.baseClasses} ${this.sizeClasses} ${this.variantClasses}`
  }
}
