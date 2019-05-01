import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TabComponent } from './tab/tab';
@NgModule({
	declarations: [TabComponent],
	imports: [],
	exports: [TabComponent],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA,
		NO_ERRORS_SCHEMA
	]
})
export class ComponentsModule { }
