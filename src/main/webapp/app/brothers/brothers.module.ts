import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Brother } from './brother.model';

@NgModule({
    imports: [
        Brother
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BrotherModule {}