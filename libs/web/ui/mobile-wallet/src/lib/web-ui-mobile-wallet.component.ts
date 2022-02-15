import { Component } from '@angular/core'

@Component({
  selector: 'ui-mobile-wallet',
  template: `
    <div class=" px-6 pt-10 pb-8 ring-gray-900/5 sm:max-w-lg sm:mx-auto lg sm:px-10 head-cl dark:bg-gray-600">
      <ui-icon size="lg" icon="chevronLeft" class=" py-8 w-8 dark:text-white"></ui-icon>
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
