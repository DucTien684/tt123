import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { BashboardComponent } from './bashboard/bashboard.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {path:'home',component:HomeComponent,},
    {path:'about',component:AboutComponent},
    {path:'men',component:MenComponent},
     {path:'women',component:WomenComponent},
    {path:'contact',component:ContactComponent},
    {path:'admin',component:AdminComponent},
      {path:'bashboard',component:BashboardComponent},
      
     
    ]
    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }