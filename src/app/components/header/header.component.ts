import { Component, inject } from '@angular/core';
import { ActivatedRoute,Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RouterModule]
})
export class HeaderComponent {
  public router = inject(Router);
  
  public isActive(currentRoute: string) : boolean {
    return this.router.url === currentRoute;
  }
}
