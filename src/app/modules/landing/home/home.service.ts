import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { Dichvu } from './home.types';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private urlApi = 'http://localhost:3000/';
  private _courses: BehaviorSubject<Dichvu[] | null> = new BehaviorSubject(
    null
  );
  private _course: BehaviorSubject<any | null> = new BehaviorSubject(null);
  private _menu: BehaviorSubject<any | null> = new BehaviorSubject(null);
  private _cauhinh: BehaviorSubject<any | null> = new BehaviorSubject(null);


  constructor(private http: HttpClient) {}
  get courses$(): Observable<Dichvu[]> {
    return this._courses.asObservable();
  }
  get menu$(): Observable<any> {
    return this._menu.asObservable();
  }
  get course$(): Observable<Dichvu[]> {
    return this._course.asObservable();
  }
  get cauhinh$(): Observable<any> {
    return this._cauhinh.asObservable();
  }

  getKhoahoc() {
    return this.http.get<Dichvu[]>(this.urlApi+'baiviet').pipe(
      tap((courses) => {
        console.log(courses);
        
        this._courses.next(courses);
      })
    );
  }
  getMenu(){
    return this.http.get<any>(this.urlApi+`menu`).pipe(
      tap((menu) => {
        this._menu.next(menu);
        
      })
    );
  }
  
  // getKhoahocChitiet(slug:string): Observable<Dichvu> {
  //   return this.http
  //     .get<Dichvu>(`https://v2api.timona.edu.vn/baiviet/slug/${slug}`)
  //     .pipe(
  //       map((course) => {
  //         this._course.next(course);
          
  //         return course;
  //       }),
  //       switchMap((course) => {
  //         if (!course) {
  //           return throwError('Could not found course with id of ' + slug + '!');
  //         }

  //         return of(course);
  //       })
  //     );
  // }

  // getCauhinh(){
  //   return this.http.get<any>('https://v2api.timona.edu.vn/cauhinh').pipe(
  //     tap((cauhinh) => {
  //       console.log(cauhinh);
        
  //       this._cauhinh.next(cauhinh);
        
  //     })
  //   );
  // }
  
}
