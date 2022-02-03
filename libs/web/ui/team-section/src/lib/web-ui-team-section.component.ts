import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-team-section',
  template: `
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="dark:bg-dark">
      <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div class="space-y-5 sm:space-y-4">
            <h2
              class="text-3xl font-extrabold tracking-tight sm:text-4xl text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-white"
            >
              Meet our leadership
            </h2>
            <p class="text-xl text-gray-500 dark:text-gray-400">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse. Vivamus fringilla.
            </p>
          </div>
          <div class="lg:col-span-2">
            <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
              <li *ngFor="let item of contactCard">
                <div class="flex items-center space-x-4 lg:space-x-6">
                  <img class="w-16 h-16 rounded-full lg:w-20 lg:h-20" src="{{ item.image }}" alt="" />
                  <div class="font-medium text-lg leading-6 space-y-1">
                    <h3 class="dark:text-white">{{ item.title }}</h3>
                    <p class="text-indigo-600">{{ item.role }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiTeamSectionComponent {
  @Input() contactCard: Contact
}
interface Contact {
  id: number
  title: string
  role?: string
  image?: string
}
