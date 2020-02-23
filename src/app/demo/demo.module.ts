import { NgModule } from "@angular/core";
import { DemoComponent } from "./demo.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [DemoComponent],
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: DemoComponent
      }
    ])
  ]
})
export class DemoModule {}
