import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { user } from 'src/app/core/user.model';
import { userService } from 'src/app/services/user.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent  implements OnInit{

   // Decoradores ViewChild para obtener acceso a los componentes hijos en la plantilla
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;

   // Arreglo para almacenar los datos del informe
 userView!: user[]
 dataSource!: MatTableDataSource<user>
 originalData: user[] = []; // Propiedad para almacenar los datos originales

  // Bandera para controlar la visibilidad de los resultados de información
  showResultsInfo: boolean = false;
  searchTerm:string = '';// Propiedad para almacenar el término de búsqueda



 // Constructor del componente, inyectando el servicio reporteService
 constructor(private userService: userService,private dialog: MatDialog) {}


 ngOnInit(): void {
   
  this.getReporte();
  this.dataSource = new MatTableDataSource<user>([]);
 }

  getReporte() {
    // Llamada al método getReporteView del servicio reporteService para obtener el informe
    this.userService.getUsersService().subscribe((resp: any) => {
      // Almacenamiento de los datos del informe en el arreglo reporteVew
      this.originalData = resp;

     this.dataSource = new MatTableDataSource<user>(this.originalData);
       // Configuración del paginador en la fuente de datos
       this.dataSource.paginator = this.paginator;

       // Configuración del clasificador en la fuente de datos
       this.dataSource.sort = this.sort;
  
       // Activación de la bandera para mostrar los resultados de información
       this.showResultsInfo = true;
  
    });
    
  }
   // Arreglo de columnas a mostrar en la tabla
 displayedColumns: string[] = [ 'id','name','phone','username', 'website', 'ver'];


 search() {
  // Verifica si el término de búsqueda está vacío o contiene solo espacios en blanco
  if (this.searchTerm.trim() === '') {
    // Si el término de búsqueda está vacío, muestra el mensaje de error y no realiza la búsqueda
    return;
  }

  // Realiza la búsqueda según el término de búsqueda ingresado
  const searchTerm = this.searchTerm.toLowerCase();
  const filteredData = this.originalData.filter(user =>
    user.id.toString().includes(searchTerm) ||
    user.name.toLowerCase().includes(searchTerm) ||
    user.phone.toString().includes(searchTerm) ||
    user.username.toLowerCase().includes(searchTerm) ||
    user.website.toLowerCase().includes(searchTerm)
  );
  this.dataSource = new MatTableDataSource<user>(filteredData);
}


seeDetails(element: any) {
  // Aquí puedes implementar la lógica para mostrar el detalle del elemento, por ejemplo, abrir un modal, navegar a otra página, etc.
  console.log('Ver detalle de:', element);
  const dialogRef = this.dialog.open(UserDetailsComponent, {
    width: 'auto', // Ancho del modal
    data: element // Pasar los detalles del elemento al modal
  });
}

}
