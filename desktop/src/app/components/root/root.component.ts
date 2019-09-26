import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'basta-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {


  constructor(private readonly _messagingService: MessagingService) { }

  public ngOnInit() {
    this._messagingService.listen();
  }

}
