import { Component, ElementRef, Input } from '@angular/core'

@Component({
  selector: 'ui-faq-section',
  template: `
    <div class="bg-{{ background ? background : 'gray' }}-{{ background == 'gray' ? 100 : 200 }} dark:bg-gray-800">
      <div
        class=""
        [ngClass]="
          faqStyle == 'sideByside'
            ? 'max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8'
            : 'max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8'
        "
      >
        <div class="" [ngClass]="faqStyle == 'sideByside' ? '' : 'max-w-3xl mx-auto divide-y-2 divide-gray-200'">
          <div class="" [ngClass]="faqStyle == 'sideByside' ? '' : 'max-w-2xl lg:mx-auto text-center'">
            <h2
              *ngIf="title"
              class="text-xl font-bold sm:font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl"
            >
              {{ title }}
            </h2>
            <p *ngIf="description" class="mt-4 text-gray-500 dark:text-gray-400">{{ description }}</p>
          </div>
          <div class="mt-6 space-y-6 divide-y divide-gray-200" *ngIf="faqStyle == 'hidden' || faqStyle == 'show'">
            <dl *ngFor="let item of content; let i = index">
              <div class="pt-6">
                <dt class="text-lg">
                  <!-- Expand/collapse question button -->
                  <button
                    (click)="isActive(i)"
                    type="button"
                    class="focus:outline-none text-left w-full flex justify-between items-start text-gray-400"
                    aria-controls="faq-0"
                    aria-expanded="false"
                  >
                    <span class="font-medium text-gray-900 dark:text-gray-100">
                      {{ item.question }}
                    </span>
                    <span class="ml-6 h-7 flex items-center" *ngIf="faqStyle == 'hidden'">
                      <svg
                        class=" h-6 w-6 transform icon_{{ i }}"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd class="mt-2 pr-12 class_{{ i }}" [ngClass]="{ hidden: faqStyle == 'hidden' }" id="faq-0">
                  <p class="text-base text-gray-500 dark:text-gray-400">
                    {{ item.answer }}
                  </p>
                </dd>
              </div>
            </dl>
          </div>

          <div class="mt-8" *ngIf="faqStyle == 'sideByside'">
            <dl class="divide-y divide-gray-200" *ngFor="let item of content; let i = index">
              <div class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                <dt class="text-base font-medium text-gray-900 dark:text-gray-100 md:col-span-5">
                  {{ item.question }}
                </dt>
                <dd class="mt-2 md:mt-0 md:col-span-7">
                  <p class="text-base text-gray-500">
                    {{ item.answer }}
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiFaqSectionComponent {
  @Input() title?: string
  @Input() description?: string
  @Input() content?: Content[]
  @Input() faqStyle: string
  @Input() background?: string

  constructor(public elm: ElementRef) {}

  isActive(value: any): void {
    if (
      this.elm.nativeElement.querySelector('.class_' + value).classList.contains('hidden') &&
      this.faqStyle == 'hidden'
    ) {
      this.elm.nativeElement.querySelector('.class_' + value).classList.remove('hidden')
      this.elm.nativeElement.querySelector('.icon_' + value).classList.add('rotate-180')
    } else if (
      !this.elm.nativeElement.querySelector('.class_' + value).classList.contains('hidden') &&
      this.faqStyle == 'hidden'
    ) {
      this.elm.nativeElement.querySelector('.class_' + value).classList.add('hidden')
      this.elm.nativeElement.querySelector('.icon_' + value).classList.remove('rotate-180')
    }
  }
}

interface Content {
  question?: string
  answer?: string
}
