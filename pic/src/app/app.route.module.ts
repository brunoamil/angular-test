import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PhotoListResolver } from "./photos/photo-list/photo-list.resolver";
import { AuthGuard } from "./core/auth/auth.guard";
import { PhotoDetailComponent } from "./photos/photo-detail/photo-detail.componet";


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    { 
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    { 
        path: 'user/:userName',
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver
        },
        data: {
            title: 'TimeLine'
        } 
    },
    { 
        path: 'p/add',
        component: PhotoFormComponent,
        canActivate: [ AuthGuard ],
        data: {
            title: 'Enviar foto'
        }
    },
    { 
        path: 'p/:photoId',
        component: PhotoDetailComponent,
        data: {
            title: 'Listando fotos'
        }
    },
    { 
        path: 'not-found', 
        component: NotFoundComponent,
        data: {
            title: 'Não encontrado'
        } 
    },
    { 
        path: '**', 
        redirectTo: 'not-found' 
    }

];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}