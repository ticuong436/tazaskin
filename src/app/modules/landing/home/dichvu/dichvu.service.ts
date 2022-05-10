import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { DichVu } from './dichvu.types';
@Injectable({
  providedIn: 'root'
})
export class DichvuService {
  private urlApi = 'http://localhost:3000/baiviet'
  private _dichvu: BehaviorSubject<any | null> = new BehaviorSubject(null);
  // _dichvu$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private _dichvus: BehaviorSubject<DichVu[] | null> = new BehaviorSubject(null);

  constructor(private http: HttpClient,) { }
  
  get dichvus$(): Observable<DichVu[]>{
    return this._dichvus.asObservable();
  }
  get dichvu$(): Observable<DichVu[]>{
    return this._dichvu.asObservable();
  }

  

  getDichvu(): Observable<DichVu[]>{
    return this.http.get<DichVu[]>(this.urlApi).pipe(
      tap((dichvus) => {
          this._dichvus.next(dichvus);
      })
  );

  }
  getDichvuChitiet(id: any): Observable<DichVu>
    {
      return this.http.get<DichVu>(this.urlApi+`/${id}`).pipe(
        map((dichvu) => {

            // Update the dichvu
            this._dichvu.next(dichvu);
            
            
            // Return the dichvu
            return dichvu;

        }),
        switchMap((dichvu) => {

            if ( !dichvu )
            {
                return throwError('Could not found dichvu with id of ' + id + '!');
            }

            return of(dichvu);
        })
    );
    }
  
}
