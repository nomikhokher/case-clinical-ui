import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-tag-textarea',
  template: `
    <div class="dark:bg-gray-800 border dark:border-gray-300 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div>
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
            class="text-sm font-medium bg-{{ color }}-100 py-1 px-2 rounded-full p-2 text-{{
              color
            }}-500 align-middle m-2"
            *ngFor="let tag of tags"
            >{{ tag }}</span
          >
        </div>
      </div>
    </div>
  `,
})
export class WebUiTagTextareaComponent {
  @Input() color?: string
  tags?: []

  onKeyUp(e) {
    this.createTags(e.target.value)

    if (e.key === 'Enter') {
      setTimeout(() => {
        e.target.value = ''
      }, 10)
    }
  }

  createTags(input) {
    this.tags = input
      .split(',')
      .filter((tag) => tag.trim() !== '')
      .map((tag) => tag.trim())
  }
}