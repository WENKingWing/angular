import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 使用表单的双向数据绑定
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// 每个组件都必须声明在(且只能声明在)一个NgModule中
//这是因为 Angular CLI 在生成 HeroesComponent 组件的时候就自动把它加到了 AppModule 中
//
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
