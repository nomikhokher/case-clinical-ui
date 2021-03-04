import { Component, Input } from '@angular/core'
import { RelationType } from '@schema-driven/web/core/data-access'

@Component({
  selector: 'entity-relation-icon',
  template: `
    <div [class]="classes" [title]="type">
      {{ label }}
    </div>
  `,
})
export class EntityRelationIconComponent {
  @Input() type: RelationType | string = '?'

  getColor() {
    switch (this.type) {
      case RelationType.ManyToMany:
        return 'bg-yellow-300 text-yellow-700'
      case RelationType.ManyToOne:
        return 'bg-purple-300 text-purple-700'
      case RelationType.OneToMany:
        return 'bg-blue-300 text-blue-700'
      case RelationType.OneToOne:
        return 'bg-pink-300 text-pink-700'
      default:
        return 'bg-gray-300 text-gray-700'
    }
  }

  get label() {
    switch (this.type) {
      case RelationType.ManyToMany:
        return 'MM'
      case RelationType.ManyToOne:
        return 'MO'
      case RelationType.OneToMany:
        return 'OM'
      case RelationType.OneToOne:
        return 'OO'
      default:
        return this.type?.slice(0, 1) || '?'
    }
  }

  get classes() {
    return `h-10 w-10 text-xl rounded flex items-center justify-center ${this.getColor()}`
  }
}
