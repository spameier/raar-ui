import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout.component';
import { SmallModalComponent } from './components/small-modal.component';
import { LoginComponent } from './components/login.component';
import { LoginService, AuthService, RemoteService, LoginWindowService, RefreshService } from './services/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    LayoutComponent,
    SmallModalComponent,
    LoginComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    LayoutComponent,
    SmallModalComponent,
    LoginComponent,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [LoginService, AuthService, RemoteService, RefreshService, LoginWindowService]
    };
  }
}
