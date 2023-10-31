import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Configuration } from '../app/models/configuration.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationJsonService {
  private configurationJson$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private rulespropertieslabel$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() { }
  getConfigurationJson(): Observable<Configuration> {
    return this.configurationJson$.asObservable();
  }

  setConfigurationJson(json: Configuration): void {
    this.configurationJson$.next(json);
    
  }
  getRulesPropertiesLabel(): Observable<string> {
    return this.rulespropertieslabel$.asObservable();

  }
  setRulesPropertiesLabel(label: string): void {
    this.rulespropertieslabel$.next(label);
    
  }






}