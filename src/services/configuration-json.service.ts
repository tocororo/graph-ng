import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationJsonService {
  private configurationJson$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }
  getConfigurationJson(): Observable<any> {
    return this.configurationJson$.asObservable();
  }

  setConfigurationJson(json: any): void {
    this.configurationJson$.next(json);
    
  }
}
