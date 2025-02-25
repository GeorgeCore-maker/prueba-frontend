import { AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { WeAreAmericanComponent } from "./pages/we-are-american/we-are-american.component";
import { JoinGenuineComponent } from './pages/join-genuine/join-genuine.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, InicioComponent, AboutUsComponent, WeAreAmericanComponent, JoinGenuineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollToFragment(); // Desplázate al fragmento
      }
    });
  }

  ngAfterViewInit() {
    this.scrollToFragment(); // Desplázate al fragmento después de cargar la vista
  }

  scrollToFragment() {
    const fragment = this.router.parseUrl(this.router.url).fragment; // Obtiene el fragmento
    if (fragment) {
      const element = document.getElementById(fragment); // Encuentra el elemento
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Desplázate suavemente
      }
    }
  }
}
