import { Component, Input, OnDestroy } from '@angular/core'
import { Subscription, timer } from 'rxjs'

@Component({
  selector: 'ui-tag-textarea',
  template: `
    <h3 class="dark:text-gray-100 text-xl font-bold">Enter all of the choices divided by a comma (',').</h3>
    <h3 class="dark:text-gray-100 font-bold text-center w-2/6">Press enter when you're done</h3>
    <br />
    <textarea
      class="w-full px-3 py-2 ring-0 text-gray-700 border rounded-lg focus: focus:outline-none"
      rows="4"
      (keyup)="onKeyUp($event)"
      #textarea
    ></textarea>
    <div class="flex flex-wrap">
      <span
        class="text-sm font-medium bg-{{ color }}-100 py-1 px-2 rounded-full p-2 text-{{ color }}-500 align-middle m-2"
        *ngFor="let tag of tags"
        >{{ tag }}</span
      >
    </div>
  `,
})
export class WebUiTagTextareaComponent implements OnDestroy {
  @Input() color?: string
  tags?: []
  subs!: Subscription

  onKeyUp(e) {
    this.createTags(e.target.value)

    if (e.key === 'Enter') {
      this.subs = timer(10).subscribe(() => (e.target.value = ''))
    }
  }

  createTags(input) {
    this.tags = input
      .split(',')
      .filter((tag) => tag.trim() !== '')
      .map((tag) => tag.trim())
  }
  ngOnDestroy(): void {
    this.subs!?.unsubscribe()
  }
}
