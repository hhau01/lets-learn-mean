import { Message } from './message.model';
import { MessageService } from './message.service';
import { Component } from '@angular/core';


@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    providers: [MessageService]
})

export class MessageInputComponent {
    constructor(private messageService: MessageService) {}

    onSave(value: string) {
        const message = new Message(value, 'Henry');
        this.messageService.addMessage(message);
        
    }
}