import { CommonModule } from "@angular/common";
import { Component, computed, inject, input } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { ButtonComponent } from "@components/button/button.component";

@Component({
    selector: 'app-menuitens',
    standalone: true,
    imports: [ButtonComponent, CommonModule, RouterModule],
    templateUrl: './menuitens.component.html',
    styleUrl: './menuitens.component.scss',
})
export class MenuitensComponent {
    router = inject(Router)

    mobile = input(false);

    getClass = computed(() =>
        this.mobile() ? 'd-flex list-mobile' : 'd-flex list'
    );

    scrollToSection(section) {
        this.router.navigate(["/home"])
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        })
    }
}
