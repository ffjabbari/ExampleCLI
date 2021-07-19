import { combineFlagAndOptionalValue } from "commander";
import { ObjectFactory } from './object-factory';

export namespace Test {
	export abstract class CfeedObject implements Mapper{
		private arg: string;
		obj!: CfeedObject;
		state!: Map<string, Object>;
		constructor(arg: string) {
			this.arg = arg;
			this.state = new Map<string, Object>();
		}
		public getState() : Map<string, Object>{
			return this.state;

		}
		public setState(data: Map<string, Object>) : Map<string, Object>{
			this.state = data;
			return this.state;
		}
		map(className: string, inputData: Map<string, object>): Map<string, Object>{
			if (className !== this.obj.getClassName()){
				let mpInput = this.getState();
				let obj = ObjectFactory.create(className, mpInput);

				obj.mapIt(); //Do Additionnal Mapping.
				this.obj.setState(this.obj.getState().set('PTR>' + className, obj));
				return obj.getState();
			}
			this.obj.mapIt();
			return this.obj.getState();
			

		}
		deMap(className: string, inputData: Map<string, object>): Map<string, Object>{
			let mpInput = this.getState();
			let obj = ObjectFactory.create(className, mpInput);

			obj.mapIt();
			obj.getState().set(className, obj);
			return obj.getState();		
		}
		public mapIt(): void{
			console.log(this.getClassName(), ' MapIt() in abstract class invoked@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
		}
		getClassName(): string {
			return this.constructor.name;
		}
		getArg(): string{
			return this.arg;
		}
		getObj(): CfeedObject{

			return this.obj;

		}
		setObj(obj: CfeedObject): void{

			this.obj = obj;

		}
		addState(key: string, value: Object): void{
			this.obj.getState().set(key, value);
		}
	}
	export  interface Mapper extends State{
		map(className: string, inputData: Map<string, object>):Map<string, Object>;
		deMap(className: string, inputData: Map<string, object>):Map<string, Object>;
		mapIt(): void;
	}
	export  interface State{
	getState() : Map<string, Object>;
	setState(data: Map<String, Object>): Map<string, Object>;
	getClassName(): string;

	}
	export class SomeClass extends CfeedObject implements Mapper{
	   
	    private fld1: string = '';
	    private fld2: string = '';
	    constructor(arg: string) {
		super(arg);
		
	    }
	    public getArg(): string{
		    return super.getArg();
	    }
	    public setState(data: Map<string, Object>): Map<string, Object>{
		let out: Map<string, Object> = new Map<string, Object>();

		data.forEach((value: Object, key: string) => { 
			if (key === 'fld1'){
				this.fld1 = value.toString();
			}else if (key === 'fld2'){
				this.fld2 = value.toString();
			}else{
				if (key.startsWith('PTR>') === true){
				   super.getState().set(key, value);
				}
			   
			}
		});
		super.setState(data);
		return data;
	    };
	    public getState() : Map<string, Object>{
                return super.getState();
	    }
	    map(className: string, inputData: Map<string, object>): Map<string, Object>{
		super.map(className, inputData);

		this.fld1 = 'fld1v1cv90';
		this.fld2 = 'fld2v2cV91';

		return super.getState();

	}
	mapIt(): void{
		//Override Part 2 code...
		//...
		//... Put more override code here
		//...
		console.log(super.getClassName(), ' MapIt() in Subclass executed...################################################');
	}
	    public toString() : string{
		let buffer: string[] = [];

		buffer.push(' className: ' + this.constructor.name);
		buffer.push(' fld1: ' + this.fld1);
		buffer.push(' fld2: ' + this.fld2);

                console.log('@@@', super.getClassName(), ':::', buffer.toString());
		return buffer.toString();
	    }
	}
	export class YumsClass extends CfeedObject implements Mapper{
		private fld1: string = '';
	        private fld2: string = '';
		constructor(arg: string) {
			super(arg);
		}
		public getArg(){
		    console.log(super.getClassName(), '.getArg RETURNED:', super.getArg());
		    return super.getArg();
		}
		public setState(data: Map<string,Object>): Map<string, Object>{
			let out: Map<string, Object> = new Map<string, Object>();

			data.forEach((value: Object, key: string) => { 
				if (key === 'fld1'){
					this.fld1 = value.toString();
				}else if (key === 'fld2'){
					this.fld2 = value.toString();
				}else{
					if (key.startsWith('PTR>') === true){
					   super.getState().set(key, value);
					}
				   
				}
			});
			super.setState(data);
			return data;	
		    }
		public getState() : Map<string, Object>{
			return super.getState();
		}
		map(className: string, inputData: Map<string, object>): Map<string, Object>{
			super.map(className, inputData);

			this.fld1 = 'fld1v1cv80';
			this.fld2 = 'fld2v2cV81';

			return super.getState();

		}
		mapIt(): void{
			//Override Part 2 code...
			//...
			//... Put more override code here
			//...
			console.log(super.getClassName(), ' MapIt() in Subclass executed...################################################');
		}
		toString(): string{
		    let buffer: string[] = [];

		    buffer.push(' className: ' + this.constructor.name);
		    buffer.push(' fld1: ' + this.fld1);
		    buffer.push(' fld2: ' + this.fld2);

                    console.log('@@@', super.getClassName(), ':::', buffer.toString());
		
		    return buffer.toString();
		}
    
	    }
	    export class DumsClass extends CfeedObject implements Mapper{
		
