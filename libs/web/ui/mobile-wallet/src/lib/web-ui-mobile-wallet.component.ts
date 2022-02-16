import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-wallet',
  template: `
    <style>
      svg {
        width: 32px;
        margin-top: 24px;
      }
    </style>
    <div class="py-4 pt-10 pb-8 ring-gray-900/5 sm:max-w-lg sm:mx-auto lg sm:px-5 head-cl dark:bg-gray-600">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-center text-black text-md dark:text-white">
        Good Morning
      </p>
      <h2 class="sm:text-3xl text-6xl font-medium title-font mb-4 text-gray-900 text-center dark:text-white">
        Connect to <br />a Wallet
      </h2>
      <img src="/assets/mobile-ui/assets/images/wallet-img.png" class=" py-12" />
      <p class="py-0 text-center text-lg text-gray-500 dark:text-gray-200">
        We do not own your private keys and cannot access your funds without your confirmation.
      </p>
    </div>
  `,
})
export class WebUiMobileWalletComponent {}
