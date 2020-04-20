import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { BashboardComponent } from './bashboard/bashboard.component';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAddComponent } from "./product-add/product-add.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {path:'home',component:HomeComponent,},
    {path:'about',component:AboutComponent},
    {path:'men',component:MenComponent},
     {path:'women',component:WomenComponent},
    {path:'contact',component:ContactComponent},
    {path:'admin',component:AdminComponent,
    children:[
      {path:'bashboard',component:BashboardComponent},
      { path: '', redirectTo: 'bashboard', pathMatch: 'full'},
       { path: 'bashboard', component: BashboardComponent},
        { path: 'product-add', component: ProductAddComponent},
          { path: 'product-list', component: ProductListComponent},
      
    ]
    },
];
    
    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }