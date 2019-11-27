import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule
} from '@angular/material/';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule
], exports: [
  BrowserAnimationsModule,
  FormsModule,
  CommonModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule
],
  declarations: []
})

export class MaterialModule { }
