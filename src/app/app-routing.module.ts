import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: 'module1'
  },
  //----------------MODULE1 -----------------------------------------------
  { path: "module1",
    loadChildren: () =>
      import(
        "../app/pages/module1/module1.module"
      ).then((module) => module.Module1Module),
  },
  //----------------MODULE2 -----------------------------------------------
  { path: "module2",
    loadChildren: () =>
      import(
        "../app/pages/module2/module2.module"
      ).then((module) => module.Module2Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
