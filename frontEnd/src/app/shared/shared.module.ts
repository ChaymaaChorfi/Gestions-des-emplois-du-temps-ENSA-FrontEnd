import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsHeaderComponent } from '../notifications-header/notifications-header.component';

@NgModule({
  declarations: [NotificationsHeaderComponent],
  imports: [CommonModule],
  exports: [NotificationsHeaderComponent], // Export for external usage
})
export class SharedModule {}
