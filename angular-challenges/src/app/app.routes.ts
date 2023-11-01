import { Routes } from "@angular/router";
import { NotFoundComponent } from "./components/not-found/not-found.component";

export const APP_ROUTES: Routes = [
    { 
        data: { title: 'Components' },
        path: '', loadChildren: () => import('./components/components.module').then((m) => m.ComponentsModule) 
    },
    { 
        data: { title: 'Directives' },
        path: 'directives', loadChildren: () => import('./directives/directive.module').then((m) => m.DirectiveModule) 
    },
    { 
        data: { title: 'Pipes' },
        path: 'pipes', loadChildren: () => import('./pipes/pipes.module').then((m) => m.PipesModule) 
    },
    { 
        data: { title: 'Other' },
        path: 'other', loadChildren: () => import('./other/other.module').then((m) => m.OtherModule) 
    },
    { 
        data: { title: 'Services' },
        path: 'services', loadChildren: () => import('./services/services.module').then((m) => m.ServicesModule) 
    },
    { path: '**', component:NotFoundComponent  }
]