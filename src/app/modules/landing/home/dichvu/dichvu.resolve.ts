import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { DichvuService } from './dichvu.service';
import { DichVu } from './dichvu.types';



@Injectable({
    providedIn: 'root'
})
export class DichvuResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _Dichvu: DichvuService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DichVu[]>
    {
        return this._Dichvu.getDichvu();
    }
}

@Injectable({
    providedIn: 'root'
})
export class DichvuDetailResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(
        private _Dichvu: DichvuService,
        private _router: Router
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DichVu>
    {
        const slug = route.paramMap.get('slug');
        console.log(slug);
        
        return this._Dichvu.getDichvuChitiet(slug)
                   .pipe(
                       // Error here means the requested contact is not available
                       catchError((error) => {

                           // Log the error
                           console.error(error);

                           // Get the parent url
                           const parentUrl = state.url.split('/').slice(0, -1).join('/');
                            
                           // Navigate to there
                           this._router.navigateByUrl(parentUrl);

                           // Throw an error
                           return throwError(error);
                       })
                   );
    }
}

