import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditNormalComponent } from './profile-edit-normal.component';

describe('ProfileEditNormalComponent', () => {
  let component: ProfileEditNormalComponent;
  let fixture: ComponentFixture<ProfileEditNormalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileEditNormalComponent]
    });
    fixture = TestBed.createComponent(ProfileEditNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
