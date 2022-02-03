import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-collapse',
  template: `
    <div *ngFor="let item of collapse">
      <p class="md:space-x-1 space-y-1 md:space-y-0 mb-4">
        <button
          (click)="item.show = !item.show"
          class="inline-block px-6 py-2.5 bg-{{
            btnColor
          }}-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-{{
            btnColor
          }}-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-700 ease-in-out"
          type="button"
        >
          {{ btnText }}
        </button>
      </p>
      <div *ngIf="item.show" class="block p-6 rounded-lg shadow-lg bg-white transition duration-700 ease-in-out">
        {{ item.description }}
      </div>
    </div>
  `,
})
export class WebUiCollapseComponent {
  @Input() collapse?: Collapse[]
  @Input() btnColor?: string
  @Input() btnText?: string
  ngOnInit(): void {
    console.log(this.collapse)
  }
}
interface Collapse {
  description: string
  show: boolean
  icon?: string
}
