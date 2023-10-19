import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent {
  projects = [
    {
      image: 'assets/tictactoe_wide.png',
      title: 'TicTacToe',
      website: 'https://tictactoe-e327a.web.app/',
      description: "TicTacToe game using the Angular framework in JavaScript. The application is deployed as a Progressive Web Application (PWA) on the Firebase platform, providing seamless accessibility across devices. Users can conveniently install the game on their desktops with the browser's install button, ensuring a smooth transition to a desktop-like experience." 
    },
    {
      image: 'assets/spartan_soccer_sc.png',
      title: 'Spartan U8 Soccer',
      website: 'https://u8-spartan.onrender.com/',
      description: "Leveraging Flask as the backend foundation, the site employs HTML, CSS, and JavaScript to structure, style, and enhance its web pages. The responsive design is achieved through Bootstrap. The calendar is powered by the FullCalendar JavaScript library. Integrating the Google Sheets API facilitates real-time data retrieval and display from a Google Sheets spreadsheet. Hosted on Render platform."
    },
    // Add more project objects as needed
  ];
}
