import { Component, Input } from '@angular/core'
import { DataType, FieldType } from '@schema-driven/web/core/data-access'

@Component({
  selector: 'entity-field-icon',
  template: `
    <div [class]="classes" [title]="field">
      {{ label }}
    </div>
  `,
})
export class EntityFieldIconComponent {
  @Input() data: DataType
  @Input() field: FieldType

  getColor() {
    switch (this.data) {
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

  get label() {
    switch (this.field) {
      case FieldType.Boolean:
        return 'BO'
      case FieldType.DateTime:
        return 'DT'
      case FieldType.SingleLineOfText:
        return 'SL'
      case FieldType.MultiLineText:
        return 'ML'
      case FieldType.Float:
        return 'FT'
      default:
        return this.field?.slice(0, 1) || '?'
    }
  }

  get classes() {
    return `h-10 w-10 text-xl rounded flex items-center justify-center ${this.getColor()}`
  }
}

//
// { data: DataType.String, field: FieldType.SingleLineOfText },
// { data: DataType.String, field: FieldType.MultiLineText },
// { data: DataType.String, field: FieldType.Markdown },
// { data: DataType.String, field: FieldType.Slug },
// { data: DataType.Text, field: FieldType.RichText },
// { data: DataType.Integer, field: FieldType.Number },
// { data: DataType.Float, field: FieldType.Float },
// { data: DataType.Boolean, field: FieldType.Boolean },
// // We have no DataType.Date
// { data: DataType.DateTime, field: FieldType.DateTime },
// // We have no DataType.Json
// { data: DataType.Enumeration, field: FieldType.Dropdown },
