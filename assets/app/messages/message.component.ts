import { Component, Input } from "@angular/core";
import { Message } from "./message.model";
@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    // styles limited to scope of this component
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class MessageComponent {
    @Input() message: Message;
}