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
      description: "I have created an engaging TicTacToe application using the Angular framework in JavaScript. Leveraging the power of Angular, I have built a dynamic and interactive gaming experience. The application is deployed as a Progressive Web Application (PWA) on the Firebase platform, providing seamless accessibility across devices. Users can conveniently install the game on their desktops with the browser's install button, ensuring a smooth transition to a desktop-like experience. This project showcases my knowledge in Angular, JavaScript, and PWA development, delivering a captivating and user-friendly gaming application." 
    },
    {
      image: 'assets/spartan_soccer_sc.png',
      title: 'Spartan U8 Soccer',
      website: 'https://u8-spartan.onrender.com/',
      description: "Leveraging Flask as the backend foundation, the site employs HTML, CSS, and JavaScript to structure, style, and enhance its web pages. The responsive design is achieved through Bootstrap, ensuring the website's adaptability across various devices. The interactive calendar is powered by the FullCalendar JavaScript library. Integrating the Google Sheets API facilitates real-time data retrieval and display from a Google Sheets spreadsheet. Hosting on the Render platform ensures reliable and efficient deployment."
    },
    // Add more project objects as needed
  ];
}
