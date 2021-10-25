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
              class="bg-white dark:bg-gray-600 shadow rounded px-3 pt-3 pb-5 border showhim border-white mt-3 cursor-move draggable-box w-72"
              *ngFor="let item of items.tasks"
              cdkDrag
              [cdkDragData]="item"
            >
              <div class="bg-green-500 h-8 my-2 flex justify-end items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 showme text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  (click)="editEvent(item)"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
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

    <div class="quick-card-editor is-covered flex justify-center items-center" *ngIf="editMode">
      <span class="icon-lg icon-close quick-card-editor-close-icon js-close-editor"></span>
      <div class="quick-card-editor-card" style="width: 256px;">
        <div class="list-card list-card-quick-edit js-stop is-covered" style="width: 256px;">
          <div
            class="list-card-cover js-card-cover color-card-cover color-card-cover-green"
            style="height: 32px;"
          ></div>
          <div class="list-card-stickers-area js-stickers-area hide">
            <div class="stickers js-card-stickers" style="height: 32px;"></div>
          </div>
          <div class="list-card-details js-card-details">
            <textarea
              class="list-card-edit-title js-edit-card-title pt-1"
              style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 90px;"
              [(ngModel)]="editTitle"
            >
hello</textarea
            >
          </div>
          <p class="list-card-dropzone" *ngIf="false">Drop files to upload.</p>
          <p class="list-card-dropzone-limited" *ngIf="false">Too many attachments.</p>
          <p class="list-card-dropzone-restricted" *ngIf="false">Not allowed by your enterprise.</p>
        </div>
        <button class="bg-indigo-600 text-gray-100 py-2 px-6 rounded-md cursor-pointer" (click)="edit()">Save</button>
        <button class="bg-gray-500 text-gray-100 py-2 px-6 rounded-md cursor-pointer ml-2" (click)="editMode = false">
          cancel
        </button>
        <div class="quick-card-editor-buttons fade-in">
          <a class="quick-card-editor-buttons-item" href="/c/uEyASsV5/151-component-tag-textarea"
            ><span class="icon-sm icon-card light"></span
            ><span class="quick-card-editor-buttons-item-text">Open card</span>
          </a>
          <div id="convert-card-role-button-react-root" class=""><div class="js-react-root"></div></div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiDraggableComponent {
  @Input() draggableData: Draggable[] | any

  public connectedTo = []

  public editMode: boolean = false
  editTitle: string
  editId: any

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

  editEvent(data: any) {
    for (const items of this.draggableData) {
      for (const task of items.tasks) {
        if (task.id == data.id) {
          this.editTitle = task.title
          this.editId = task.id
        }
      }
    }
    this.editMode = true
  }

  edit(): void {
    this.draggableData = this.draggableData.map((items) => {
      items.tasks.map((task) => {
        if (task.id == this.editId) {
          task.title = this.editTitle

          return task
        }

        return task
      })
      return items
    })

    this.editMode = false
  }
}
