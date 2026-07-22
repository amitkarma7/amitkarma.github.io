import { Component } from '@angular/core';
import { ResumeDataService } from '../../services/resume-data.service';

interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly contactLinks: ContactLink[];

  constructor(resumeData: ResumeDataService) {
    const p = resumeData.profile;
    this.contactLinks = [
      { label: 'Email', value: p.email, href: `mailto:${p.email}`, icon: '✉' },
      { label: 'Phone', value: p.phone, href: `tel:${p.phone.replace(/\s+/g, '')}`, icon: '☎' },
      { label: 'LinkedIn', value: p.linkedin, href: `https://${p.linkedin}`, icon: 'in' },
      { label: 'GitHub', value: p.github, href: `https://${p.github}`, icon: '⌥' },
    ];
  }
}
