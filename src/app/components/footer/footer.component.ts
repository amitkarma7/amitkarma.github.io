import { Component } from '@angular/core';
import { ResumeDataService } from '../../services/resume-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly profile;
  readonly year = new Date().getFullYear();

  constructor(resumeData: ResumeDataService) {
    this.profile = resumeData.profile;
  }
}
