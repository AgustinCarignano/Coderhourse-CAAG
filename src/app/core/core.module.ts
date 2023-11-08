import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatNativeDateModule, HttpClientModule],
})
export class CoreModule {}
