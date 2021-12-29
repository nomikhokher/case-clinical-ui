import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms'
@Component({
  selector: 'ui-contact-sections',
  template: `
    <!-- <span class="dark:text-white"> -->
    <div class="relative bg-white">
      <div class="absolute inset-0">
        <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
      </div>
      <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div class="bg-gray-200 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-12 xl:pr-12">
          <div class="max-w-lg mx-auto">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
            <p class="mt-3 text-lg leading-6 text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
              arcu.
            </p>
            <dl class="mt-8 text-base text-gray-500">
              <div>
                <dt class="sr-only">Postal address</dt>
                <dd>
                  <p>742 Evergreen Terrace</p>
                  <p>Springfield, OR 12345</p>
                </dd>
              </div>
              <div class="mt-6">
                <dt class="sr-only">Phone number</dt>
                <dd class="flex">
                  <!-- Heroicon name: outline/phone -->
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-gray-400"
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
                  <span class="ml-3"> +1 (555) 123-4567 </span>
                </dd>
              </div>
              <div class="mt-3">
                <dt class="sr-only">Email</dt>
                <dd class="flex">
                  <!-- Heroicon name: outline/mail -->
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-gray-400"
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
                  <span class="ml-3"> support@example.com </span>
                </dd>
              </div>
            </dl>
            <p class="mt-6 text-base text-gray-500">
              Looking for careers?
              <a href="#" class="font-medium text-gray-700 underline">View all job openings</a>.
            </p>
          </div>
        </div>

        <div class="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-10 lg:px-8 xl:pl-12">
          <div
            *ngIf="alert"
            class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-6 rounded relative"
            role="alert"
          >
            <strong class="font-bold">Saved Successfully. </strong>
            <span class="block sm:inline">Thank for Submitting.</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                (click)="this.closeAlert()"
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

          <div class="max-w-lg mx-auto lg:max-w-none">
            <form #employeeForm="ngForm" class="grid grid-cols-1 gap-y-6" name="form">
              <div>
                <label for="full-name" class="sr-only">Full name</label>
                <input
                  type="text"
                  name="full - name"
                  id="full-name"
                  [(ngModel)]="first_name"
                  class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label for="email" class="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  [(ngModel)]="email"
                  autocomplete="off"
                  class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Email"
                />
                <span [ngClass]="email_class">Email Required</span>
              </div>
              <div class="form-group" [class.has-error]="phonecontrol.invalid && phonecontrol.touched">
                <label for="phone" class="sr-only control-label">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  #phonecontrol="ngModel"
                  [(ngModel)]="phone"
                  aria-invalid="true"
                  autocomplete="off"
                  class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="0300-1234567"
                />
                <span [ngClass]="phone_class">Phone Required</span>
                <!-- //<small>Format: 0300-1234567</small> -->
              </div>
              <div>
                <label ngfor="message" class="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  [(ngModel)]="message"
                  rows="4"
                  class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  placeholder="Message"
                ></textarea>
              </div>
              <div>
                <button
                  (click)="onAlert()"
                  onclick="
                  document.getElementById('full-name').value='',
                  document.getElementById('email').value='',
                  document.getElementById('phone').value='',
                  document.getElementById('message').value=''"
                  class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- </span> -->
  `,
})
export class WebUiContactSectionsComponent implements OnInit {
  first_name: string
  message: string
  alert: boolean
  email: string = ''
  email_class: string = 'hidden'
  phone: any = ''
  phone_class: string = 'hidden'
  @Input() Text?: any
  @Output() save: EventEmitter<boolean> = new EventEmitter()

  ngOnInit() {
    this.Text = 'Testing Data'
    this.alert = false
  }
  closeAlert() {
    this.alert = false
    console.log(this.alert)
  }
  onAlert() {
    if (this.phone.length > 0 && this.email.length > 0) {
      this.alert = true
    }
    if (this.phone.length == 0) {
      this.phone_class = 'text-red-500'
    } else {
      this.phone_class = 'hidden'
    }
    if (this.email.length == 0) {
      this.email_class = 'text-red-500'
    } else {
      this.email_class = 'hidden'
    }
  }
  saveEmployee(empForm: NgForm): void {}

  //document.getElementById('full-name').value=''
  clearFields() {
    //click = 'this.onAlert()'
  }
}
