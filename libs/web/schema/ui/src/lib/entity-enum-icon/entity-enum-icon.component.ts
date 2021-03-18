import { Component } from '@angular/core'

@Component({
  selector: 'entity-enum-icon',
  template: `
    <div [class]="classes" [title]="'Enum'">
      {{ label }}
    </div>
  `,
})
export class EntityEnumIconComponent {
  getColor() {
    return 'bg-gray-300 text-gray-700'
  }

  get label() {
    return 'E'
  }

  get classes() {
    return `h-10 w-10 text-xl rounded flex items-center justify-center ${this.getColor()}`
  }
}
