import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { landingHomeRoutes } from 'app/modules/landing/home/home.routing';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import {MaterialExampleModule} from 'material.module';
import { SwiperModule } from 'swiper/angular';
import { DichvuComponent } from './dichvu/dichvu.component';
@NgModule({
    declarations: [
        LandingHomeComponent,
        HomepageComponent,
        HeaderComponent,
        FooterComponent,
        DichvuComponent
    ],
    imports     : [
        RouterModule.forChild(landingHomeRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MaterialExampleModule,
        SwiperModule,
    ]
})
export class LandingHomeModule
{
}
