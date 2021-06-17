import { NgModule } from '@angular/core';
import { MagicLibraryComponent } from './magic-library.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PopupComponent } from './popup/popup.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    MagicLibraryComponent,
    PopupComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MatDialogModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule
  ],
  exports: [
    MagicLibraryComponent
  ],
  entryComponents: [PopupComponent]
})
export class MagicLibraryModule { }
