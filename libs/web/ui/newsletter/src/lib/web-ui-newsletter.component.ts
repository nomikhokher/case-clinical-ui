import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-newsletter',
  template: `
    <div class="bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div class="py-10 px-6 bg-{{ bgColor }}-700 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
          <div class="lg:w-0 lg:flex-1">
            <h2 class="text-3xl font-extrabold tracking-tight text-white">
              {{ heading }}
            </h2>
            <p class="mt-4 max-w-3xl text-lg text-{{ bgColor }}-100">
              {{ description }}
            </p>
          </div>
          <div class="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
            <form class="sm:flex">
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autocomplete="email"
                required
                class="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-{{
                  bgColor
                }}-700 focus:ring-white rounded-md"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                class="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-{{
                  bgColor
                }}-500 hover:bg-{{
                  bgColor
                }}-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-{{
                  bgColor
                }}-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                {{ buttonText }}
              </button>
            </form>
            <p class="mt-3 text-sm text-{{ bgColor }}-100">
              {{ tagLine }}
              <a href="javascript:void(0)" class="text-white font-medium underline"> Privacy Policy. </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiNewsletterComponent {
  @Input() heading?: string
  @Input() description?: string
  @Input() bgColor?: string
  @Input() buttonText?: string
  @Input() tagLine?: string
}
