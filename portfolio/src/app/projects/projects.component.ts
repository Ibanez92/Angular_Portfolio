import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent {
  projects = [
    {
      image: 'assets/spartan_soccer_sc.png',
      title: 'Project 1',
      description: 'Description of Project 1'
    },
    {
      image: 'assets/recipeapp.png',
      title: 'Project 2',
      description: 'Description of Project 2'
    },
    // Add more project objects as needed
  ];
}
