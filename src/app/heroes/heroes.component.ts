import { Component, OnInit } from '@angular/core';
// 导入数据类型
import { Hero } from '../hero';
// // 导入数据
// import { HEROES } from '../mock-heroes'
import {HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // 给数据赋值
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  // heroes=HEROES;
  //定义一个selectHero属性，此时还没有选中的时候数据是空值
  selectedHero:Hero;
  heroes: Hero[];
  // 往构造函数中添加一个私有的heroService,其类型为HeroService
  // 1.声明了heroService属性 2,把他标记成为一个HeroService的注入点
  constructor(private heroService: HeroService) { }
  // 绑定一个onSelect属性，并且为selectedHero属性赋值
  onSelect(hero:Hero):void{
    this.selectedHero=hero
  }
  // 创建函数，以从服务中获取这些英雄的数据
  // 函数的写法:函数名:是否有返回值
  getHeroes():void{
    // 调用的是服务中的serve返回的值
    // heroService.getHeroes()必须具备某种形式的异步函数签名,可以使用回调函数
    //可以返回Promise,也可以返回observable
    // this.heroes=this.heroService.getHeroes()
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes)
  }
  ngOnInit() {
    this.getHeroes()
  }

}
