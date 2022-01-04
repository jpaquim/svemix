import { SvelteComponentTyped } from 'svelte';
import type { Writable } from 'svelte/store';
interface FormState {
	loading: boolean;
	data: any;
	errors: Record<string, string>;
	formError: string;
	redirect: string;
}
export declare type FormContext = Writable<FormState>;
declare const __propDef: {
	props: {
		[x: string]: any;
		action?: string;
		method?: string;
		validate?: (data: Record<any, any>) => Record<string, string>;
		class?: string;
	};
	events: {
		submit: CustomEvent<any>;
	} & {
		[evt: string]: CustomEvent<any>;
	};
	slots: {
		default: {
			loading: boolean;
			errors: Record<string, string>;
			data: any;
			formError: string;
		};
	};
};
export declare type FormProps = typeof __propDef.props;
export declare type FormEvents = typeof __propDef.events;
export declare type FormSlots = typeof __propDef.slots;
export default class Form extends SvelteComponentTyped<FormProps, FormEvents, FormSlots> {}
export {};
