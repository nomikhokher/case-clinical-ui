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
  date: string
}

@Component({
  selector: 'ui-draggable',
  styleUrls: [`./web-ui-draggable.scss`],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class=" flex-start items-start pb-8">
      <div class="flex md:items-center md:flex-row flex-col justify-end py-2">
        <ng-container *ngFor="let items of draggableData; let i = index">
          <div class="flex items-center">
            <div>
              <nav class="flex space-x-2">
                <header class="toggle-btn">
                  <input type="checkbox" id="button" />
                  <label for="button" class="dark:bg-gray-700 rounded">
                    <span (click)="onshow()" class="flex items-center text-sm gap-1 justify-center dark:text-blue-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                        />
                      </svg>
                      Sort By
                    </span>
                  </label>

                  <ul *ngIf="menu === true">
                    <li>Sort By</li>
                    <li (click)="getaaDate(items.tasks)" class="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Date
                      <!-- <button>Date</button> -->
                    </li>

                    <li class="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                        />
                      </svg>
                      <button>None</button>
                    </li>
                  </ul>
                </header>
              </nav>
            </div>
          </div>
        </ng-container>
      </div>

      <ng-container *ngFor="let items of draggableData; let i = index">
        <div class="bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-3 mr-0">
          <h2 class="text-gray-700 dark:text-white font- semibold font-sans tracking-wide text-sm">
            {{ items.title }}
          </h2>

          <div
            cdkDropList
            [cdkDropListData]="items.tasks"
            [id]="items.id"
            [cdkDropListConnectedTo]="connectedTo"
            (cdkDropListDropped)="drop($event)"
            class="draggable-list dark:bg-gray-600"
          >
            <div
              class="bg-white dark:bg-gray-600 shadow rounded pb-5 border showhim border-white mt-3 cursor-move draggable-box"
              *ngFor="let item of items.tasks"
              cdkDrag
              [cdkDragData]="item"
            >
              <div class="bg-green-500 h-8 mb-2 flex justify-end items-center rounded-t">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 showme text-white cursor-pointer mr-2"
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
              <div class="flex justify-between mx-3">
                <p class="text-gray-700 dark:text-white font-semibold font-sans tracking-wide text-sm">
                  {{ item.title }}
                </p>

                <img
                  class="w-6 h-6 rounded-full ml-3"
                  src="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
                  alt="Avatar"
                />
              </div>
              <div class="flex mt-4 justify-between items-center mx-3">
                <span class="text-sm text-gray-600 dark:text-white">{{ item.title }}</span>
                <!-- <badge>hh</badge> -->
              </div>
              <div class="flex mt-4 justify-between items-center mx-3">
                <span class="text-sm text-gray-600 dark:text-white">Due Date : {{ item.date }}</span>
                <!-- <badge>hh</badge> -->
              </div>
            </div>
          </div>
          <div
            *ngIf="items.isActive"
            (click)="currentCard = items.id; items.isActive = false"
            class="flex w-full mt-2 mr-2 px-3 text-gray-500 space-x-1 py-1 rounded-md hover:bg-gray-200 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <p (click)="currentCard = 0; items.isActive = true">Add Card</p>
          </div>
          <div *ngIf="currentCard == items.id" class="mt-2">
            <div
              class="border border-gray-300 dark:border-gray-300 rounded p-2 mb-4 dark:bg-gray-600"
              style="width:300px;    background-color: #e7e7e7;"
            >
              <div>
                <textarea
                  class="bg-white mr-3 shadow-md rounded border"
                  name=""
                  id=""
                  cols="5"
                  rows="2"
                  [(ngModel)]="addTitle"
                >
                </textarea>
                <label class="flex items-center gap-3 dark:text-white"
                  >Due Date:
                  <span
                    class="block border border-gray-300 dark:border-gray-600 rounded"
                    style="border-radius: 10px !important;"
                    ><input
                      class="w-48 date-picker"
                      type="date"
                      [(ngModel)]="addDate"
                      style="border-radius: 10px !important;color: #747070;"
                    /> </span
                ></label>
              </div>
            </div>
            <div class="flex space-x-2 items-center">
              <button class="bg-indigo-600 text-gray-50 px-4 py-1.5 rounded text-sm" (click)="save(items)">
                Add Card
              </button>
              <svg
                (click)="currentCard = 0; items.isActive = true"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-500 font-semibold"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </ng-container>
    </div>

    <div class="quick-card-editor is-covered flex justify-center items-center" *ngIf="editMode">
      <span class="icon-lg icon-close quick-card-editor-close-icon js-close-editor"></span>
      <div class="quick-card-editor-card border dark:border-gray-300 p-2 rounded" style="width: 380px;">
        <div
          class="list-card list-card-quick-edit js-stop is-covered dark:bg-gray-900"
          style="width: 100%; max-width:100%;"
        >
          <div
            class="list-card-cover js-card-cover color-card-cover color-card-cover-green"
            style="height: 32px;"
          ></div>
          <div class="list-card-stickers-area js-stickers-area hide">
            <div class="stickers js-card-stickers" style="height: 32px;"></div>
          </div>
          <div class="list-card-details js-card-details pt-5">
            <textarea
              js-card-details
              class="list-card-edit-title js-edit-card-title pt-1 dark:border-gray-300 dark:text-gray-300"
              style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 65px;border:1px solid;;padding: 13px !important;border-radius: 10px;"
              [(ngModel)]="editTitle"
            ></textarea>
          </div>
          <label class="pl-2 pr-2 flex pb-5 text-black mt-3 items-center gap-2 dark:text-gray-300"
            >Due Date:
            <span
              ><input
                class="w-full dark:border-gray-300"
                type="date"
                [(ngModel)]="editDate"
                style="margin-bottom:0px; border-radius: 10px !important; color: #747070; border: 1px solid;width: 256px !important;"
              /> </span
          ></label>
          <p class="list-card-dropzone" *ngIf="false">Drop files to upload.</p>
          <p class="list-card-dropzone-limited" *ngIf="false">Too many attachments.</p>
          <p class="list-card-dropzone-restricted" *ngIf="false">Not allowed by your enterprise.</p>
        </div>
        <button class="bg-indigo-600 text-gray-100 py-2 px-6 rounded-md cursor-pointer" (click)="edit()">Save</button>
        <button class="bg-gray-500 text-gray-100 py-2 px-6 rounded-md cursor-pointer ml-2" (click)="editMode = false">
          Cancel
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
  menu?: boolean
  public editMode: boolean = false
  editTitle: string
  addTitle: string
  editDate: string
  addDate: string
  editId: any
  isCardEditing: boolean = false
  currentCard: number = 0

  ngOnInit(): void {
    for (let items of this.draggableData) {
      this.connectedTo.push(items.id)
    }
    this.menu = false
  }
  getaaDate(tasks) {
    // console.log(tasks);
    tasks.sort((a, b) => a.date - b.date)
    console.log(tasks.sort((a, b) => a.date - b.date))
    this.menu = false
  }

  drop(event: CdkDragDrop<Draggable[]>) {
    let isMovingInsideTheSameList = event.previousContainer === event.container
    if (isMovingInsideTheSameList) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
  }

  editEvent(data: Draggable) {
    for (const items of this.draggableData) {
      for (const task of items.tasks) {
        if (task.id == data.id) {
          this.editTitle = task.title
          this.editId = task.id
          this.editDate = task.date
        }
      }
    }
    this.editMode = true
  }
  public onshow() {
    // if (this.menu === true) {
    this.menu = true
    // } else {
    // this.menu = true
    // }
  }
  edit(): void {
    this.draggableData = this.draggableData.map((items) => {
      items.tasks.map((task) => {
        if (task.id == this.editId) {
          task.title = this.editTitle
          task.date = this.editDate
          return task
        }

        return task
      })
      return items
    })

    this.editMode = false
  }

  save(data: Draggable): void {
    let task = {
      id: Math.floor(Math.random() * 25 + 65),
      priority: 'Medium',
      status: 'Selected',
      title: this.addTitle,
      type: 'Story',
      date: this.addDate,
    }

    for (const items of this.draggableData) {
      if (items.id == data.id) {
        items.tasks.push(task)
      }
    }

    this.addTitle = ''
    this.addDate = ''
  }
}
