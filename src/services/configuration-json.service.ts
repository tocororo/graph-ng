import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Configuration } from '../app/models/configuration.interface';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationJsonService {
  URL_DEL_BACKEND= "https://127.0.0.1:5000/api/graph/config"
  private configurationJson$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private rulespropertieslabel$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient,private snackBar: MatSnackBar) { }
  getConfigurationJson(): Observable<Configuration> {
    return this.configurationJson$.asObservable();
  }

  setConfigurationJson(json: Configuration): void {
    this.configurationJson$.next(json);
    
  }
  getRulesPropertiesLabel(): Observable<string> {
    return this.rulespropertieslabel$.asObservable();

  }
 /**
 * Sets the label for the rules properties.
 * 
 * @param label The label to set.
 */
setRulesPropertiesLabel(label: string): void {
  this.rulespropertieslabel$.next(label);
}

  sendConfiguracionFile(configuration: File) {
    const formData = new FormData();
    
    formData.append('file', (configuration));
    console.log(formData.get('file'));

    this.http.post(this.URL_DEL_BACKEND, formData)
      .subscribe(
        response => {
          // Lógica para manejar la respuesta del backend
          console.log('Respuesta del backend:', response);
          this.snackBar.open("Proceso completado", 'Cerrar', {
            duration: 3000
          });
        },
        error => {
          // Lógica para manejar errores
          console.error('Error en la solicitud:', error);
          this.snackBar.open("Error en la solicitud ", 'Cerrar', {
            duration: 3000
          });
      
        }
      );
  }






}