		private fld1: string = '';
	        private fld2: string = '';
		constructor(arg: string) {
			super(arg);
	
		}
		public getArg(){
		    console.log(super.getClassName(), '.getArg RETURNED:', super.getArg());
		    return super.getArg();
    
		}
		public setState(data: Map<string,Object>): Map<string, Object>{
			let out: Map<string, Object> = new Map<string, Object>();

			data.forEach((value: Object, key: string) => { 
				if (key === 'fld1'){
					this.fld1 = value.toString();
				}else if (key === 'fld2'){
					this.fld2 = value.toString();
				}else{
					if (key.startsWith('PTR>') === true){
					   super.getState().set(key, value);
					}
				   
				}
			});
			super.setState(data);
			return data;	
		    }
		public getState() : Map<string, Object>{
			return super.getState();
		}
		map(className: string, inputData: Map<string, object>): Map<string, Object>{
			super.map(className, inputData);

			this.fld1 = 'fld1v1cv70';
			this.fld2 = 'fld2v2cV71';

			return super.getState();

		}
		mapIt(): void{
			//Override Part 2 code...
			//...
			//... Put more override code here
			//...
			console.log(super.getClassName(), ' MapIt() in Subclass executed...################################################');
		}
		toString(): string{
		    let buffer: string[] = [];

		    buffer.push(' className: ' + this.constructor.name);
		    buffer.push(' fld1: ' + this.fld1);
		    buffer.push(' fld2: ' + this.fld2);

                    console.log('@@@', super.getClassName(), ':::', buffer.toString());
		
		    return buffer.toString();
		}
    
	    }
	    export class NumsClass extends CfeedObject implements Mapper{
		private fld1: string = '';
	        private fld2: string = '';
		constructor(arg: string) {
			super(arg);
	
		}
		public getArg(){
		    console.log(super.getClassName(), '.getArg RETURNED:', super.getArg());
		    return super.getArg();
    
		}
		public setState(data: Map<string,Object>): Map<string, Object>{
			let out: Map<string, Object> = new Map<string, Object>();

			data.forEach((value: Object, key: string) => { 
				if (key === 'fld1'){
					this.fld1 = value.toString();
				}else if (key === 'fld2'){
					this.fld2 = value.toString();
				}else{
					if (key.startsWith('PTR>') === true){
					   super.getState().set(key, value);
					}
				   
				}
			});
			super.setState(data);
			return data;	
		    }
		public getState() : Map<string, Object>{
			return super.getState();
		}
		map(className: string, inputData: Map<string, object>): Map<string, Object>{
			super.map(className, inputData);

			this.fld1 = 'fld1v1cv2';
			this.fld2 = 'fld2v2cV2';

			return super.getState();

		}
		mapIt(): void{
			//Override Part 2 code...
			//...
			//... Put more override code here
			//...
			console.log(super.getClassName(), ' MapIt() in Subclass executed...################################################');
		}
		toString(): string{
		    let buffer: string[] = [];

		    buffer.push(' className: ' + this.constructor.name);
		    buffer.push(' fld1: ' + this.fld1);
		    buffer.push(' fld2: ' + this.fld2);

                    console.log('@@@', super.getClassName(), ':::', buffer.toString());
		
		    return buffer.toString();
		}
    
	    }
	    export class MumsClass extends CfeedObject implements Mapper{
		private fld1: string = '';
	        private fld2: string = '';
		constructor(arg: string) {
			super(arg);
	
		}
		public getArg(){
		    console.log(super.getClassName(), '.getArg RETURNED:', super.getArg());
		    return super.getArg();
    
		}
		public setState(data: Map<string,Object>): Map<string, Object>{
			let out: Map<string, Object> = new Map<string, Object>();

			data.forEach((value: Object, key: string) => { 
				if (key === 'fld1'){
					this.fld1 = value.toString();
				}else if (key === 'fld2'){
					this.fld2 = value.toString();
				}else{
					if (key.startsWith('PTR>') === true){
					   super.getState().set(key, value);
					}
				   
				}
			});
			super.setState(data);
			return data;	
		    }
		public getState() : Map<string, Object>{
			return super.getState();
		}
		map(className: string, inputData: Map<string, object>): Map<string, Object>{
			super.map(className, inputData);

			this.fld1 = 'fld1v1cv3';
			this.fld2 = 'fld2v2cV3';

			return super.getState();

		}
		mapIt(): void{
			//Override Part 2 code...
			//...
			//... Put more override code here
			//...
			console.log(super.getClassName(), ' MapIt() in Subclass executed...################################################');
		}

		toString(): string{
		    let buffer: string[] = [];

		    buffer.push(' className: ' + this.constructor.name);
		    buffer.push(' fld1: ' + this.fld1);
		    buffer.push(' fld2: ' + this.fld2);

                    console.log('@@@', super.getClassName(), ':::', buffer.toString());
		
		    return buffer.toString();
		}
    
	    }
    }