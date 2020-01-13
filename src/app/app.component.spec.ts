import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {RouterTestingModule} from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MessagesComponent,
      ],
      imports: [
        FormsModule,
        RouterTestingModule,
      ],
    }).compileComponents().then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance; // The component instantiation
        element = fixture.nativeElement; // The HTML reference
    })
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Tour of Heros'`, () => {
    expect(component.title).toEqual('Tour of Heros');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    expect(element.querySelector('h1').textContent).toContain('Tour of Heros');
  });
});
