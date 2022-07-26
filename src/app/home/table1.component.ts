import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Factor } from '../core/models/factor.model';
import { TableGet } from '../core/models/table.model';
import { TableService } from './shared/tables.service';

@Component({
  selector: 'table-basic',
  styleUrls: ['./assets/tables.component.css'],
  templateUrl: 'table1.component.html',
  encapsulation: ViewEncapsulation.None
})

export class TableBasic implements OnInit {
  //Definicion de las variables a usar
  displayedColumns: string[] = ['codEmpresa', 'nombre'];
  dataSource: any;
  factores: Factor[] = [];
  listafactores: Factor[] = [];

  //Variable para el almacenamiento local de la tabla
  private localStorageService: Storage;


  constructor(private tableService: TableService) {
    this.localStorageService = localStorage;
    this.dataSource = this.loadTable();
  }

  ngOnInit() {
    this.tableService.getTableFactor().subscribe(
      result => this.setCurrentTable(result));

    this.dataSource = this.loadTable();
    this.factores = this.dataSource.lista;

    this.factores.map(factor => {
      this.listafactores.push(factor);
    });

    console.log(this.listafactores);

  }

  //Setter de la tabla en el almacenamiento
  setCurrentTable(table: TableGet): void {
    this.localStorageService.setItem('currentTable', JSON.stringify(table));
  }

  //Loader de la tabla guardada en el almacenamiento
  loadTable(): TableGet {
    var tableStr = this.localStorageService.getItem('currentTable');
    return (tableStr) ? <TableGet>JSON.parse(tableStr) : null;
  }

}
