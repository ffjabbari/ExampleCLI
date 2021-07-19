    
 import { TLSSocket } from 'tls';
import {Test} from './all-classes';
 export class ObjectFactory {
	public static create(className: string, data: Map<string, Object>) : Test.Mapper {
            objx: Object;
            console.log('>>>0>', Test);
            console.log('>>>1>', typeof Test);
	    const keys = Object.keys(Test); 
            console.log('>>>2>', keys);
        //     console.log('>>>3>', Test.SomeClass);
        //     console.log('>>>4>', Test.YumsClass);
	    let found = false;
	    for (let key in Test) {
		console.log('$$$?$$$', key.toString());
		console.log('<<<?<', key);
	    }
	    for (let key in Test) {
		if (className === key.toString()){
			console.log('FOUND IT:', key.toString());
			console.log('###?###', typeof key);
		}
	    }
	    Object.keys(Test).forEach(key => console.log('****:?****', key));
	  
	    const instancex = new (<any>Test)[className]("paramFredman1")
            instancex.setObj(instancex); 
	    return instancex;
	}
    }