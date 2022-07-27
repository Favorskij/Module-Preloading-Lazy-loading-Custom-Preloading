import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomPreloadStrategy implements PreloadingStrategy {

  preloadedModules: string[] = [];

  preload(route: Route, load: () => Observable<any>): Observable<any> {


    if (route.data?.['preload'] && route.path != null) {

      // add the route path to the preloaded module array - добавить путь маршрута в предварительно загруженный массив модулей
      this.preloadedModules.push(route.path);

      // log the route path to the console - записать путь маршрута к консоли
      console.log('Предварительная загрузка: ' + route.path);

      return load();

    } else {

      return of(null);
    }
  }
}
