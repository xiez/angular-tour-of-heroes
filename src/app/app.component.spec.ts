import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const routes: Routes = []

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MessagesComponent,
      ],
      imports: [
        FormsModule,
        RouterModule.forRoot(routes),
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.debugElement.componentInstance;
    })
  }));

  it('should create the app', () => {
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'Tour of Heros'`, () => {
    expect(comp.title).toEqual('Tour of Heros');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('h1').textContent).toContain('Tour of Heros');
  });
});
