import {Component} from 'angular2/core';

export class Rect {
	public x : number;
	public y: number;
	public w: number;
	public h:number;
	
	constructor(str: string) {
		if(str == null) return null;
		var rect = str.split(',');
		this.x = parseInt(rect[0]);
		this.y = parseInt(rect[1]);
		this.w = parseInt(rect[2]);
		this.h = parseInt(rect[3]);
	}

    toString() : string{
        return this.x + ',' + this.y + ',' + this.w + ',' + this.h; 
    }
}