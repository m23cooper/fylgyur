export default function (plop) {
	plop.setGenerator('Layer', {
		description: 'Generate a Layer',
		prompts: [
			{
				type: 'input',
				name: 'class',
				message: 'class name please:'
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/_layers/{{ kebabCase class }}/_{{ kebabCase class}}.layer.vue',
				templateFile: 'plop-templates/VueLayer.hbs'
			},
			{
				type: "append",
				path: "src/_layers/firebase.ts",
				template: "export * from './{{ kebabCase class }}/_{{kebabCase class}}.layer.vue';\n",
			},
		],
	});
	plop.setGenerator('View', {
		description: 'Generate a View',
		prompts: [
			{
				type: 'input',
				name: 'class',
				message: 'class name please:'
			},
			{
				type: 'input',
				name: 'parent',
				message: 'Containing layer?  Leave blank to add to @/_components'
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/_layers/{{camelCase parent}}/{{pascalCase class}}View.vue',
				templateFile: 'plop-templates/VueView.hbs'
			},
		],
	});
	plop.setGenerator('VueComponent', {
		description: 'Vue Component logic',
		prompts: [
			{
				type: 'input',
				name: 'class',
				message: 'Component name please:'
			},
			{
				type: 'input',
				name: 'parent',
				message: 'Containing layer?  Leave blank to add to @/_components'
			},
		],
		actions: function(data) {
			let actions = [];

			if(data.parent && data.parent.length > 0)
			{
				actions.push({
					type: 'add',
					path: 'src/_layers/{{camelCase parent}}/_components/{{pascalCase class}}Component.vue',
					templateFile: 'plop-templates/VueComponent.hbs'
				})
			} else
			{
				actions.push({
					type: 'add',
					path: 'src/_components/{{pascalCase class}}Component.vue',
					templateFile: 'plop-templates/VueComponent.hbs'
				})
			}
			return actions;
		}
	});
	plop.setGenerator('IconButton', {
		description: 'Generate a button for a particular FontIcon',
		prompts: [
			{
				type: 'input',
				name: 'class',
				message: 'FontIcon name please:'
			},
		],
		actions: function(data) {
			let actions = [];
			actions.push({
				type: 'add',
				path: 'src/buttons/{{upperCase class}}Button.vue',
				templateFile: 'plop-templates/IconButton.hbs'
			})
			return actions;
		}
	});
	plop.setGenerator('PiniaRootStore', {
		description: 'Pinia Root Store',
		prompts: [
			{
				type: 'input',
				name: 'class',
				message: 'class name please:'
			},
			{
				type: 'input',
				name: 'prefix',
				message: 'WIll decorate objects with an extra [prefix]_uuid with this at the start.  Use three letters like app, pen, emp etc:',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/_stores/_{{camelCase class}}.store.ts',
				templateFile: 'plop-templates/PiniaStore.hbs'
			},
			{
				type: "append",
				path: "src/_stores/firebase.ts",
				template: "export * from './_{{camelCase class}}.store';\n",
			},
		]
	});
	plop.setGenerator('AxiosService', {
		description: 'Axios based api service',
		prompts: [
			{
				type: 'input',
				name: 'class',
				message: 'service name please:'
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/_services/{{camelCase class}}.service.ts',
				templateFile: 'plop-templates/AxiosService.hbs',
			},
			{
				type: "append",
				path: "src/_services/firebase.ts",
				template: "export * from './{{camelCase class}}.service';\n",
			},
		]
	});

	plop.setGenerator('ViewModel', {
		description: 'Data model for layer/view',
		prompts: [
			{
				type: 'input',
				name: 'class',
				message: 'VM name please:'
			},
			{
				type: 'input',
				name: 'parent',
				message: 'Containing layer?'
			},
		],
		actions: function(data) {
			let actions = [];

			actions.push({
				type: 'add',
				path: 'src/_layers/{{camelCase parent}}/_{{camelCase class}}.vm.ts',
				templateFile: 'plop-templates/PiniaViewModel.hbs'
			})
			return actions;
		}
	});

	//  TODO    There must be some way to call generators from within other generators
	//          but the docs are pants and I'm running out of time
	plop.setGenerator('Domain Object - Factory/Model/Store/Interface', {
		description: 'Generate the data model for a Domain Object',
		prompts: [
			{
				type: 'input',
				name: 'class',
				message: 'class name please:'
			},
			{
				type: 'input',
				name: 'prefix',
				message: 'WIll decorate objects with an extra [prefix]_uuid with this at the start.  Use three letters like app, pen, emp etc:',
			},
		],
		actions: [
			{
				type: "add",
				path: "src/_stores/{{camelCase class}}/firebase.ts",
			},
			{
				type: 'add',
				path: 'src/_stores/{{camelCase class}}/{{camelCase class}}.factory.ts',
				templateFile: 'plop-templates/PiniaFactory.hbs'
			},
			{
				type: "append",
				path: "src/_stores/{{camelCase class}}/firebase.ts",
				template: "export * from './{{camelCase class}}.factory';\n",
			},
			{
				type: 'add',
				path: 'src/_stores/{{camelCase class}}/{{camelCase class}}.model.ts',
				templateFile: 'plop-templates/PiniaModel.hbs'
			},
			{
				type: "append",
				path: "src/_stores/{{camelCase class}}/firebase.ts",
				template: "export * from './{{camelCase class}}.model';\n",
			},
			{
				type: 'add',
				path: 'src/_stores/{{camelCase class}}/{{camelCase class}}.store.ts',
				templateFile: 'plop-templates/PiniaStore.hbs'
			},
			{
				type: "append",
				path: "src/_stores/{{camelCase class}}/firebase.ts",
				template: "export * from './{{camelCase class}}.store';\n",
			},
			{
				type: 'add',
				path: 'src/types/I{{ pascalCase class}}.ts',
				templateFile: 'plop-templates/Interface.hbs'
			},
			{
				type: "append",
				path: "src/types/firebase.ts",
				template: "export * from './I{{ pascalCase class}}';\n",
			},
		]
	});



	plop.setGenerator('Factory', {
		description: 'Generate a Factory',
		prompts: [
			{
				type: 'input',
				name: 'class',
				message: 'class name please:'
			},
			,
			{
				type: 'input',
				name: 'prefix',
				message: 'WIll decorate objects with an extra [prefix]_uuid with this at the start.  Use three letters like app, pen, emp etc:',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/_stores/{{camelCase class}}/{{camelCase class}}.factory.ts',
				templateFile: 'plop-templates/PiniaFactory.hbs'
			},
			{
				type: "append",
				path: "src/_stores/{{camelCase class}}/firebase.ts",
				template: "export * from './{{camelCase class}}.factory';\n",
			},
		],
	});

	plop.setGenerator('Model', {
		description: 'Generate a Model',
		prompts: [
			{
				type: 'input',
				name: 'class',
				message: 'class name please:'
			},
			,
			{
				type: 'input',
				name: 'prefix',
				message: 'WIll decorate objects with an extra [prefix]_uuid with this at the start.  Use three letters like app, pen, emp etc:',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/_stores/{{camelCase class}}/{{camelCase class}}.model.ts',
				templateFile: 'plop-templates/PiniaModel.hbs'
			},
			{
				type: "append",
				path: "src/_stores/{{camelCase class}}/firebase.ts",
				template: "export * from './{{camelCase class}}.model';\n",
			},
		],
	});

	plop.setGenerator('Store', {
		description: 'Generate a Store',
		prompts: [
			{
				type: 'input',
				name: 'class',
				message: 'class name please:'
			},
			{
				type: 'input',
				name: 'prefix',
				message: 'WIll decorate objects with an extra [prefix]_uuid with this at the start.  Use three letters like app, pen, emp etc:',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/_stores/{{camelCase class}}/_{{camelCase class}}.store.ts',
				templateFile: 'plop-templates/PiniaStore.hbs'
			},
			{
				type: "append",
				path: "src/_stores/{{camelCase class}}/firebase.ts",
				template: "export * from './_{{camelCase class}}.store';\n",
			},
		],
	});

	plop.setGenerator('Interface', {
		description: 'Generate an Interface',
		prompts: [
			{
				type: 'input',
				name: 'class',
				message: 'class name please:'
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/types/I{{ pascalCase class}}.ts',
				templateFile: 'plop-templates/Interface.hbs'
			},
			{
				type: "append",
				path: "src/types/firebase.ts",
				template: "export * from './I{{ pascalCase class}}';\n",
			},
		],
	});
};
