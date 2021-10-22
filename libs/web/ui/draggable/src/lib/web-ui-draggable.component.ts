import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { Component, Input, ViewEncapsulation } from '@angular/core'

enum TaskStatus {
  BACKLOG = 'Backlog',
  SELECTED = 'Selected',
  IN_PROGRESS = 'InProgress',
  DONE = 'Done',
}

enum TaskType {
  STORY = 'Story',
  TASK = 'Task',
  BUG = 'Bug',
}

enum TaskPriority {
  LOWEST = 'Lowest',
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  HIGHEST = 'Highest',
}

class Draggable {
  id: TaskStatus
  title: string
  tasks: Tasks[]
}

interface Tasks {
  id: string
  title: string
  status: TaskStatus
  type: TaskType
  priority: TaskPriority
}

@Component({
  selector: 'ui-draggable',
  styleUrls: [`./web-ui-draggable.scss`],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="flex flex-start items-start overflow-x-scroll pb-8">
      <ng-container *ngFor="let items of draggableData">
        <div class="bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-3 mr-4">
          <h2 class="text-gray-700 dark:text-white font-semibold font-sans tracking-wide text-sm">{{ items.title }}</h2>

          <div
            cdkDropList
            [cdkDropListData]="items.tasks"
            [id]="items.id"
            [cdkDropListConnectedTo]="connectedTo"
            (cdkDropListDropped)="drop($event)"
            class="draggable-list dark:bg-gray-600"
          >
            <div
              class="bg-white dark:bg-gray-600 shadow rounded px-3 pt-3 pb-5 border border-white mt-3 cursor-move draggable-box w-72"
              *ngFor="let item of items.tasks"
              cdkDrag
              [cdkDragData]="item"
            >
              <div class="flex justify-between">
                <p class="text-gray-700 dark:text-white font-semibold font-sans tracking-wide text-sm">
                  {{ item.title }}
                </p>

                <img
                  class="w-6 h-6 rounded-full ml-3"
                  src="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
                  alt="Avatar"
                />
              </div>
              <div class="flex mt-4 justify-between items-center">
                <span class="text-sm text-gray-600 dark:text-white">{{ item.title }}</span>
                <!-- <badge>hh</badge> -->
              </div>
            </div>
          </div>
        </div>
      </ng-container>
    </div>
  `,
})
export class WebUiDraggableComponent {
  @Input() draggableData: Draggable[]

  public connectedTo = []

  ngOnInit(): void {
    for (let items of this.draggableData) {
      this.connectedTo.push(items.id)
    }
  }

  drop(event: CdkDragDrop<Draggable[]>) {
    let isMovingInsideTheSameList = event.previousContainer === event.container
    if (isMovingInsideTheSameList) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
  }
}
