import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { MaterialModule} from './material/material.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { BasicElecmentsComponent } from './basic-elecments/basic-elecments.component';
import { AdvancedElementsComponent } from './advanced-elements/advanced-elements.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
imports:  [ BrowserModule, FormsModule,ReactiveFormsModule, MaterialModule,BrowserAnimationsModule,AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, BodyComponent, FooterComponent,
                  BasicElecmentsComponent,AdvancedElementsComponent,ReactiveFormsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
