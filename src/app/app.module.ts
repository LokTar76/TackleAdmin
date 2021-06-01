import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReelComponent } from './reel/reel.component';
import { RodComponent } from './rod/rod.component';
import { ComboComponent } from './combo/combo.component';
import { LureComponent } from './lure/lure.component';
import { LineComponent } from './line/line.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { ShowReelComponent } from './reel/show-reel/show-reel.component';
import { AddEditReelComponent } from './reel/add-edit-reel/add-edit-reel.component';
import { ShowRodComponent } from './rod/show-rod/show-rod.component';
import { AddEditRodComponent } from './rod/add-edit-rod/add-edit-rod.component';
import { ShowComboComponent } from './combo/show-combo/show-combo.component';
import { AddEditComboComponent } from './combo/add-edit-combo/add-edit-combo.component';
import { ShowLureComponent } from './lure/show-lure/show-lure.component';
import { AddEditLureComponent } from './lure/add-edit-lure/add-edit-lure.component';
import { ShowLineComponent } from './line/show-line/show-line.component';
import { AddEditLineComponent } from './line/add-edit-line/add-edit-line.component';
import { SharedService } from './shared.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ReelModule } from './reel/reel.module';
import { EventEmitterService } from './event-emitter.service';

@NgModule({
  declarations: [
    AppComponent,
    ReelComponent,
    RodComponent,
    ComboComponent,
    LureComponent,
    LineComponent,
    NavigationComponent,
    LayoutComponent,
    ShowReelComponent,
    AddEditReelComponent,
    ShowRodComponent,
    AddEditRodComponent,
    ShowComboComponent,
    AddEditComboComponent,
    ShowLureComponent,
    AddEditLureComponent,
    ShowLineComponent,
    AddEditLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ReelModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SharedService,
    EventEmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
