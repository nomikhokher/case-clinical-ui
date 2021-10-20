import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'ui-draggable',
  styles: [
    `
      .example-container {
        width: 400px;
        max-width: 100%;
        margin: 0 25px 25px 0;
        display: inline-block;
        vertical-align: top;
      }

      .example-list {
        border: solid 1px #ccc;
        min-height: 60px;
        background: gray;
        border-radius: 4px;
        overflow: hidden;
        display: block;
      }

      .example-box {
        padding: 20px 10px;
        border-bottom: solid 1px #ccc;
        color: rgba(0, 0, 0, 0.87);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        cursor: move;
        background: white;
        font-size: 14px;
      }

      .cdk-drag-preview {
        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14),
          0 3px 14px 2px rgba(0, 0, 0, 0.12);
      }

      .cdk-drag-placeholder {
        opacity: 0;
      }

      .cdk-drag-animating {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      .example-box:last-child {
        border: none;
      }

      .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
  template: `
    <div class="flex">
      <div class="example-container">
        <h2>Pending</h2>

        <div
          cdkDropList
          #pendings="cdkDropList"
          [cdkDropListData]="pending"
          [cdkDropListConnectedTo]="[approveds, scheduleds, completes, payments]"
          class="example-list"
          (cdkDropListDropped)="drop($event)"
        >
          <div class="example-box" *ngFor="let item of pending" cdkDrag>{{ item }}</div>
        </div>
      </div>
      <div class="example-container">
        <h2>Approved Pending Scheduling</h2>

        <div
          cdkDropList
          #approveds="cdkDropList"
          [cdkDropListData]="approved"
          [cdkDropListConnectedTo]="[pendings, scheduleds, completes, payments]"
          class="example-list"
          (cdkDropListDropped)="drop($event)"
        >
          <div class="example-box" *ngFor="let item of approved" cdkDrag>{{ item }}</div>
        </div>
      </div>
      <div class="example-container">
        <h2>Scheduled</h2>

        <div
          cdkDropList
          #scheduleds="cdkDropList"
          [cdkDropListData]="scheduled"
          [cdkDropListConnectedTo]="[approveds, pendings, completes, payments]"
          class="example-list"
          (cdkDropListDropped)="drop($event)"
        >
          <div class="example-box" *ngFor="let item of scheduled" cdkDrag>{{ item }}</div>
        </div>
      </div>
      <div class="example-container">
        <h2>Complete Pending Bill</h2>

        <div
          cdkDropList
          #completes="cdkDropList"
          [cdkDropListData]="complete"
          [cdkDropListConnectedTo]="[approveds, scheduleds, pendings, payments]"
          class="example-list"
          (cdkDropListDropped)="drop($event)"
        >
          <div class="example-box" *ngFor="let item of complete" cdkDrag>{{ item }}</div>
        </div>
      </div>

      <div class="example-container">
        <h2>Pending Payment</h2>

        <div
          cdkDropList
          #payments="cdkDropList"
          [cdkDropListData]="payment"
          [cdkDropListConnectedTo]="[approveds, scheduleds, completes, pendings]"
          class="example-list"
          (cdkDropListDropped)="drop($event)"
        >
          <div class="example-box" *ngFor="let item of payment" cdkDrag>{{ item }}</div>
        </div>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class WebUiDraggableComponent {
  pending = ['pending Get to work', 'pending Pick up groceries', 'pending Go home', 'pending Fall asleep']
  approved = ['approved Get to work', 'approved Pick up groceries', 'approved Go home', 'approved Fall asleep']
  scheduled = ['scheduled Get to work', 'scheduled Pick up groceries', 'scheduled Go home', 'scheduled Fall asleep']
  complete = ['complete Get to work', 'complete Pick up groceries', 'complete Go home', 'complete Fall asleep']

  payment = [
    'payment Get up',
    'payment Brush teeth',
    'payment Take a shower',
    'payment Check e-mail',
    'payment Walk dog',
  ]

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
  }
}
