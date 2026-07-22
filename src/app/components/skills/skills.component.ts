import { Component } from '@angular/core';
import { ResumeDataService } from '../../services/resume-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly skillGroups;

  constructor(resumeData: ResumeDataService) {
    this.skillGroups = resumeData.skillGroups;
  }
}
