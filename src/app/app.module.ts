import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeadMenuComponent } from './head-menu/head-menu.component';
import { FootComponent } from './foot/foot.component';
import { FootMenuComponent } from './foot-menu/foot-menu.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
// import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RouterModule, Routes } from '@angular/router';

const routesConfi: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent

  },
  {
    path: 'list',
    component: ListItemsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadMenuComponent,
    FootComponent,
    FootMenuComponent,
    MainContainerComponent,
    ListItemsComponent,
    ItemComponent
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routesConfi)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
