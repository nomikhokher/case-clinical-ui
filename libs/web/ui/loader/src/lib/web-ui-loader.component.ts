import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'ui-loader',
  template: `
    <ng-container *ngIf="(isLoading === 'true' || isLoading === true) && loadingType === 'dots'">
      <div class="flex items-center justify-center p-4 rounded">
        <div class="flex space-x-3 animate-pulse">
          <div class="w-3 h-3 bg-{{ loaderColor }}-500 rounded-full"></div>
          <div class="w-3 h-3 bg-{{ loaderColor }}-500 rounded-full"></div>
          <div class="w-3 h-3 bg-{{ loaderColor }}-500 rounded-full"></div>
        </div>
      </div>
    </ng-container>
    <ng-container *ngIf="(isLoading === 'true' || isLoading === true) && loadingType === 'single'">
      <div class="flex justify-center items-center p-4">
        <div class="animate-spin rounded-full h-{{ size }} w-{{ size }} border-b-2 border-{{ loaderColor }}-600"></div>
      </div>
    </ng-container>
    <ng-container *ngIf="(isLoading === 'true' || isLoading === true) && loadingType === 'double'">
      <div class="flex justify-center items-center p-4">
        <div
          class=" animate-spin rounded-full h-{{ size }}  w-{{ size }} border-t-2 border-b-2 border-{{
            loaderColor
          }}-600"
        ></div>
      </div>
    </ng-container>
    <ng-container *ngIf="(isLoading === 'true' || isLoading === true) && loadingType === 'simple'">
      <div class="flex justify-center items-center p-4">
        <div
          [style.borderTopColor]="loaderColor + ' !important'"
          class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-{{ size }}  w-{{ size }}"
        ></div>
      </div>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .loader {
        -webkit-animation: spinner 1.5s linear infinite;
        animation: spinner 1.5s linear infinite;
      }

      @-webkit-keyframes spinner {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }

      @keyframes spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebUiLoaderComponent {
  @Input() isLoading?: string | boolean
  @Input() loadingType?: string
  @Input() loaderColor?: string
  @Input() size?: number
}
