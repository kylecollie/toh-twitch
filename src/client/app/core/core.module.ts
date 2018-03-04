import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SharedModule } from "../shared/shared.module";
import { ToastService } from "./toast.service";

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  providers: [ToastService]
})
export class CoreModule {}
