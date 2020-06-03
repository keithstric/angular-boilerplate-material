import { Component, OnInit } from '@angular/core';
import {UiService} from 'src/app/core/services/ui/ui.service';
import {PROJECT_NAME} from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
