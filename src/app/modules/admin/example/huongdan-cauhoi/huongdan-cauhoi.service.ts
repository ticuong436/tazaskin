import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnyKindOfDictionary } from 'lodash';
import { BehaviorSubject, map, Observable, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class huongdanCauhoiService {

 
  private urlApi = 'http://localhost:3000/huongdan'
  post: any;
  private _huongdans: BehaviorSubject<any | null> = new BehaviorSubject(null);


  constructor(private http:HttpClient) { }


  get huongdans$(): Observable<any[]>{
    return this._huongdans.asObservable();
  }
  get theme$(): Observable<any>{
    return this._huongdans.asObservable();
  }
  

  postHuongdan(data){
    return this.huongdans$.pipe(
      take(1),
      switchMap(huongdans => this.http.post(this.urlApi,data).pipe(
        map((newTheme)=>{
          this._huongdans.next([newTheme,...huongdans ]);

          return newTheme
        })
      ))
    )
  }

  getHuongdan(){
    return this.http.get(this.urlApi).subscribe({
      next: data => {
        this._huongdans.next(data)
      }
    })
  }
  deleteHuongdan(id){
    return this.huongdans$.pipe(
      take(1),
      switchMap(huongdans=>this.http.delete(this.urlApi+`/${id}`).pipe(map((isDelete => {
        
       const updatehuongdans =  huongdans.filter(e => e.id != id);
        
        this._huongdans.next(updatehuongdans)
        return isDelete

      }))))
    )
  }
  updateHuongdan(item){
    
    return this.huongdans$.pipe(
      take(1),
      switchMap(huongdans => this.http.patch(this.urlApi+`/${item.id}`,item).pipe(
          map((updateTheme) => {

              // Find the index of the updated tag
              const index = huongdans.findIndex(item => item.id === item.id);

              // Update the tag
              huongdans[index] = item;

              // Update the tags
              this._huongdans.next(huongdans);

              // Return the updated tag
              return updateTheme;
          })
      ))
  );
  }
  
}
