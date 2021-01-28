import { Component, Input } from '@angular/core'
import { DataType, Field } from '@schema-driven/web/core/data-access'

@Component({
  selector: 'entity-field-icon',
  template: `
    <div [class]="classes" [title]="field?.dataType">
      {{ label }}
    </div>
  `,
})
export class EntityFieldIconComponent {
  @Input() field: Field

  getColor() {
    switch (this.field.dataType) {
      case DataType.Boolean:
        return 'bg-yellow-300 text-yellow-700'
      case DataType.DateTime:
        return 'bg-purple-300 text-purple-700'
      case DataType.Enumeration:
        return 'bg-blue-300 text-blue-700'
      case DataType.Float:
        return 'bg-pink-300 text-pink-700'
      case DataType.String:
        return 'bg-green-300 text-green-700'
      default:
        return 'bg-gray-300 text-gray-700'
    }
  }

  get classes() {
    return `h-10 w-10 text-xl rounded flex items-center justify-center ${this.getColor()}`
  }
  get label() {
    return this.field?.dataType?.slice(0, 1) || '?'
  }
}
