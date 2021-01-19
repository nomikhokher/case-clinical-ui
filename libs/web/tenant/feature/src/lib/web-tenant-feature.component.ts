import { Component } from '@angular/core'

@Component({
  template: `
    <div class="container mx-auto p-3 md:py-6">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class WebTenantFeatureComponent {}
