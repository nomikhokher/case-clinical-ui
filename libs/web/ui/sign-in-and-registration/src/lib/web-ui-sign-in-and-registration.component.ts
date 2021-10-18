import { Component, Input, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'ui-sign-in-and-registration',
  template: `
    <div class="dark:bg-gray-800 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          class="mx-auto h-12 w-auto"
          [ngClass]="{ 'rounded-full h-16 w-16': image }"
          src="{{ image ? image : 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg' }}"
          alt="Workflow"
        />
        <h2 *ngIf="title" class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          {{ title == '' || title == undefined ? 'Sign up/Sign in' : title }}
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white dark:bg-gray-800 py-8 border px-4 shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" name="form" [formGroup]="heroForm">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-400">
                Email address
              </label>
              <div class="mt-1">
                <input
                  id="email"
                  formControlName="email"
                  name="email"
                  type="email"
                  autocomplete="off"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
                <div *ngIf="email.invalid && email.touched" class="text-red-600">
                  <div *ngIf="email.errors?.required">Email is required.</div>
                  <div *ngIf="email.errors?.email">Email must be at least 4 characters long.</div>
                </div>
              </div>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-400">
                Password
              </label>
              <div class="mt-1">
                <input
                  id="password"
                  formControlName="password"
                  name="password"
                  type="password"
                  formControlName="password"
                  autocomplete="off"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
                <div *ngIf="password.invalid && password.touched" class="text-red-600">
                  <div *ngIf="password.errors?.required">Password is required.</div>
                  <div *ngIf="password.errors?.minlength">Password must be at least 4 characters long.</div>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label for="remember_me" class="ml-2 block text-sm text-gray-900 dark:text-gray-100">
                  Remember me
                </label>
              </div>

              <div class="text-sm">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-300"> Or continue with </span>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-{{ icons.length }} gap-3">
              <div *ngFor="let i of icons">
                <a
                  href="#"
                  class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <ui-icon size="lg" class="h-6 w-6" [icon]="i.icon"></ui-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiSignInAndRegistrationComponent {
  @Input() title?: string
  @Input() icons?: Array<string>
  @Input() image?: string
  @Input() trash?

  heroForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  get email() {
    return this.heroForm.get('email')
  }

  get password() {
    return this.heroForm.get('password')
  }
}
