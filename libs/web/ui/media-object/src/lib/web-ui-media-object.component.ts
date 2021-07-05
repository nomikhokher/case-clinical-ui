import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-media-object',
  template: `
    <div class="flex">
      <ng-container *ngIf="horizontalDirection == 'left'">
        <div
          class="mr-4 flex-shrink-0 sm:mb-0 sm:mr-4"
          [ngClass]="verticalDirection ? 'self-' + verticalDirection : ''"
        >
          <!-- <ui-icon icon="imageAvatar"></ui-icon> -->
          <svg
            class="border border-gray-300 bg-white text-gray-300"
            preserveAspectRatio="none"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 200 200"
            aria-hidden="true"
            [ngClass]="[circle ? 'rounded-full' : '', height ? 'h-' + height : 'h-16', width ? 'w-' + width : 'w-16']"
          >
            <path vector-effect="non-scaling-stroke" stroke-width="1" d="M0 0l200 200M0 200L200 0" />
          </svg>
        </div>
        <div class="w-6/12">
          <ng-content select=".objectData"></ng-content>
        </div>
      </ng-container>
      <ng-container *ngIf="horizontalDirection == 'right'">
        <div class="w-6/12">
          <ng-content select=".objectDataFullImage"></ng-content>
        </div>
        <div
          class="mr-4 flex-shrink-0 sm:mb-0 sm:mr-4"
          [ngClass]="verticalDirection ? 'self-' + verticalDirection : ''"
        >
          <!-- <ui-icon icon="imageAvatar"></ui-icon> -->
          <svg
            class="border border-gray-300 bg-white text-gray-300"
            preserveAspectRatio="none"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 200 200"
            aria-hidden="true"
            [ngClass]="[circle ? 'rounded-full' : '', height ? 'h-' + height : 'h-16', width ? 'w-' + width : 'w-16']"
          >
            <path vector-effect="non-scaling-stroke" stroke-width="1" d="M0 0l200 200M0 200L200 0" />
          </svg>
        </div>
      </ng-container>

      <ng-container *ngIf="data && horizontalDirection == 'rights'">
        <ng-container>
          <div class="ml-4 flex-shrink-0">
            <h4 class="text-lg font-bold">{{ data.name }}</h4>
            <p class="mt-1">{{ data.des }}</p>
            <div class="ml-4 flex-shrink-0">
              <ng-content select=".objectData2"></ng-content>
            </div>
          </div>
          <div class="ml-4 flex-shrink-0">
            <svg
              class="h-12 w-12 border border-gray-300 bg-white text-gray-300"
              preserveAspectRatio="none"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 200 200"
              aria-hidden="true"
              [ngClass]="[circle ? 'rounded-full' : '', height ? 'h-' + height : 'h-12', width ? 'w-' + width : 'w-12']"
            >
              <path vector-effect="non-scaling-stroke" stroke-width="1" d="M0 0l200 200M0 200L200 0" />
            </svg>
          </div>
        </ng-container>
      </ng-container>

      <ng-container *ngIf="data && horizontalDirection == 'lefts'">
        <ng-container>
          <div class="mr-4 flex-shrink-0">
            <svg
              class="h-12 w-12 border border-gray-300 bg-white text-gray-300"
              preserveAspectRatio="none"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 200 200"
              aria-hidden="true"
              [ngClass]="[circle ? 'rounded-full' : '', height ? 'h-' + height : 'h-16', width ? 'w-' + width : 'w-16']"
            >
              <path vector-effect="non-scaling-stroke" stroke-width="1" d="M0 0l200 200M0 200L200 0" />
            </svg>
          </div>
          <div>
            <h4 class="text-lg font-bold">{{ data.name }}</h4>
            <p class="mt-1">{{ data.des }}</p>
            <div>
              <ng-content select=".objectData3"></ng-content>
            </div>
          </div>
        </ng-container>
      </ng-container>
    </div>
  `,
})
export class WebUiMediaObjectComponent {
  @Input() imageAvatar?: string
  @Input() circle?: string
  @Input() verticalDirection?: string
  @Input() height?: string
  @Input() width?: string
  @Input() horizontalDirection?: string
  @Input() data: any
}
