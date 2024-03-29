import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-timeline',
  template: `
    <div class="flex flex-col md:grid text-gray-50">
      <div class="flex md:contents">
        <ng-container *ngFor="let timeline of timelines">
          <div class="col-start-2 col-end-4 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 {{ timeline.timelineColor }} pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full {{ timeline.timelineColor }} shadow text-center">
              <ui-icon [icon]="timeline.icon" size="lg" class="h-5 w-5 text-white"></ui-icon>
            </div>
          </div>
          <div
            class="{{
              timeline.timelineColor
            }} col-start-4 col-end-12 p-1 sm:p-4 rounded-xl my-4 mr-auto shadow-md w-full"
          >
            <h3 class="font-semibold text-lg mb-1">{{ timeline.status }}</h3>
            <p class="leading-tight text-justify w-full" *ngIf="timeline.statusTitle">
              {{ timeline.statusTitle }}
            </p>
          </div>
        </ng-container>
      </div>
    </div>
  `,
})
export class WebUiTimelineComponent {
  @Input() timelines: Timeline[]
}

type Timeline = {
  id: string
  timelineColor: string
  icon: string
  status: string
  statusTitle?: string
}
