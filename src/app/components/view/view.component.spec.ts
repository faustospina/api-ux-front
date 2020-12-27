import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BackService } from 'src/app/services/back.service';
import { ViewComponent } from './view.component';
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;
  let service:BackService;
  let spy:any;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ ViewComponent ],
      imports: [HttpClientModule,RouterTestingModule],
      providers: [
         BackService
    ],      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance; 
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should delete',()=>{
    spy =spyOn(component,'deleteActivity')
    spy = spyOn(service, 'deleteActivityById');
    component.deleteActivity(1);
    expect(component.deleteActivity).toHaveBeenCalled();
    expect(service.deleteActivityById).toHaveBeenCalled();
  })

  it('show edit', fakeAsync(() => { 
    component.editActivity("1")
    tick();
    expect(location.path()).toBe('/edit');
  }));

});
