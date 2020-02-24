import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit.component';
//import { UserService } from '../services';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponent ],
      imports: [ ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      providers: [
        { provide: FormBuilder, useValue: formBuilder }
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
     //userService = fixture.debugElement.injector.get(UserService);
     fixture = TestBed.createComponent(EditComponent);
     component = fixture.componentInstance;
     component.updateForm = formBuilder.group({
      firstName: null,
      lastName: null,
      id: null
  });
     fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  /*it('get user id', () => {
    expect(component.id).toBeTruthy();
  });*/

  /*it('should be called', () => {
    userSpy = spyOn(userService, 'getUser').and.callThrough();
    expect(userSpy.value).toBeTruthy();
    expect(userSpy).toHaveBeenCalled();
  })*/
});
