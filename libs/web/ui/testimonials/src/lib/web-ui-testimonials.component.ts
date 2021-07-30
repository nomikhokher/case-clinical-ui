import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-testimonials',
  template: `
    <ng-contianer *ngFor="let info of data; let i = index">
      <section class="py-12 bg-gray-50 dark:bg-gray-800 overflow-hidden md:py-20 lg:py-24" *ngIf="active == i">
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <svg
            class="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            role="img"
            aria-labelledby="svg-workcation"
          >
            <title id="svg-workcation">Workcation</title>
            <defs>
              <pattern
                id="ad119f34-7694-4c31-947f-5c9d249b21f3"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
          </svg>

          <div class="relative">
            <img
              class="mx-auto h-8"
              src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg"
              alt="Workcation"
            />
            <blockquote class="mt-10">
              <div
                class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900 dark:text-gray-100"
              >
                <p>
                  {{ info.message }}
                </p>
              </div>
              <footer class="mt-8">
                <div class="md:flex md:items-center md:justify-center">
                  <div class="md:flex-shrink-0">
                    <img class="mx-auto h-10 w-10 rounded-full" src="{{ info.img }}" alt="" />
                  </div>
                  <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div class="text-base font-medium text-gray-900 dark:text-gray-100">{{ info.title }}</div>

                    <svg class="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div class="text-base font-medium text-gray-500">{{ info.position }}, Workcation</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </ng-contianer>
  `,
})
export class WebUiTestimonialsComponent {
  @Input() data?: Data[]

  active: number = 0

  ngOnInit() {
    setInterval(() => {
      if (this.data.length - 1 != this.active) {
        this.active++
        this.activeTestimonial(this.active)
      } else {
        this.activeTestimonial(0)
      }
    }, 3000)
  }

  activeTestimonial(act) {
    return (this.active = act)
  }
}

interface Data {
  title: string
  message?: string
  position?: string
  img?: string
}
