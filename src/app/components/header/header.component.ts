import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  imports: [RouterModule]
})
export class HeaderComponent {

  public activeRoute = inject(ActivatedRoute);
  
  public isActive(currentRoute: string) : boolean {
    const url: any = this.activeRoute.url;
    return url.value[0].path === currentRoute;
  }
}
