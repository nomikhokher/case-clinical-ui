import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminTenantEditComponent } from './admin-tenant-edit.component'

describe('TenantDetailComponent', () => {
  let component: AdminTenantEditComponent
  let fixture: ComponentFixture<AdminTenantEditComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminTenantEditComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTenantEditComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
