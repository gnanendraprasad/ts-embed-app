import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReportsModule } from './reports/reports.module';

const routes: Routes = [
  { path: '', redirectTo: 'reports', pathMatch: 'full' },
  { path: 'reports', loadChildren: () => ReportsModule },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent]
})
export class AppModule {}
