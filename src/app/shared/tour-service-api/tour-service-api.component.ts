import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {HeaderComponent} from '../header/header.component';
import {LIST_COMPONENTS} from '../list';

@Component({
    selector: 'app-tour-service-api',
    templateUrl: './tour-service-api.component.html',
    standalone: true,
    imports: [HeaderComponent, LIST_COMPONENTS, NgFor]
})
export class TourServiceApiComponent {

    methods: TourServiceMethod[] = [{
        name: 'start()',
        description: 'Starts the tour'
    }, {
        name: 'startAt(stepId: number | string)',
        description: 'Start the tour at the step with stepId or at the specified index'
    }, {
        name: 'end()',
        description: 'Ends the tour'
    }, {
        name: 'pause()',
        description: 'Pauses the tour'
    }, {
        name: 'resume()',
        description: 'Resumes the tour'
    }, {
        name: 'next()',
        description: 'Goes to the next step'
    }, {
        name: 'prev()',
        description: 'Goes to the previous step'
    }];

}

interface TourServiceMethod {
    name: string;
    description: string;
}
