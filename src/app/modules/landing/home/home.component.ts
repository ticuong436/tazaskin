import { Component, ViewEncapsulation } from '@angular/core';
import {HomeService} from './home.service'
@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent
{
    items:any;
    menu:any;
    menuArray;
    Array = [];
    isShow = true;
    timedOutCloser;
    /**
     * Constructor
     */
     toggleMenu() {
        this.timedOutCloser = setTimeout(() => {
            this.isShow = !this.isShow;
        }, 150);
    }
    constructor(private homeService: HomeService)
    {
    }
     nest = (items, id = '', link = 'parentid') => items.filter(item => item[link] == id).map(item => ({
        ...item,
        children: this.nest(items, item.id)
    }));
    ngOnInit(): void {
    
     
        this.homeService.getMenu().subscribe((dataMenu)=>{
            
  
          this.homeService.getKhoahoc().subscribe((dataBaiviet) =>{
         
            this.items=dataBaiviet
            const array = []
            dataMenu.forEach(v1 => {
              const x = [];
              dataBaiviet.forEach(v2 =>{
                if(v1.id === v2.parentid){
                  x.push(v2);
                }
                v1.Baiviet = x;
              })
            });
            this.menu = this.nest(dataMenu); 
            console.log(this.menu);
          
          })
  
  
  
         
    
          
    
        
        
  
           
        
        })
       
       
        
        
        
        
    
      }
    
}
