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
      title: 'Spartan U8 Wesite',
      description: "Leveraging Flask, a Python micro web framework, as the backend foundation, the site employs HTML, CSS, and JavaScript to structure, style, and enhance its web pages. The responsive design is achieved through Bootstrap, ensuring the website's adaptability across various devices. The interactive calendar is powered by the FullCalendar JavaScript library, enabling users to stay updated on team events. Integrating the Google Sheets API facilitates real-time data retrieval and display from a Google Sheets spreadsheet. The Jinja2 templating engine dynamically renders content, enhancing the site's flexibility. Finally, hosting on the Render platform ensures reliable and efficient deployment."
    },
    {
      image: 'assets/recipeapp.png',
      title: 'Recipe Website',
      description: 'Description of Project 2'
    },
    // Add more project objects as needed
  ];
}
