import { Component, Input, OnInit, Output, OnChanges, EventEmitter } from '@angular/core'

@Component({
  selector: 'ui-card-with-detail',
  template: `
    <div class=" max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 mx-auto">
      <div class="flex">
        <div class="flex-none">
          <img
            class="inline-block h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div class="felx-none">
          <h2 class="font-bold text-xl">{{ title }}</h2>
          <h4 class="text-gray-500">{{ subTitle }}</h4>
        </div>
      </div>
      <div class="flex py-3">
        <img
          src="https://cdn.pixabay.com/photo/2021/12/19/12/27/road-6881040_960_720.jpg"
          alt="Photo of sample user"
          class=" h-60 w-screen"
        />
      </div>
      <div>
        <p class="font-sans font-thin">
          {{ description }}
        </p>
      </div>

      <button
        *ngFor="let button of buttons; i as index"
        type="button"
        [ngClass]="i == 0 ? '' : 'ml-2'"
        class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-{{
          button.fontColor
        }}-200 bg-{{ button.color }}-500 hover:bg-{{ button.hoverColor }}-600 dark:text-{{
          button.fontColor
        }}-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {{ button.text }}
      </button>
    </div>
  `,
})
export class WebUiCardWithDetailComponent implements OnInit {
  @Input() title?: any
  @Input() subTitle?: any
  @Input() description?: any
  @Input() buttons?: Buttons

  ngOnInit() {
    console.log(this.title)
  }
}

interface Buttons {
  text: string
  color: string
  fontColor?: string
  icon?: string
  hoverColor?: string
}
