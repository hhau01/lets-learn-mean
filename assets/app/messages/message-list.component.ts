import { Message } from './message.model';
import { Component } from '@angular/core';

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message 
                [message]="message" 
                (editClicked)="message.content = $event"
                *ngFor="let message of messages"></app-message>
        </div>
    `
})
export class MessageListComponent {
    messages: Message[] = [
        new Message('Some message', 'Henry'),
        new Message('Something else', 'Billy'),
        new Message('Another message', 'Tommy')       
    ];
}