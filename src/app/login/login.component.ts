import { Component, HostListener, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'margin', '0px');
  }

  private readonly OriginalWidthImage = 1920;
  private readonly OriginalHeightImage = 1080;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.resizeImage();
  }

  ngOnInit() {
    this.resizeImage();
  }

  resizeImage() {
    const widthWindow = window.innerWidth;
    const heightWindow = window.innerHeight;

    const EscaleWidthFactor = widthWindow / this.OriginalWidthImage;
    const EscaleHeightFactor = heightWindow / this.OriginalHeightImage;

    const EscaleFactor = Math.min(EscaleWidthFactor, EscaleHeightFactor);

    document.body.style.backgroundSize = `${EscaleFactor * 100}%`;
  }
}
