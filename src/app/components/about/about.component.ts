import { Component } from '@angular/core';
import { ResumeDataService } from '../../services/resume-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly profile;
  readonly stats = [
    { label: 'Years of experience', value: '7+' },
    { label: 'Companies', value: '4' },
    { label: 'Faster release cycles', value: '30%' },
  ];

  constructor(resumeData: ResumeDataService) {
    this.profile = resumeData.profile;
  }
}
