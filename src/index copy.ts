#!/usr/bin/env node


import {Test} from './all-classes';
import { ObjectFactory } from './object-factory';

//create new class SomeClass
let mpInput1 = new Map<string, Object>();
mpInput1.set('fld1', 'fld1v1a');
mpInput1.set('fld2', 'fld2v2a');
var instanceAny1 = ObjectFactory.create("SomeClass", mpInput1);
instanceAny1.setState(mpInput1);
instanceAny1.toString();

//create new class YumsClass
let mpInput2 = new Map<string, Object>();
mpInput2.set('fld1', 'fld1v1b');
mpInput2.set('fld2', 'fld2v2b');
var instanceAny2 = ObjectFactory.create("YumsClass", mpInput2);
instanceAny2.setState(mpInput2);
instanceAny2.toString();


//create new class DumsClass
let mpInput3 = new Map<string, Object>();
mpInput3.set('fld1', 'fld1v1c');
mpInput3.set('fld2', 'fld2v2c');
var instanceAny3 = ObjectFactory.create("DumsClass", mpInput3);
instanceAny3.setState(mpInput3);
instanceAny3.toString();
console.log('input3>>>', instanceAny3.getState());
// //Clone DumsClass to NumsClass...
let mpInput4 = instanceAny3.getState();
console.log('input4>>>', mpInput4);
var instanceAny4 = ObjectFactory.create("NumsClass", mpInput4);
instanceAny4.setState(mpInput4);
instanceAny4.toString();
// //INVOKE MAPPER NOW...
instanceAny4.map("MumsClass", mpInput4);
instanceAny4.toString();
let  mpInput5 = instanceAny4.getState();
let mapperClient = <Test.CfeedObject>mpInput5.get('MumsClass');
if (mapperClient){
    mapperClient.getState();
}
