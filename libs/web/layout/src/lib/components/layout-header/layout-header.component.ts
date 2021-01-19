import { Component, Input } from '@angular/core'

@Component({
  selector: 'layout-header',
  template: `
    <nav class="bg-gray-800 text-gray-300 flex justify-between items-center p-3">
      <div class="flex items-center">
        <a class="flex items-center mr-4 font-semibold" routerLink="/">
          <img *ngIf="logo" [attr.src]="logo" class="inline-block w-8 h-8 mr-2" alt="App Logo" loading="lazy" />
          {{ name }}
        </a>
        <div class="flex">
          <layout-header-links [links]="links"></layout-header-links>
        </div>
      </div>
      <div class="flex">
        <layout-header-links [links]="profile"></layout-header-links>
      </div>
    </nav>
  `,
})
export class LayoutHeaderComponent {
  @Input() links: { label: string; route: string }[] = [{ label: 'Dashboard', route: '/dashboard' }]
  @Input() profile: { label: string; route: string }[] = []
  @Input() logo: string
  @Input() name: string
}
