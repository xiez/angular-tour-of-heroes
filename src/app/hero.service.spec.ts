import { of } from 'rxjs'; // Add import
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Hero } from './hero';
import { HeroService } from './hero.service';

describe('HeroService', () => {
    let heroService: HeroService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HeroService]
        })

        heroService = TestBed.get(HeroService)
    });


  it('should be created', () => {
    expect(heroService).toBeTruthy();
  });


    it('getHeroes() should return a collection of heroes', () => {
        const heroResp = [
            {
                id: 1,
                name:'foo',
            },
            {
                id: 2,
                name:'bar',
            }
        ]

        let response;
        spyOn(heroService, 'getHeroes').and.returnValue(of(heroResp))

        heroService.getHeroes().subscribe(res => {
            response = res
        })
        expect(response).toEqual(heroResp);
    });


    // it('addHero() should add a hero', () => {
    //     const heroResp = [
    //         {
    //             id: 1,
    //             name: 'baz'
    //         }
    //     ]

    //     let response;
    //     spyOn(heroService, 'addHero').and.returnValue(of(heroResp))

    //     heroService.addHero({name: 'baz'} as Hero).subscribe(res => {
    //         response = res
    //     })

    //     expect(response).toEqual(heroResp)
    // })

});

