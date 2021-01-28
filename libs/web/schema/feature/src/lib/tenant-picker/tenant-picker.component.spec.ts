import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TenantPickerComponent } from './tenant-picker.component'

describe('SchemaListComponent', () => {
  let component: TenantPickerComponent
  let fixture: ComponentFixture<TenantPickerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenantPickerComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantPickerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
