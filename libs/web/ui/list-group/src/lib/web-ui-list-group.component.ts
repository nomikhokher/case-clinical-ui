import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-list-group',
  template: `
    <div *ngFor="let item of tabsData" class="flex justify-center">
      <div class="rounded-lg border border-gray-200 w-96">
        <button
          disabled="{{ item.enabled }}"
          aria-current="true"
          type="button"
          class="
        {{ item.textAlign }}
        px-6
        py-2
        {{ item.bgColor }}
        {{ item.borderColor }}
        w-full
        {{ item.rounded }}

        {{ textColor }}
        {{ item.pointer }}
        focus:{{ item.focus }}
        hover:{{ item.hover }}
        "
        >
          {{ item.title }}
        </button>
      </div>
    </div>
  `,
})
export class WebUiListGroupComponent {
  @Input() tabsData?: TabsData[]
  ngOnInit() {
    console.log(this.tabsData)
  }
}

interface TabsData {
  title?: string
  textColor?: string
  textAlign?: string
  borderColor?: string
  rounded?: string
  pointer?: string
  enabled?: boolean
  focus?: string
  hover?: string
  bgColor?: string
}
