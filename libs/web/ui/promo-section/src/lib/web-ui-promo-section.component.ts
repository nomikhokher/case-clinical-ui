import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-promo-section',
  template: `
    <div class="bg-white dark:bg-gray-800 relative overflow-hidden">
      <div aria-hidden="true" class="absolute inset-0">
        <div class="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8">
          <img src="{{ backgroundImg }}" alt="" class="w-full h-full object-center object-cover" />
        </div>
        <div class="absolute inset-0 bg-white dark:bg-gray-800 bg-opacity-75"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-800 dark:via-gray-800 via-white"></div>
      </div>

      <!-- Callout -->
      <section
        aria-labelledby="sale-heading"
        class="relative max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8"
      >
        <div class="max-w-2xl mx-auto lg:max-w-none">
          <h2
            id="sale-heading"
            class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl"
          >
            {{ heading }}
          </h2>
          <p class="mt-4 max-w-xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            {{ description }}
          </p>
          <a
            href="#"
            class="mt-6 inline-block w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto"
            >{{ btnText }}</a
          >
        </div>
      </section>

      <!-- Testimonials -->
      <section
        aria-labelledby="testimonial-heading"
        class="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8"
      >
        <div class="max-w-2xl mx-auto lg:max-w-none">
          <h2 id="testimonial-heading" class="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            {{ commentHeading }}
          </h2>

          <div class="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <blockquote class="sm:flex lg:block" *ngFor="let item of comments">
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="flex-shrink-0 text-gray-300"
              >
                <path
                  d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                  fill="currentColor"
                />
              </svg>
              <div class="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                <p class="text-lg text-gray-600 dark:text-gray-400">
                  {{ item.text }}
                </p>
                <cite class="mt-4 block font-semibold not-italic text-gray-900 dark:text-gray-100">
                  {{ item.name }}, {{ item.location }}
                </cite>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class WebUiPromoSectionComponent {
  @Input() heading?: String
  @Input() description?: String
  @Input() btnText?: String
  @Input() backgroundImg?: String
  @Input() commentHeading?: String
  @Input() comments?: Comment[]
}

interface Comment {
  userId?: number
  text?: string
  name?: string
  location?: string
}
