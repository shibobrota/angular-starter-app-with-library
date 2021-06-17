import { NgModule } from '@angular/core';
import { MagicLibraryComponent } from './magic-library.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MagicLibraryComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [
    MagicLibraryComponent
  ]
})
export class MagicLibraryModule { }
