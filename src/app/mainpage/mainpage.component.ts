import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {
  constructor(private router: Router) { }

  redirectToProductComponent() {
    this.router.navigate(['/product']); 
  }

  redirectToAboutComponent() {
    this.router.navigate(['/about']); 
  }
  conferences = [
    {
      id: 1,
      name: 'AI and Robotics Conference',
      date: 'November 1-3, 2024',
      location: 'Tokyo, Japan',
      description: 'Dive into the world of artificial intelligence and robotics with leading experts. Explore groundbreaking advancements and network with professionals shaping the future of technology.',
      image: 'https://www.automate.org/images/ogImages/RIA-blog-ai-robotics.jpeg',
    },
    {
      id: 2,
      name: 'Sustainable Energy Summit',
      date: 'December 5-7, 2024',
      location: 'Berlin, Germany',
      description: 'Join thought leaders and innovators in the sustainable energy sector. Discuss and discover new technologies and strategies for a sustainable future.',
      image: 'https://www.mepmiddleeast.com/cloud/2021/07/06/fcI7UNSV-wfes_1-1200x675.jpeg',
    },
    {
      id: 3,
      name: 'Education Innovation Forum',
      date: 'January 10-12, 2025',
      location: 'Sydney, Australia',
      description: 'A platform for educators, policymakers, and tech enthusiasts to discuss the future of education. Learn about the latest innovations and practices transforming learning environments.',
      image: 'https://www.aspeninstitute.org/wp-content/uploads/files/content/images/ASP_EIFElogo_RGB_0.jpg',
    },
  ];

  redirectToConferenceDetails(id: number) {
    this.router.navigate(['/conference', id]); 
  }
}
