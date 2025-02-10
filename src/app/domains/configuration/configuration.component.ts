import { Component } from '@angular/core';

import { LayoutAccountComponent } from '@/shared/ui/templates/layout-account/layout-account.component';

@Component({
  selector: 'app-configuration',
  imports: [LayoutAccountComponent],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.scss',
})
export class ConfigurationComponent {}
