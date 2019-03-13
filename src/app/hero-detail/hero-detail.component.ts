import { Component, OnInit, Input} from '@angular/core';
// 导入数据类型
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // 子组件接收父组件的值
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
