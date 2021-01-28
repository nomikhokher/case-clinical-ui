import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminTenantDetailComponent } from './admin-tenant-detail.component'

describe('TenantDetailComponent', () => {
  let component: AdminTenantDetailComponent
  let fixture: ComponentFixture<AdminTenantDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminTenantDetailComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTenantDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
