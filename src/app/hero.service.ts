import { Injectable } from '@angular/core';
import {Hero}  from './hero';
import { HEROES } from './mock-heroes'
import { Observable, of } from 'rxjs';
// 会接收该服务的元数据对象，就像@Component()对组件的作用一样
@Injectable({
  providedIn: 'root'
})
// HeroService可以从任何地方获取数据
export class HeroService {
  // of(HEROES)会返回一个Observable<Hero[]>会发出单个值，这个值就是模拟英雄数据的数组
  
  getHeroes():Observable<Hero[]>{
    return of(HEROES)
  }

  constructor() { }
}
