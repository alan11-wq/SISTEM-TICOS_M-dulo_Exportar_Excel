import { Component } from '@angular/core';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  fileName= 'ExcelSheet.xlsx'; 
  userList = [
    {
      "id": 1,
      "name": "Alan Jesús López Alcántara",
      "username": "Alan11",
      "email": "alan11@gmail.com"
    },
    {
      "id": 2,
      "name": "Brandon Daniel Lucio Alba",
      "username": "Daniel22",
      "email": "Daniel22@gmail.com"
    },
    {
      "id": 3,
      "name": "Jaciel Aaron García Cruz",
      "username": "Aaron33",
      "email": "aaron33@gmail.com"
    },
    {
      "id": 4,
      "name": "Griselda Cortes Barrera",
      "username": "Griselda44",
      "email": "griselda44@tese.edu.mx"
    },
    {
      "id": 5,
      "name": "Joel Martinez Torres",
      "username": "Joel55",
      "email": "joel55@hotmail.com"
    }
  ]
  exportexcel(): void 
    {
       /* Representar el ID de la tabla*/   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* Generar el libro y hoja de trabajo de excel*/
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* Guardar el archivo*/
       XLSX.writeFile(wb, this.fileName);
			
    }
}
