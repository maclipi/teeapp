import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "tnc", pathMatch: "full" },
  { path: "home", loadChildren: "./home/home.module#HomePageModule" },
  { path: "tnc", loadChildren: "./tnc/tnc.module#TncPageModule" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
