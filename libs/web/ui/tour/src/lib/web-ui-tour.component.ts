import { Component, ViewEncapsulation } from '@angular/core'
import { TourService } from './ngx-ui-tour-md-tw-menu'

@Component({
  selector: 'ui-tour',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="dark:bg-gray-800 border dark:border-indigo-700 px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
      <div class="relative">
        <div class="relative px-4 sm:px-6 lg:px-8">
          <div class="text-lg max-w-prose mx-auto">
            <h1>
              <span
                class="
          block
          text-base text-center text-indigo-600
          font-semibold
          tracking-wide
          uppercase
        "
                >Introducing</span
              >
              <span
                tourAnchor="start.tour"
                class="
          mt-2
          block
          text-3xl text-center
          leading-8
          font-extrabold
          tracking-tight
          text-gray-900
          sm:text-4xl
        "
                >JavaScript for Beginners</span
              >
            </h1>
            <p class="mt-8 text-xl text-gray-500 leading-8">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
              aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
              egestas fringilla sapien.
            </p>
          </div>
          <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p tourAnchor="angular-ui-tour">
              Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
              Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
              viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
              risus enim. <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
            </p>

            <button
              type="button"
              (click)="start()"
              class="
        inline-flex
        items-center
        px-4
        py-2
        border border-transparent
        text-sm
        font-medium
        rounded-md
        shadow-sm
        text-white
        bg-indigo-600
        hover:bg-indigo-700
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-indigo-500
      "
            >
              Button text
            </button>
          </div>
        </div>

        <tour-step-template></tour-step-template>
      </div>
    </div>
  `,
})
export class WebUiTourComponent {
  readonly tourSteps: any[] = [
    {
      anchorId: 'start.tour',
      content: 'Welcome to the Ngx-UI-Tour tour!',
      title: 'Welcome',
    },
    {
      anchorId: 'angular-ui-tour',
      content: 'Thanks to angular-ui-tour for the inspiration for the library',
      title: 'angular-ui-tour',
    },
  ]

  constructor(public tourService: TourService) {}

  ngOnInit() {
    this.tourService.initialize(this.tourSteps)
  }

  start() {
    this.tourService.start()
  }
}
