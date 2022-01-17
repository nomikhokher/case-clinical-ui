import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-multiple-alert',
  template: `
    <div
      *ngFor="let item of tabsData"
      class="{{ item.bgColor }} rounded-lg py-5 px-6 mb-3 text-base {{
        item.textColor
      }} inline-flex items-center w-full"
      role="alert"
    >
      <ui-icon size="lg" class="h-6 w-6" icon="{{ item.icon }}"></ui-icon>
      {{ item.title }}
    </div>
  `,
})
export class WebUiMultipleAlertComponent {
  @Input() tabsData?: TabsData[]
  ngOnInit() {
    console.log(this.tabsData)
  }
}
interface TabsData {
  id?: number
  icon?: string
  title?: string
  bgColor?: string
  textColor?: string
}
