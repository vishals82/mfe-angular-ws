import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const URL = 'http://localhost:3000/remoteEntry.js';
const URL2 = 'http://localhost:3001/remoteEntry.js';
const URL3 = 'http://localhost:3002/remoteEntry.js';


const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
  //   pathMatch: 'full'
  // },
  {
    path: 'mfe1',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: URL,
      exposedModule: './Mfe1Module'
    })
    .then(m => m.MfeModule)
  },
  {
    path: 'mfe2',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: URL2,
      exposedModule: './Mfe2Module'
    })
    .then(m => m.Mfe2Module)
  },
  {
    path: 'mfe3',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: URL3,
      exposedModule: './Mfe3Module'
    })
    .then(m => m.Mfe3Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
