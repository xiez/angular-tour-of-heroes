import { Observable, of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';


class MockHeroService {
  getHeroes(): Observable<{}> {
    const heroes = [
      {
        id: 1,
        name: 'foo'
      },
      {
        id: 2,
        name: 'bar'
      },
    ]

    return of(heroes);
  }

  addHero(hero: {}): Observable<{}> {
    return of(hero)
  }

  deleteHero(hero: Hero): Observable<Hero> {
    return of(hero)
  }
}

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],

      // inject mocks
      providers: [
        {
          provide: HeroService,
          useClass: MockHeroService,
        }
      ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return two heroes', () => {
    expect(component.heroes.length).toEqual(2);
  })

  describe('add', () => {
    it('input valid name', () => {
      component.add('baz')
      expect(component.heroes.length).toEqual(3);
    })

    it('input empty name', () => {
      component.add('')
      expect(component.heroes.length).toEqual(2);
    })
  })

  describe('delete', () => {
    it('choose valid hero', () => {
      component.delete(component.heroes[0])
      expect(component.heroes.length).toEqual(1);
    })
  })


});
