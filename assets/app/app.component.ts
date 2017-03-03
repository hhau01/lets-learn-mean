import { Message } from './messages/message.model';
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    messages: Message[] = [
        new Message('Some message', 'Henry'),
        new Message('Something else', 'Billy'),
        new Message('Another message', 'Tommy')       
    ];
}