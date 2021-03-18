import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SchemaEnumDetailComponent } from './schema-enum-detail.component'

describe('SchemaEnumDetailComponent', () => {
  let component: SchemaEnumDetailComponent
  let fixture: ComponentFixture<SchemaEnumDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchemaEnumDetailComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaEnumDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
