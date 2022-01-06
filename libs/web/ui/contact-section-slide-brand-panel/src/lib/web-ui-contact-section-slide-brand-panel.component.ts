import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'ui-contact-section-slide-brand-panel',
  template: `
    <div class="dark:bg-gray-800">
      <div class="max-w-7xl mx-auto py-4 px-2 sm:py-10 sm:px-6 lg:px-2">
        <div class="relative bg-white shadow-xl">
          <h2 class="sr-only">Contact us</h2>

          <div class="grid grid-cols-1 lg:grid-cols-3">
            <!-- Contact information -->
            <div class="relative overflow-hidden py-10 px-6 bg-indigo-700 sm:px-10 xl:p-12">
              <div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                <svg
                  class="absolute inset-0 w-full h-full"
                  width="343"
                  height="388"
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fill-opacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#fff"></stop>
                      <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  class="absolute inset-0 w-full h-full"
                  width="359"
                  height="339"
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fill-opacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#fff"></stop>
                      <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true">
                <svg
                  class="absolute inset-0 w-full h-full"
                  width="160"
                  height="678"
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fill-opacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#fff"></stop>
                      <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 class="text-lg font-medium text-white">Contact information</h3>
              <p class="mt-6 text-base text-indigo-50 max-w-3xl">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor
                lacus arcu.
              </p>
              <dl class="mt-8 space-y-6">
                <dt><span class="sr-only">Phone number</span></dt>
                <dd class="flex text-base text-indigo-50">
                  <!-- Heroicon name: outline/phone -->
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-indigo-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span class="ml-3">+1 (555) 123-4567</span>
                </dd>
                <dt><span class="sr-only">Email</span></dt>
                <dd class="flex text-base text-indigo-50">
                  <!-- Heroicon name: outline/mail -->
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-indigo-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="ml-3">support@workcation.com</span>
                </dd>
              </dl>
              <ul role="list" class="mt-8 flex space-x-12">
                <li>
                  <a class="text-indigo-200 hover:text-indigo-100" href="#">
                    <span class="sr-only">Facebook</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a class="text-indigo-200 hover:text-indigo-100" href="#">
                    <span class="sr-only">GitHub</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a class="text-indigo-200 hover:text-indigo-100" href="#">
                    <span class="sr-only">Twitter</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Contact form -->
            <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12  dark:bg-gray-800">
              <!--Saved PopUp Message Code Start-->
              <div
                *ngIf="alert"
                class=" px-4 py-3 mb-6 rounded relative dark:bg-gray-800 ? bg-green-100"
                [ngClass]="dark ? 'border border-green-400' : 'border border-white'"
                role="alert"
              >
                <strong class="font-bold dark:text-white ? text-green-700">Saved Successfully. </strong>
                <span class="block sm:inline dark:text-white ? text-green-700">Thank for Submitting.</span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    (click)="this.closePopUp()"
                    class="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path
                      d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                    />
                  </svg>
                </span>
              </div>
              <!--Saved PopUp Message Code End-->

              <h3 class="text-lg font-medium dark:text-white">Send us a message</h3>
              <!-- action="#" method="POST" -->
              <form class="mt-6 grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label for="first-name" class="block text-sm font-medium dark:text-white">First name</label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      [(ngModel)]="firstname"
                      class="py-1 px-1 block w-full shadow-sm dark:text-white ? text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-gray-800 ? bg-white"
                    />
                    <span [ngClass]="firstname_class">First Name Required.</span>
                  </div>
                </div>
                <div>
                  <label for="last-name" class="block text-sm font-medium dark:text-white">Last name</label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      [(ngModel)]="lastname"
                      autocomplete="family-name"
                      class="py-1 px-1 block w-full shadow-sm dark:text-white ? text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-gray-800 ? bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium dark:text-white">Email</label>
                  <div class="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      [(ngModel)]="email"
                      class="py-1 px-1 block w-full shadow-sm dark:text-white ? text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-gray-800 ? bg-white"
                    />
                    <span [ngClass]="email_class">Email Required.</span>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between">
                    <label for="phone" class="block text-sm font-medium dark:text-white">Phone</label>
                    <span id="phone-optional" class="text-sm text-gray-500">Optional</span>
                  </div>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      [(ngModel)]="phone"
                      autocomplete="tel"
                      class="py-1 px-1 block w-full shadow-sm dark:text-white ? text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-gray-800 ? bg-white"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="subject" class="block text-sm font-medium dark:text-white">Subject</label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      [(ngModel)]="subject"
                      class="py-1 px-1 block w-full shadow-sm dark:text-white ? text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md dark:bg-gray-800 ? bg-white"
                    />
                    <span [ngClass]="subject_class">Subject must Required.</span>
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="flex justify-between">
                    <label for="message" class="block text-sm font-medium dark:text-white">Message</label>
                    <span id="message-max" class="text-sm text-gray-500">{{ count_string }} / 30 Max. Characters</span>
                  </div>
                  <div class="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows="2"
                      maxlength="30"
                      (input)="countValue(this)"
                      [(ngModel)]="message"
                      class="py-3 px-4 block w-full shadow-sm dark:text-white ? text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md dark:bg-gray-800 ? bg-white"
                      aria-describedby="message-max"
                    ></textarea>
                    <span [ngClass]="message_class">Message must Required.</span>
                  </div>
                </div>
                <div class="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    (click)="popupShow()"
                    class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiContactSectionSlideBrandPanelComponent implements OnInit {
  @Input() Text?: any
  firstname: string = ''
  lastname: string = ''

  alert: boolean

  firstname_class: string = 'hidden'
  count_string: number = 0

  phone: string = ''
  email: string = ''
  email_class: string = 'hidden'

  subject: string = ''
  subject_class: string = 'hidden'

  message: string = ''
  message_class: string = 'hidden'

  ngOnInit() {
    this.Text = 'Testing Data'
    console.log(this.Text)
  }

  popupShow() {
    if (this.firstname.length == 0) {
      this.firstname_class = 'text-red-500'
    } else {
      this.firstname_class = 'hidden'
    }

    if (this.email.length == 0) {
      this.email_class = 'text-red-500'
    } else {
      this.email_class = 'hidden'
    }

    if (this.subject.length == 0) {
      this.subject_class = 'text-red-500'
    } else {
      this.subject_class = 'hidden'
    }

    if (this.message_class.length == 0) {
      this.message_class = 'text-red-500'
    } else {
      this.message_class = 'hidden'
    }

    if (this.firstname.length > 0 && this.email.length > 0 && this.subject.length > 0 && this.message.length > 0) {
      this.alert = true
      this.firstname = ''
      this.lastname = ''
      this.email = ''
      this.phone = ''
      this.subject = ''
      this.message = ''
      this.count_string = 0
    }
  }
  countValue(textValue) {
    this.count_string = this.message.length
    // '#message-max'.text(length)
  }
  closePopUp() {
    this.alert = false
  }
}
