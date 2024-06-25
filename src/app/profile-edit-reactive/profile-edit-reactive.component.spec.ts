import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditReactiveComponent } from './profile-edit-reactive.component';

describe('ProfileEditReactiveComponent', () => {
  let component: ProfileEditReactiveComponent;
  let fixture: ComponentFixture<ProfileEditReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileEditReactiveComponent]
    });
    fixture = TestBed.createComponent(ProfileEditReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
