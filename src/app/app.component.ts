import {Component, inject} from '@angular/core';
import {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiDocMainModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiModeModule} from '@taiga-ui/core';
import {TuiThemeAndroidModule, TuiThemeIosModule} from '@taiga-ui/addon-mobile';
import {NgIf} from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        TuiDocMainModule,
        TuiLinkModule,
        TuiModeModule,
        TuiThemeAndroidModule,
        TuiThemeIosModule,
        NgIf
    ]
})
export class AppComponent {

    readonly isAndroid = inject(TUI_IS_ANDROID);
    readonly isIos = inject(TUI_IS_IOS);

}
