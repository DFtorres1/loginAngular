
import {Component, ElementRef, HostListener, OnInit, ViewChild} from "@angular/core";
import {StorageService} from "../core/services/storage.service";
import {User} from "../core/models/user.model";
import {AuthenticationService} from "../login/shared/authentication.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['/assets/home.component.css']
})

export class HomeComponent implements OnInit {
  //Elementos necesarios para el menu sticky
  @ViewChild('stickyMenu') menuElement: ElementRef;
  sticky = false;
  elementPosition: any;

  cssUrl: string;
  table1 = true;
  table2 = false;

  user: User;

  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService,
    public sanitizer: DomSanitizer
  ) { 
    this.cssUrl = '/assets/home.component.css';
  }

  ngOnInit() {
    this.user = this.storageService.getCurrentUser();
    
  }

  //Funcion para el menu sticky
  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  //Funciones para la visualizacion de las tablas
  public showTable1() {
    return (this.table1 = true, this.table2 = false);
  }

  public showTable2() {
    return (this.table1 = false, this.table2 = true);
  }

  //Boton logout
  public logout(): void {
    this.storageService.logout();

    /*
    this.authenticationService.logout().subscribe(
        response => {if(response) {this.storageService.logout();}}
    );
    */

  }

  //Metodo de funcionamiento del menu sticky
  @HostListener('window:scroll', ['$event'])
    handleScroll() {
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition) {
        this.sticky = true;
      } else {
        this.sticky = true;
      }
    }

}
