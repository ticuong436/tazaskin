import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { BaivietComponent } from './baiviet/baiviet.component';
import {MaterialExampleModule} from 'material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MenuComponent } from './menu/menu.component';
import { ThemeComponent } from './theme/theme.component';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent,
        children:[
            {path:'baiviet', component: BaivietComponent},
            {path:'menu', component: MenuComponent},
            {path:'theme', component: ThemeComponent},


        ]
    },
    
];

@NgModule({
    declarations: [
        ExampleComponent,
        BaivietComponent,
        MenuComponent,
        ThemeComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        MaterialExampleModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        CKEditorModule
    ]
})
export class ExampleModule
{
}
