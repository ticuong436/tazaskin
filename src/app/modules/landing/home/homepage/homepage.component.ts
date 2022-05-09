import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, FreeMode, Autoplay } from 'swiper';

SwiperCore.use([Pagination, FreeMode, Navigation, Autoplay]);

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
    config;
    constructor() {}

    ngOnInit(): void {
        this.config = {
            loop: true,
            navigation: true,
            pagination: { clickable: true },

            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },

            freeMode: true,
        };
    }
}
