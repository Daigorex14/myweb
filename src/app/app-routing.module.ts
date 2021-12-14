import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { ContactComponent } from './components/contact/contact.component';
import { EventsComponent } from './components/events/events.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  {path:'', redirectTo: "/home", pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'albums',component: AlbumsComponent},
  {path:'contact',component: ContactComponent},
  {path:'events',component: EventsComponent},
  {path:'news',component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
