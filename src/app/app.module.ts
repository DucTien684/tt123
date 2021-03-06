import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { BashboardComponent } from './bashboard/bashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';



@NgModule({

  declarations: [
     AppComponent,
      HelloComponent,
      AboutComponent,
      HomeComponent,
      MenComponent,
      WomenComponent,
      ContactComponent,
      AdminComponent,
      BashboardComponent,
      ProductListComponent,
      ProductAddComponent,
      ProductManagerComponent,
      
 
      
       ],
         imports:[
            BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
