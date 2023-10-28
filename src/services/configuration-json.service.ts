import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationJsonService {
  private configurationJson$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private rulespropertieslabel$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() { }
  getConfigurationJson(): Observable<any> {
    return this.configurationJson$.asObservable();
  }

  setConfigurationJson(json: any): void {
    this.configurationJson$.next(json);
    
  }
  getRulesPropertiesLabel(): Observable<any> {
    return this.rulespropertieslabel$.asObservable();

  }
  setRulesPropertiesLabel(label: string): void {
    this.configurationJson$.next(label);
    
  }

  findEntityByName(): Observable<any>{
let properties
let label
this.getRulesPropertiesLabel().subscribe(label=>{
  label=label
})
if (label) {
  this.getConfigurationJson().subscribe(config_json=>{
    console.log("config_json",config_json.entities);
    console.log("aaa",label);

  })
}else{
  console.log("error");
  
}




return this.rulespropertieslabel$.asObservable();
}}