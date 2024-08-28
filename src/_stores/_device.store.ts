import {acceptHMRUpdate, defineStore} from 'pinia';
// @ts-ignore
import Bowser from "bowser";

export interface IDeviceState
{
	isMobile: boolean,
	isiOS: boolean,
	isIE11: boolean,
	isFirefox: boolean,
	isSafari: boolean,
	random: boolean,
	isSM: boolean,
	isMD: boolean,
	isLG: boolean,
	isXL: boolean,
	isPortrait: boolean,
	isLandscape: boolean,
	urlParams: object,
}

//////////////////////////////////////////////////////////////////////////////////////////////////
//  useStore

export const useDeviceStore = defineStore('_device.store', {
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//  State
	state: ():IDeviceState => ({
		isMobile: false,
		isiOS: false,
		isIE11: false,
		isFirefox: false,
		isSafari: false,
		random: false,
		isSM: false,
		isMD: false,
		isLG: false,
		isXL: false,
		isPortrait: false,
		isLandscape: false,
		urlParams: {},
	}),

	//////////////////////////////////////////////////////////////////////////////////////////////////
	//  Getters
	getters: {
		// getDevice: (this) => this.device,
	},

	//////////////////////////////////////////////////////////////////////////////////////////////////
	//  Actions
	//  -   Don't use fat arrow functions as 'this' will be incorrect
	//  -   Unhandled catch block errors are caught by a Pinia plugin - see @/_stores/DecoratedPinia.ts
	//  -   init() actions are checked by a plugin against an INITIALISED decoration - see @/_stores/DecoratedPinia.ts
	actions: {
		init ()
		{
			//  @ts-ignore
			if(this.INITIALISED) return;

			console.log("initDevice");
			const breakpoints = [
				{test: "(min-width: 576px)", action: this.updateSM, check: {}},
				{test: "(min-width: 768px)", action: this.updateMD, check: {}},
				{test: "(min-width: 1057px)", action: this.updateLG, check: {}},
				{test: "(min-width: 1234px)", action: this.updateXL, check: {}},
			];
			breakpoints.map((breakpoint) => {
				breakpoint.check = window.matchMedia(breakpoint.test);
				// @ts-ignore
				breakpoint.check.addListener((mediaQueryList) => breakpoint.action({mediaQueryList: mediaQueryList, }));
				breakpoint.action({mediaQueryList: breakpoint.check, });
			});

			const orientations = [
				{test: "(orientation: portrait)", action: this.updatePortrait, check: {}},
				{test: "(orientation: landscape)", action: this.updateLandscape, check: {}},
			];

			orientations.map((orientation) => {
				orientation.check = window.matchMedia(orientation.test);
				// @ts-ignore
				orientation.check.addListener((mediaQueryList) => orientation.action({mediaQueryList: mediaQueryList, }));
				orientation.action({mediaQueryList: orientation.check, });
			});

			const fromPairs = (arr) => arr.reduce((acc, val) => (acc[val[0]] = val[1], acc), {})
			const splitQuery = window.location.search.substring(1).split("&");
			const queryPairs = splitQuery.map((query) => query.split("="));
			const params = fromPairs(queryPairs);

			this.updateURLParams({params: params, });
			this.updateDevice({outputs: Bowser.parse(window.navigator.userAgent), });
		},

		updateSM({ mediaQueryList, }) {
			this.isSM = mediaQueryList.matches;
		},
		updateMD ({ mediaQueryList, }) {
			this.isMD = mediaQueryList.matches;
		},
		updateLG ({ mediaQueryList, }) {
			this.isLG = mediaQueryList.matches;
		},
		updateXL ({ mediaQueryList, }) {
			this.isXL = mediaQueryList.matches;
		},
		updatePortrait ({ mediaQueryList, }) {
			this.isLandscape = !(this.isPortrait = mediaQueryList.matches);
		},
		updateLandscape ({ mediaQueryList, }) {
			this.isPortrait = !(this.isLandscape = mediaQueryList.matches);
		},
		updateURLParams ({ params, }) {
			this.urlParams = params;
		},
		updateDevice({ outputs, }) {
			this.isMobile = (outputs.platform.type === "mobile");
			this.isiOS = (outputs.os.name === "iOS");
			this.isFirefox = (outputs.browser.name === "Firefox");
			this.isSafari = (outputs.browser.name === "Safari");
			this.isIE11 = (Object.hasOwnProperty.call(window, "ActiveXObject") && !window['ActiveXObject']);
			// alert(`outputs.browser.name ${outputs.browser.name} isMobile ${this.isMobile} isFirefox ${this.isFirefox}`);
			// this.isSnowWhite = (skin.snowWhite && !this.isIE11);// && !this.isFirefox);
			let test = 0;
		},
	},
})

//////////////////////////////////////////////////////////////////////////////////////////////////
//  acceptHMRUpdate
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useDeviceStore, import.meta.hot))
}


//////////////////////////////////////////////////////////////////////////////////////////////////
//  Private



//////////////////////////////////////////////////////////////////////////////////////////////////
//  Interfaces/Types

