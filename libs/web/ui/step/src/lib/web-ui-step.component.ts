import { Component, Input } from '@angular/core'
import { WebUiToastService } from '@schema-driven/web/ui/toast'

@Component({
  selector: 'ui-step',
  template: `
    <div class="mt-4">
      <!-- This example requires Tailwind CSS v2.0+ -->
      <nav aria-label="Progress">
        <ol class="space-y-4 md:flex md:space-y-0 md:space-x-8">
          <li class="md:flex-1" *ngFor="let item of stepIems; index as i">
            <!-- Completed Step -->
            <a
              (click)="step(item.id)"
              class="group cursor-pointer pl-4 py-2 flex flex-col border-l-4 hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
              [ngClass]="item.stepActive ? 'border-indigo-600' : ''"
            >
              <span class="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-indigo-800">
                {{ item.stepTitle }}</span
              >
              <div class="group pl-4 py-2 flex flex-row space-x-2">
                <ui-icon
                  *ngIf="item.icon && icon == true"
                  size="lg"
                  [icon]="item.icon"
                  class="h-5 w-5 text-center"
                ></ui-icon>
                <span class="text-sm font-medium">{{ item.stepDetails }} </span>
              </div>
            </a>
          </li>
        </ol>
      </nav>
    </div>
    <section>
      <div class="mt-2 p-4">
        <ng-container [ngSwitch]="stepValue">
          <div *ngSwitchCase="1">1</div>
          <div *ngSwitchCase="2">2</div>
          <div *ngSwitchCase="3">3</div>
          <div *ngSwitchCase="4">4</div>
          <div *ngSwitchDefault>Please select step</div>
          <div></div>
          <div></div>
        </ng-container>
      </div>
    </section>
  `,
})
export class WebUiStepComponent {
  @Input() mode?: any
  @Input() stepIems: StepItems[]
  @Input() icon?: boolean

  public stepValue: number[] = [1]
  constructor(public toast: WebUiToastService) {}

  step(number: number) {
    const stepNumber: number[] = []
    stepNumber.push(number)
    this.stepValue = stepNumber
    this.stepIems = this.stepIems.map((value) => {
      console.log(value)
      if (value.id === number) {
        return { ...value, stepActive: true }
      }
      return { ...value, stepActive: false }
    })
    this.toast.success('Changes of Step ' + number + ' saved!', { duration: 1500 })
  }
}

interface StepItems {
  id: number
  stepActive?: boolean
  stepTitle: string
  stepDetails: string
  icon?: string
}
