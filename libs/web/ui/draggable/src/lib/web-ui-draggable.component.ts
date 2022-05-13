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
      <div class="flex justify-between items-center">
        <div class="w-64 relative leftContent ">
          <span href="" class="absolute top-2.5 left-2 text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input type="text" placeholder="Search tasks..." class="text-gray-400 w-full pl-8" />
          <span href="" class="absolute top-2 right-2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 hover:bg-gray-200 p-1 rounded-md"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
        <div class="rightContent flex items-center gap-3">
          <div class="relative flex items-center gap-1 hover:bg-gray-200 px-2 py-0.5 rounded-md cursor-pointer">
            <div class="flex items-center gap-1" (click)="filterToggle()">
              <span href="" class=" text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <p class="capitalize text-gray-900 text-sm">Filter</p>
            </div>
            <div class="filterPop p-4 absolute top-6 bg-white left-0 w-96 rounded-md" *ngIf="filter">
              <h2 class="text-gray-900 text-lg font-extrabold">Filters</h2>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <p>Where</p>
                  <div class="relative">
                    <select name="" id="" class="border rounded-md ">
                      <option value="">Select Filter</option>
                    </select>
                  </div>
                </div>
                <span href="" class="">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div class="text-blue-500 flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span class="capitalize text-blue-500 text-sm pb-4 pt-4 w-full  block">Add Filter</span>
              </div>

              <div class="flex justify-between items-center">
                <div class="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p class="text-sm">Learn more about ClickUp<span class="ml-1 text-blue-500">filters</span></p>
                </div>
                <span class="text-sm flex items-center gap-1 border text-gray-900 py-1 px-2 rounded-md">
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
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  <button class="">Templates</button>
                </span>
              </div>
            </div>
          </div>
          <div class="relative flex items-center gap-1 hover:bg-gray-200 px-2 py-0.5 rounded-md cursor-pointer">
            <div class="flex items-center gap-1" (click)="sortByToggle()">
              <span href="" class="text-gray-900">
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </span>
              <p class="capitalize text-gray-900 text-sm">
                Sort by: <span>{{ sortbyTitle }}</span>
              </p>
            </div>
            <div class="sortMain p-3 rounded-md bg-white absolute top-6 left-0 w-36" *ngIf="sort1By">
              <ng-container>
                <h2 class="uppercase text-gray-900 text-sm font-medium pl-2">Sort By</h2>
                <span
                  ><p
                    class="hover:bg-gray-200 cursor-pointerhover:bg-gray-200 px-2 py-0.5 text-base rounded-md cursor-pointer my-1"
                  >
                    Status
                  </p></span
                >
                <span
                  ><p
                    class="hover:bg-gray-200 cursor-pointerhover:bg-gray-200 px-2 py-0.5 text-base rounded-md cursor-pointer my-1"
                  >
                    Task Name
                  </p></span
                >
                <span
                  ><p
                    class="hover:bg-gray-200 cursor-pointerhover:bg-gray-200 px-2 py-0.5 text-base rounded-md cursor-pointer my-1"
                  >
                    Assignee
                  </p></span
                >
                <span
                  ><p
                    class="hover:bg-gray-200 cursor-pointerhover:bg-gray-200 px-2 py-0.5 text-base rounded-md cursor-pointer my-1"
                  >
                    Priority
                  </p></span
                >
                <span (click)="orderByDate()"
                  ><p
                    class="hover:bg-gray-200 cursor-pointerhover:bg-gray-200 px-2 py-0.5 text-base rounded-md cursor-pointer my-1"
                  >
                    Due Date
                  </p></span
                >
                <span
                  ><p
                    class="hover:bg-gray-200 cursor-pointerhover:bg-gray-200 px-2 py-0.5 text-base rounded-md cursor-pointer my-1"
                  >
                    Start Date
                  </p></span
                >
                <span
                  ><p
                    class="hover:bg-gray-200 cursor-pointerhover:bg-gray-200 px-2 py-0.5 text-base rounded-md cursor-pointer my-1"
                  >
                    Date Created
                  </p></span
                >
                <span
                  ><p
                    class="hover:bg-gray-200 cursor-pointerhover:bg-gray-200 px-2 py-0.5 text-base rounded-md cursor-pointer my-1"
                  >
                    Date Updated
                  </p></span
                >
                <span
                  ><p
                    class="hover:bg-gray-200 cursor-pointerhover:bg-gray-200 px-2 py-0.5 text-base rounded-md cursor-pointer my-1"
                  >
                    Closed
                  </p></span
                >
                <span
                  ><p
                    class="hover:bg-gray-200 cursor-pointerhover:bg-gray-200 px-2 py-0.5 text-base rounded-md cursor-pointer my-1"
                  >
                    Time Track
                  </p></span
                >
                <span
                  ><p
                    class="hover:bg-gray-200 cursor-pointerhover:bg-gray-200 px-2 py-0.5 text-base rounded-md cursor-pointer my-1"
                  >
                    Time Estimate
                  </p></span
                >
              </ng-container>
            </div>
          </div>
          <div class="relative flex items-center gap-1 hover:bg-gray-200 px-2 py-0.5 rounded-md cursor-pointer">
            <div class="flex items-center gap-1" (click)="groupByToggle()">
              <span href="" class="text-gray-900">
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </span>
              <p class="capitalize text-gray-900 text-sm">
                Group By: <span>{{ sortbyTitle }}</span>
              </p>
            </div>
            <div class="flex items-center gap-1" (click)="groupByToggle()">
              <div class="sortMain p-3 rounded-md bg-white absolute top-6 left-0 w-36" *ngIf="groupBy">
                <ng-container>
                  <h2 class="uppercase text-gray-900 text-sm font-medium pl-2">Group By</h2>
                  <span class="flex gap-1 items-center">
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
                    <p
                      class="hover:bg-gray-200 cursor-pointerhover:bg-gray-200 px-2 py-0.5 text-base rounded-md cursor-pointer my-1"
                    >
                      Due Date
                    </p>
                  </span>
                  <span class="flex gap-1 items-center">
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
                    <p
                      class="hover:bg-gray-200 cursor-pointerhover:bg-gray-200 px-2 py-0.5 text-base rounded-md cursor-pointer my-1"
                    >
                      None
                    </p></span
                  >
                </ng-container>
              </div>
            </div>
          </div>
          <div class="relative flex items-center gap-1 hover:bg-gray-200 px-2 py-0.5 rounded-md cursor-pointer">
            <div class="flex items-center gap-1" (click)="subTasksToggle()">
              <span href="" class=" text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <p class="capitalize text-gray-900 text-sm">Subtasks</p>
            </div>
            <div class="subTaskMain p-3 rounded-md bg-white absolute top-6 left-0 w-44" *ngIf="subTasks">
              <h2 class="uppercase text-gray-900 text-sm font-medium pl-2">SHow Substacks</h2>
              <span
                ><p
                  class="hover:bg-gray-200 cursor-pointerhover:bg-gray-200 px-2 py-0.5 text-base rounded-md cursor-pointer my-1"
                >
                  Collapse All
                </p></span
              >
              <span
                ><p
                  class="hover:bg-gray-200 cursor-pointerhover:bg-gray-200 px-2 py-0.5 text-base rounded-md cursor-pointer my-1"
                >
                  Expand All
                </p></span
              >
              <span
                ><p
                  class="hover:bg-gray-200 cursor-pointerhover:bg-gray-200 px-2 py-0.5 text-base rounded-md cursor-pointer my-1"
                >
                  As seperate tasks
                  <span class="text-xs text-gray-400">Use this to filter subtasks</span>
                </p></span
              >
            </div>
          </div>
          <div class="flex items-center gap-1 hover:bg-gray-200 px-2 py-0.5 rounded-md cursor-pointer">
            <span href="" class=" text-gray-900">
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <p class="capitalize text-gray-900 text-sm">Me</p>
          </div>
          <div class="flex items-center gap-1 hover:bg-gray-200 px-2 py-0.5 rounded-md cursor-pointer">
            <span href="" class=" text-gray-900">
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </span>
            <p class="capitalize text-gray-900 text-sm">Assignees</p>
          </div>
          <div class="relative flex items-center gap-1 hover:bg-gray-200 px-2 py-0.5 rounded-md cursor-pointer">
            <div class="flex items-center gap-1" (click)="shwToggle()">
              <span href="" class=" text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
              <p class="capitalize text-gray-900 text-sm">Show</p>
            </div>
            <div class="ShowMain p-3 rounded-md bg-white absolute top-6 -left-32 w-72" *ngIf="shw">
              <div class="flex items-center justify-between">
                <h2 class="uppercase text-gray-900 text-xs font-medium pl-2">SHow Substacks</h2>
                <span class="text-purple-600 text-xs font-medium">Default Settings</span>
              </div>
              <span class="rounded-md flex items-center justify-between mt-2 hover:bg-gray-200 cursor-pointer">
                <p class=" px-2 py-0.5 text-base rounded-md cursor-pointer my-1">Task locations</p>
                <label class="switch">
                  <input type="checkbox" checked />
                  <span class="slider round"></span>
                </label>
              </span>
              <span class="rounded-md flex items-center justify-between mb-2 hover:bg-gray-200 cursor-pointer">
                <p class=" px-2 py-0.5 text-base rounded-md cursor-pointer my-1">Subtask parent names</p>
                <label class="switch">
                  <input type="checkbox" checked />
                  <span class="slider round"></span>
                </label>
              </span>
              <hr />
              <span class="rounded-md flex items-center justify-between hover:bg-gray-200 cursor-pointer">
                <p class=" px-2 py-0.5 text-base rounded-md cursor-pointer my-1">Closed subtasks</p>
                <label class="switch">
                  <input type="checkbox" checked />
                  <span class="slider round"></span>
                </label>
              </span>
              <span class="rounded-md flex items-center justify-between hover:bg-gray-200 cursor-pointer">
                <p class=" px-2 py-0.5 text-base rounded-md cursor-pointer my-1">Show assignees</p>
                <label class="switch">
                  <input type="checkbox" checked />
                  <span class="slider round"></span>
                </label>
              </span>
              <span class="rounded-md flex items-center justify-between hover:bg-gray-200 cursor-pointer">
                <p class=" px-2 py-0.5 text-base rounded-md cursor-pointer my-1">Collapse empty columns</p>
                <label class="switch">
                  <input type="checkbox" checked />
                  <span class="slider round"></span>
                </label>
              </span>
              <span class="rounded-md flex items-center justify-between hover:bg-gray-200 cursor-pointer">
                <p class=" px-2 py-0.5 text-base rounded-md cursor-pointer my-1">Show images on cards</p>
                <label class="switch">
                  <input type="checkbox" checked />
                  <span class="slider round"></span>
                </label>
              </span>
              <span class="rounded-md flex items-center justify-between hover:bg-gray-200 cursor-pointer">
                <p class=" px-2 py-0.5 text-base rounded-md cursor-pointer my-1">Show task IDs</p>
                <label class="switch">
                  <input type="checkbox" checked />
                  <span class="slider round"></span>
                </label>
              </span>
              <span class="rounded-md flex items-center justify-between hover:bg-gray-200 cursor-pointer">
                <p class=" px-2 py-0.5 text-base rounded-md cursor-pointer my-1">Show time tracker</p>
                <label class="switch">
                  <input type="checkbox" checked />
                  <span class="slider round"></span>
                </label>
              </span>
              <span class="rounded-md flex items-center justify-between hover:bg-gray-200 cursor-pointer">
                <p class=" px-2 py-0.5 text-base rounded-md cursor-pointer my-1">Tasks in Multiple Lists</p>
                <label class="switch">
                  <input type="checkbox" checked />
                  <span class="slider round"></span>
                </label>
              </span>
              <span class="rounded-md flex items-center justify-between cursor-pointer hover:bg-gray-200">
                <p class=" px-2 py-0.5 text-base rounded-md cursor-pointer my-1">Custom Fields</p>
                <!-- <label class="switch">
              <input type="checkbox" checked>
              <span class="slider round"></span>
            </label> -->
              </span>
            </div>
          </div>
          <div class="relative flex items-center gap-1 hover:bg-gray-200 px-2 py-0.5 rounded-md cursor-pointer">
            <div (click)="dottedToggle()" class="flex items-center gap-1">
              <span href="" class=" text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </span>
            </div>
            <div class="viewMain p-3 rounded-md bg-white absolute top-6 -left-60 w-72" *ngIf="dotted">
              <div class="flex items-center justify-between">
                <h2 class="uppercase text-gray-900 text-xs font-medium pl-2">View Settings</h2>
                <span class="text-purple-600 text-xs font-medium">View Default</span>
              </div>
              <span class="rounded-md flex items-center justify-between mt-2 hover:bg-gray-200 cursor-pointer">
                <div class="flex gap-2 items-center">
                  <svg
                    class="h-4 w-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 486 486"
                    style="enable-background:new 0 0 486 486;"
                    xml:space="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M473.7,485.75c6.8,0,12.3-5.5,12.3-12.3v-359.8c0-3.6-1.6-7-4.3-9.3L363,2.85c-0.2-0.2-0.4-0.3-0.6-0.4    c-0.3-0.2-0.5-0.4-0.8-0.6c-0.4-0.2-0.7-0.4-1.1-0.6c-0.3-0.1-0.6-0.3-0.9-0.4c-0.4-0.2-0.9-0.3-1.3-0.4c-0.3-0.1-0.6-0.2-0.9-0.2    c-0.8-0.1-1.5-0.2-2.3-0.2H12.3C5.5,0.05,0,5.55,0,12.35v461.3c0,6.8,5.5,12.3,12.3,12.3h461.4V485.75z M384.5,461.25h-283v-184.1    c0-3.7,3-6.6,6.6-6.6h269.8c3.7,0,6.6,3,6.6,6.6V461.25z M161.8,24.45h180.9v127.8c0,0.8-0.6,1.4-1.4,1.4h-178    c-0.8,0-1.4-0.7-1.4-1.4V24.45H161.8z M24.6,24.45h112.8v127.8c0,14.3,11.6,25.9,25.9,25.9h178c14.3,0,25.9-11.6,25.9-25.9V38.75    l94.2,80.6v341.9H409v-184.1c0-17.2-14-31.1-31.1-31.1H108.1c-17.2,0-31.1,14-31.1,31.1v184.2H24.6V24.45z"
                        />
                        <path
                          d="M227.4,77.65h53.8v32.6c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-44.8c0-6.8-5.5-12.3-12.3-12.3h-66.1    c-6.8,0-12.3,5.5-12.3,12.3S220.7,77.65,227.4,77.65z"
                        />
                        <path
                          d="M304.5,322.85h-123c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h123c6.8,0,12.3-5.5,12.3-12.3    S311.3,322.85,304.5,322.85z"
                        />
                        <path
                          d="M304.5,387.75h-123c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h123c6.8,0,12.3-5.5,12.3-12.3    S311.3,387.75,304.5,387.75z"
                        />
                      </g>
                    </g>
                  </svg>
                  <p class=" px-2 py-0.5 text-base rounded-md cursor-pointer my-1">Autosave view</p>
                </div>
                <label class="switch">
                  <input type="checkbox" checked />
                  <span class="slider round"></span>
                </label>
              </span>
              <hr />
              <span class="rounded-md flex items-center justify-between hover:bg-gray-200 cursor-pointer">
                <div class="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <p class=" px-2 py-0.5 text-base rounded-md cursor-pointer my-1">Protect view</p>
                </div>
                <label class="switch">
                  <input type="checkbox" checked />
                  <span class="slider round"></span>
                </label>
              </span>
              <span class="rounded-md flex items-center justify-between hover:bg-gray-200 cursor-pointer">
                <div class="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <p class=" px-2 py-0.5 text-base rounded-md cursor-pointer my-1">Private view</p>
                </div>
                <label class="switch">
                  <input type="checkbox" checked />
                  <span class="slider round"></span>
                </label>
              </span>
              <span class="rounded-md flex items-center justify-between hover:bg-gray-200 cursor-pointer">
                <div class="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <p class=" px-2 py-0.5 text-base rounded-md cursor-pointer my-1">Default for everyone</p>
                </div>
                <label class="switch">
                  <input type="checkbox" checked />
                  <span class="slider round"></span>
                </label>
              </span>
              <span class="rounded-md flex items-center justify-between hover:bg-gray-200 cursor-pointer">
                <div class="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p class=" px-2 py-0.5 text-base rounded-md cursor-pointer my-1">Default to Me Mode</p>
                </div>
                <label class="switch">
                  <input type="checkbox" checked />
                  <span class="slider round"></span>
                </label>
              </span>
              <hr />
              <span class="rounded-md flex items-center justify-between hover:bg-gray-200 cursor-pointer">
                <div class="flex gap-2 items-center">
                  <svg
                    class="h-4 w-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13 4.00881C13.0002 3.45653 12.5527 3.00864 12.0004 3.00842C11.4481 3.00821 11.0002 3.45575 11 4.00803L10.9968 12.0115C10.9966 12.5638 11.4442 13.0117 11.9965 13.0119C12.5487 13.0121 12.9966 12.5645 12.9968 12.0123L13 4.00881Z"
                      fill="black"
                    />
                    <path
                      d="M4 12.9916C4 10.7824 4.89541 8.78247 6.34308 7.33476L7.7573 8.74898C6.67155 9.83476 6 11.3347 6 12.9916C6 16.3053 8.68629 18.9916 12 18.9916C15.3137 18.9916 18 16.3053 18 12.9916C18 11.3347 17.3284 9.83469 16.2426 8.74891L17.6568 7.33469C19.1046 8.78241 20 10.7824 20 12.9916C20 17.4098 16.4183 20.9916 12 20.9916C7.58172 20.9916 4 17.4098 4 12.9916Z"
                      fill="black"
                    />
                  </svg>
                  <p class=" px-2 py-0.5 text-base rounded-md cursor-pointer my-1">Reset view to defaults</p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex overflow-auto">
        <ng-container *ngFor="let items of draggableData; let i = index">
          <div class="bg-gray-50 dark:bg-gray-700 rounded-lg px-3 py-3 mr-0">
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
          <span class="quick-card-editor-buttons-item" href="/c/uEyASsV5/151-component-tag-textarea"
            ><span class="icon-sm icon-card light"></span
            ><span class="quick-card-editor-buttons-item-text">Open card</span>
          </span>
          <div id="convert-card-role-button-react-root" class=""><div class="js-react-root"></div></div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiDraggableComponent {
  @Input() draggableData: Draggable[] | any
  sortbyTitle: string = 'None'
  filter: boolean = false
  sort1By: boolean = false
  groupBy: boolean = false
  subTasks: boolean = false
  shw: boolean = false
  dotted: boolean = false
  filterToggle() {
    this.filter = !this.filter
    this.sort1By = false
    this.subTasks = false
    this.shw = false
    this.dotted = false
    this.groupBy = false
  }
  sortByToggle() {
    this.sort1By = !this.sort1By
    this.filter = false
    this.subTasks = false
    this.shw = false
    this.dotted = false
    this.groupBy = false
  }
  subTasksToggle() {
    this.subTasks = !this.subTasks
    this.filter = false
    this.sort1By = false
    this.shw = false
    this.dotted = false
    this.groupBy = false
  }
  shwToggle() {
    this.shw = !this.shw
    this.filter = false
    this.sort1By = false
    this.subTasks = false
    this.dotted = false
    this.groupBy = false
  }
  dottedToggle() {
    this.dotted = !this.dotted
    this.filter = false
    this.sort1By = false
    this.subTasks = false
    this.shw = false
    this.groupBy = false
  }
  groupByToggle() {
    this.groupBy = !this.groupBy
    this.filter = false
    this.sort1By = false
    this.subTasks = false
    this.shw = false
    this.dotted = false
  }
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

  orderByDate() {
    this.draggableData = this.draggableData.map((items) => {
      items.tasks = items.tasks.sort((a, b) => new Date(a.date).getDate() - new Date(b.date).getDate())
      this.sortbyTitle = 'Due Date'
      this.sort1By = false
      return items
    })
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
    this.menu = true
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
    if (this.sortbyTitle === 'Due Date') {
      this.orderByDate()
    }
  }
}
