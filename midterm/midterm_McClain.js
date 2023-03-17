(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"midterm_McClain_atlas_1", frames: [[956,0,416,566],[1752,0,291,211],[1374,0,376,220],[452,0,502,499],[0,0,450,568]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_7 = function() {
	this.initialize(ss["midterm_McClain_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["midterm_McClain_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["midterm_McClain_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["midterm_McClain_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["midterm_McClain_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flower
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-75,-102.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// leafs
	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(-106,-119.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tree, new cjs.Rectangle(-106,-119.7,208,283), null);


(lib.righteye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrAsQgHgGgFgIQgHgOAAgQQAAgPAHgOQAFgIAHgGQASgTAZAAQAaAAASATQATASAAAZQAAAagTASQgSATgaAAQgZAAgSgTgAADAGIgCACQgFAGAAAJQAAAKAFAGIACABQAGAFAHABQAJAAAHgHQAGgGABgKQgBgJgGgGQgHgHgJABQgHAAgGAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.righteye, new cjs.Rectangle(-6.3,-6.3,12.6,12.6), null);


(lib.lefteye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrAsQgHgGgFgIQgHgOAAgQQAAgPAHgOQAFgIAHgGQASgTAZAAQAaAAASATQATASAAAZQAAAagTASQgSATgaAAQgZAAgSgTgAABAIQgFAGAAAJQAAAKAFAGQAHAHAIAAQAJAAAHgHQAGgGABgKQgBgJgGgGQgHgHgJABQgIgBgHAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lefteye, new cjs.Rectangle(-6.3,-6.3,12.6,12.6), null);


(lib.eye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(50,50,50,0)").ss(2,1,1).p("AFDAAQAACGhfBeQheBfiGAAQiFAAhehfQhfheAAiGQAAiFBfheQBehfCFAAQCGAABeBfQBfBeAACFg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag/BAQgagaAAgmQAAglAagaQAagaAlAAQAlAAAaAaQAbAaAAAlQAAAmgbAaQgaAaglAAQglAAgagag");
	this.shape_1.setTransform(11.75,8.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjjDkQhehfAAiFQAAiEBehfQBfheCEAAQCFAABfBeQBeBfAACEQAACFheBfQhfBeiFAAQiEAAhfhegAA1AXQgZAbAAAlQAAAmAZAaQAbAbAmgBQAlABAagbQAbgaAAgmQAAglgbgbQgagZglAAQgmAAgbAZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye, new cjs.Rectangle(-33.2,-33.2,66.5,66.5), null);


(lib.darktree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-179.5,-133.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.darktree, new cjs.Rectangle(-179.5,-133.4,225,284), null);


(lib.bushLight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(50,50,50,0)").ss(7,1,1).p("ApljyQAJh9CMhaQCXhhDWAAQDUAACXBhQCXBgAACJQAAAPAFAQQCLgzCwAAQD5AACvBlQCwBlAACOQAACPiwBlQivBlj5AAQiCAAhugbQhkgahVgwQivhlAAiPQAAgQACgPQARh6CchaQA0geA6gUACJBFQhrAkiBAAQiHAAhugnQhAgWg4gkQiWhfAAiJQAAgJABgJAgqGkQghAthgAkQiSA2jPAAQjPAAiTg2Qh5gtgVg8QhBgWg6geQi/hlAAiPQAAiOC/hlQDAhlEQAAQAhAAAhACAmJC/QB9AMBhAkQCTA3AABMQAAAagSAYAmJC/QgBgIAAgIQAAg7AygyAHvGiQh8AbiXAAQiPAAh3gZAv8GMQgEgNAAgNQAAhMCSg3QCTg2DPAAQBFAAA+AG");
	this.shape.setTransform(-122.45,38.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC33").s().p("AtuH0Qh5gsgVg8QgEgNAAgNQAAhMCSg3QCTg2DPAAQBFAAA+AGIgBgQQAAg7AygyQhAgWg4gkQiWhgAAiIIABgSQAJh9CMhaQCYhhDVAAQDVAACWBhQCXBgAACJQAAAPAFAPQCLgyCwAAQD5AACvBlQCwBlAACOQAACPiwBlQivBlj5AAQiCAAhugcQhkgZhVgwQivhlAAiPQAAgQACgPQARh6CchaQA0geA6gVQg6AVg0AeQicBagRB6QhrAkiBAAQiHAAhugnQBuAnCHAAQCBAABrgkQgCAPAAAQQAACPCvBlQBVAwBkAZQh8AciXAAQiPAAh3gZQASgYAAgaQAAhMiSg3Qhigkh9gMQB9AMBiAkQCSA3AABMQAAAagSAYQghAthfAjQiTA3jPAAQjPAAiTg3gAx2FYQjAhlAAiPQAAiODAhlQDAhlEPAAQAhAAAhACIgBASQAACICWBgQA4AkBAAWQgyAyAAA7IABAQQg+gGhFAAQjPAAiTA2QiSA3AABMQAAANAEANQhBgWg5gegAmJC/IAAAAg");
	this.shape_1.setTransform(-122.45,38.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bushLight, new cjs.Rectangle(-259.4,-20.4,274,118), null);


(lib.bush3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(50,50,50,0)").ss(7,1,1).p("AFZAAQAABGhlAyQhlAyiPAAQiOAAhlgyQhlgyAAhGQAAhGBlgyQBlgxCOAAQCPAABlAxQBlAyAABGg");
	this.shape.setTransform(-246.45,-9.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AjzB4QhlgxAAhHQAAhGBlgxQBlgyCOAAQCPAABlAyQBlAxAABGQAABHhlAxQhlAyiPAAQiOAAhlgyg");
	this.shape_1.setTransform(-246.45,-9.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(50,50,50,0)").ss(7,1,1).p("AmtgOQgkARgsAAQhOAAg3g3Qg3g3AAhNQAAgDAAgCAqJBvQgXADgZAAQhwAAhQgtQhPgsAAg+QAAg/BPgtQBQgsBwAAQAChLA1g1QA3g3BOAAQBIAAA0AuQAEAEAFAFQA3A3AABOQAAA0gZAqQgMAUgSASQgYAZgdANQgMAvhAAkQg+AjhSAHgAmBlGQAXgXAigUQBng8CRAAQCQAABmA8QAkAVAXAXQBIhIBfAAQB1AABTBvQAmAzAVA9QAYBHAABUQAACbhTBuQgzBEhAAaQgoARgtAAQhcAAhHhFQgUgSgRgYQhThuAAibQAAgRABgQQhUAhhqAAQgnAAgjgEQhigMhMgsQgJgGgJgFAoKDbQgYgLgWgPQg3glgagtAAzFVQgPALgVALQhcAviDAAQiEAAhdgvQhdgvAAhDQAAgQAEgOAhbDNQhgA4iEAAQhyAAhZgqAhbDNQhShAAAhWQAAgqATgkAAcEMQg0gRgtgeQgMgIgKgIAAzFVQgZgaAAgeQAAgJACgIABug0QAHiHBLhjQAQgVARgSADlEgQgXACgYAAQhUAAhGgWAKLiuQB7AJBbBEQBoBPAABuQAABvhoBPQhSA9hsAOQgeADgfAAQhKAAg/gUAKjFlQgXAQgjAPQhlAqiQAAQiPAAhmgqQgygWgagZ");
	this.shape_2.setTransform(-174.825,-32.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006600").s().p("AB/GDQgygVgagZQgZgaAAgeQAAgJACgJQgCAJAAAJQAAAeAZAaQgPALgVALQhcAviDAAQiEAAhdgvQhdgwAAhDQAAgPAEgOQgYgLgWgPQg3glgagtQgXADgZgBQhwAAhQgsQhPgtAAg+QAAg/BPgsQBQgsBwgBIAAAGQAABNA3A4QA3A2BOAAQAsAAAkgRQgMAvhAAkQg+AjhSAHQBSgHA+gjQBAgkAMgvQAdgNAYgYQASgTAMgUQgMAUgSATQgYAYgdANQgkARgsAAQhOAAg3g2Qg3g4AAhNIAAgGQAChKA1g2QA3g2BOAAQBIgBA0AvIAJAIQA3A3AABPQAAA0gZAqQAZgqAAg0QAAhPg3g3IgJgIQAXgXAigUQBng8CRAAQCQAABmA8QAkAVAXAXQBIhHBfgBQB1ABBTBuQAmAzAVA9QB7AJBbBFQBoBOAABuQAABvhoBPQhSA9hsAOQgeADgfAAQhKAAg/gUQBAgaAzhEQBThuAAicQAAhTgYhHQAYBHAABTQAACchTBuQgzBEhAAaQA/AUBKAAQAfAAAegDQgXAQgjAOQhlAriQAAQiPAAhmgrgAGIFlQAtAAAogRQgoARgtAAQhcgBhHhEQBHBEBcABgAC2EiQAYAAAXgCQgUgSgRgYQhThuAAicIABggQhUAhhqAAQgnAAgjgEQAjAEAnAAQBqAABUghIgBAgQAACcBTBuQARAYAUASQgXACgYAAQhUAAhGgXQBGAXBUAAgAhbDNIAWAQQAtAeA0AQQg0gQgtgeIgWgQQhShAAAhXQAAgpATgkQhigMhMgsIgSgLIASALQBMAsBiAMQgTAkAAApQAABXBSBAQhgA3iEAAQhyAAhZgpQBZApByAAQCEAABgg3IAAAAgADAkeQhLBjgHCHQAHiHBLhjQAQgVARgSQgRASgQAVgAhbDNIAAAAgAiagXIAAAAgAq5i+IAAAAg");
	this.shape_3.setTransform(-174.825,-32.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bush3, new cjs.Rectangle(-284.4,-79.4,209.99999999999997,93), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.eye();
	this.instance.setTransform(215.1,113.15,0.2644,0.2177,0,0,0,-0.4,-0.5);

	this.instance_1 = new lib.CachedBmp_17();
	this.instance_1.setTransform(87.85,56.3,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_16();
	this.instance_2.setTransform(-1,-1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,276.9,249.5), null);


(lib.linker_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.righteye();
	this.instance.setTransform(6.3,-2.7,0.8413,1);

	this.instance_1 = new lib.lefteye();
	this.instance_1.setTransform(-6.95,-2.7,0.7619,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("AB6AAQAAAagTATQgSASgaAAQgaAAgTgSQgGgHgFgIQgGgNAAgRQAAgPAGgOQAFgIAGgHQATgSAaAAQAaAAASASQATATAAAZgAgZAAQAAAagOATQgOASgUAAQgTAAgOgSQgFgHgEgIQgGgNAAgRQAAgPAGgOQAEgIAFgHQAOgSATAAQAUAAAOASQAOATAAAZg");
	this.shape.setTransform(0.425,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA0ARIgCgCQgGgGAAgJQAAgIAGgGIACgCQAGgFAHAAQAJAAAHAHQAGAGABAIQgBAJgGAGQgHAHgJAAQgHAAgGgFgAhRAPQgFgGgBgJQABgIAFgGQAFgHAGAAQAHAAAFAHQAFAGAAAIQAAAJgFAGQgFAHgHAAQgGAAgFgHg");
	this.shape_1.setTransform(1.4,-0.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AhyBzQgvgwgBhDQABhCAvgwQAwgvBCgBQBDABAwAvQAvAwABBCQgBBDgvAwQgwAvhDABQhCgBgwgvgAAAgaQAAAQAHANQAFAIAHAGQASATAaAAQAaAAASgTQATgRAAgaQAAgagTgSQgSgTgaAAQgaAAgSATQgHAGgFAIQgHAOAAAQIAAAAgAh1gaQABAQAFANQAEAIAFAGQAOATAUAAQATAAAPgTQAOgRgBgaQABgagOgSQgPgTgTAAQgUAAgOATQgFAGgEAIQgFAOgBAQIAAAAgAATARQgHgGgFgIQgHgNAAgQQAAgQAHgOQAFgIAHgGQASgTAaAAQAaAAASATQATASAAAaQAAAagTARQgSATgaAAQgaAAgSgTgABCgUIgCACQgGAGAAAJQAAAJAGAGIACACQAGAEAHABQAJAAAHgHQAGgGABgJQgBgJgGgGQgHgHgJABQgHAAgGAEgAhmARQgFgGgEgIQgFgNgBgQQABgQAFgOQAEgIAFgGQAOgTAUAAQATAAAPATQAOASgBAaQABAagOARQgPATgTAAQgUAAgOgTgAhDgSQgFAGgBAJQABAJAFAGQAFAHAGAAQAHAAAFgHQAFgGAAgJQAAgJgFgGQgFgHgHABQgGgBgFAHgAB+gaIAAAAgAgVgaIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.linker_mc, new cjs.Rectangle(-16.2,-16.2,32.5,32.5), null);


(lib.bushes2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bush3();
	this.instance.setTransform(618.45,32,0.4286,0.4884,0,0,0,-179.5,-33);

	this.instance_1 = new lib.bush3();
	this.instance_1.setTransform(428.45,32,0.4286,0.4884,0,0,0,-179.5,-33);

	this.instance_2 = new lib.bush3();
	this.instance_2.setTransform(371.45,21,0.4286,0.4884,0,0,0,-179.5,-33);

	this.instance_3 = new lib.bush3();
	this.instance_3.setTransform(515.45,32,0.4286,0.4884,0,0,0,-179.5,-33);

	this.instance_4 = new lib.bush3();
	this.instance_4.setTransform(317.35,32,0.4286,0.4884,0,0,0,-179.5,-33);

	this.instance_5 = new lib.bush3();
	this.instance_5.setTransform(184.9,32,0.4286,0.4884,0,0,0,-179.5,-33);

	this.instance_6 = new lib.bush3();
	this.instance_6.setTransform(114.4,32,0.4286,0.4884,0,0,0,-179.5,-33);

	this.instance_7 = new lib.bush3();
	this.instance_7.setTransform(43.45,32,0.4286,0.4884,0,0,0,-179.5,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bushes2, new cjs.Rectangle(-1.5,-1.7,665,56.400000000000006), null);


(lib.bushes1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bushLight();
	this.instance.setTransform(683.9,31.5,0.4382,0.5676,0,0,0,-122.5,38.6);

	this.instance_1 = new lib.bushLight();
	this.instance_1.setTransform(58.45,43.15,0.4382,0.5676,0,0,0,-122.5,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bushes1, new cjs.Rectangle(-1.5,-2,745.5,78.6), null);


(lib.BEE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(-716.8,123.8,1,1,0,0,0,137.5,123.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:137.4,x:-659.8,y:135.05},0).wait(1).to({x:-602.75,y:146.35},0).wait(1).to({x:-545.65,y:157.65},0).wait(1).to({x:-488.6,y:168.95},0).wait(1).to({x:-431.55,y:180.2},0).wait(1).to({x:-374.45,y:191.5},0).wait(1).to({x:-317.4,y:202.8},0).wait(1).to({x:-260.3,y:214.1},0).wait(1).to({x:-203.25,y:225.35},0).wait(1).to({x:-146.2,y:236.65},0).wait(1).to({x:-89.1,y:247.95},0).wait(1).to({x:-32.05,y:259.25},0).wait(1).to({x:25,y:270.55},0).wait(1).to({x:105.1,y:254.35},0).wait(1).to({x:185.15,y:238.15},0).wait(1).to({x:265.25,y:221.95},0).wait(1).to({x:345.35,y:205.75},0).wait(1).to({x:425.45,y:189.55},0).wait(1).to({x:505.55,y:173.35},0).wait(1).to({x:585.6,y:157.15},0).wait(1).to({x:665.7,y:140.95},0).wait(1).to({x:745.8,y:124.75},0).wait(1).to({x:825.9,y:108.55},0).wait(1).to({x:906,y:92.35},0).wait(1).to({x:986.1,y:76.15},0).wait(1).to({x:1082.25,y:101.55},0).wait(1).to({x:1178.4,y:126.85},0).wait(1).to({x:1274.6,y:152.2},0).wait(1).to({x:1370.75,y:177.55},0).wait(1).to({x:1466.95,y:202.9},0).wait(1).to({x:1563.1,y:228.25},0).wait(1).to({x:1659.3,y:253.6},0).wait(1).to({x:1755.45,y:278.95},0).wait(1).to({x:1851.65,y:304.35},0).wait(1).to({x:1942.8,y:279},0).wait(1).to({x:2034,y:253.65},0).wait(1).to({x:2125.15,y:228.3},0).wait(1).to({x:2216.35,y:202.95},0).wait(1).to({x:2307.5,y:177.6},0).wait(1).to({x:2398.7,y:152.25},0).wait(1).to({x:2489.85,y:126.9},0).wait(1).to({x:2581.05,y:101.55},0).wait(1).to({x:2672.25,y:76.2},0).wait(1).to({x:2709.7,y:94.35},0).wait(1).to({x:2747.15,y:112.45},0).wait(1).to({x:2784.65,y:130.5},0).wait(1).to({x:2822.1,y:148.65},0).wait(1).to({x:2859.6,y:166.75},0).wait(1).to({x:2897.05,y:184.85},0).wait(1).to({x:2934.5,y:202.95},0).wait(1).to({x:2972,y:221.1},0).wait(1).to({x:3009.45,y:239.2},0).wait(1).to({x:3046.95,y:257.3},0).wait(1).to({x:3084.4,y:275.4},0).wait(1).to({x:3121.85,y:293.55},0).wait(1).to({x:3159.35,y:311.65},0).wait(1).to({x:3196.8,y:329.75},0).wait(1).to({x:3234.3,y:347.9},0).wait(1).to({x:3389.8,y:326.15},0).wait(1).to({x:3545.3,y:304.4},0).wait(1).to({x:3700.85,y:282.7},0).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-855.3,-48.6,4694.6,521.2);


(lib._2bee = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BEE();
	this.instance.setTransform(11.25,-1.95,1,1,0,0,0,-716.8,123.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1492,regY:212,x:2296.6,y:112.55},0).wait(1).to({x:2373.15,y:138.8},0).wait(1).to({x:2449.7,y:165.05},0).wait(1).to({x:2526.25,y:191.3},0).wait(1).to({x:2602.8,y:217.5},0).wait(1).to({x:2679.35,y:243.75},0).wait(1).to({x:2755.9,y:270},0).wait(1).to({x:2832.45,y:296.25},0).wait(1).to({x:2909,y:322.5},0).wait(1).to({x:2985.55,y:348.75},0).wait(1).to({x:3062.1,y:375.05},0).wait(1).to({x:3121.75,y:366.7},0).wait(1).to({x:3181.45,y:358.35},0).wait(1).to({x:3241.1,y:350.05},0).wait(1).to({x:3300.8,y:341.7},0).wait(1).to({x:3360.45,y:333.4},0).wait(1).to({x:3420.15,y:325.05},0).wait(1).to({x:3479.85,y:316.75},0).wait(1).to({x:3539.5,y:308.4},0).wait(1).to({x:3599.2,y:300.05},0).wait(1).to({x:3658.85,y:291.75},0).wait(1).to({x:3718.55,y:283.4},0).wait(1).to({x:3778.2,y:275.1},0).wait(1).to({x:3837.9,y:266.75},0).wait(1).to({x:3897.6,y:258.45},0).wait(1).to({x:4052.95,y:282.3},0).wait(1).to({x:4208.3,y:306.2},0).wait(1).to({x:4363.65,y:330.1},0).wait(1).to({x:4519,y:353.95},0).wait(1).to({x:4674.35,y:377.85},0).wait(1).to({x:4829.7,y:401.75},0).wait(1).to({x:4985.05,y:425.6},0).wait(1).to({x:5140.4,y:449.5},0).wait(1).to({x:5295.75,y:473.4},0).wait(1).to({x:5451.15,y:497.3},0).wait(1).to({x:5505,y:469.55},0).wait(1).to({x:5558.85,y:441.8},0).wait(1).to({x:5612.7,y:414.05},0).wait(1).to({x:5666.55,y:386.3},0).wait(1).to({x:5720.4,y:358.55},0).wait(1).to({x:5774.25,y:330.8},0).wait(1).to({x:5828.1,y:303.05},0).wait(1).to({x:5881.95,y:275.3},0).wait(1).to({x:5935.8,y:247.55},0).wait(1).to({x:5989.65,y:219.8},0).wait(1).to({x:6043.5,y:192.1},0).wait(1).to({x:6097.35,y:164.35},0).wait(1).to({x:6160.25,y:178.25},0).wait(1).to({x:6223.2,y:192.15},0).wait(1).to({x:6286.15,y:206.05},0).wait(1).to({x:6349.1,y:219.85},0).wait(1).to({x:6412.05,y:233.75},0).wait(1).to({x:6475,y:247.65},0).wait(1).to({x:6537.95,y:261.55},0).wait(1).to({x:6600.85,y:275.4},0).wait(1).to({x:6663.8,y:289.3},0).wait(1).to({x:6726.75,y:303.2},0).wait(1).to({x:6789.7,y:317.05},0).wait(1).to({x:6852.65,y:330.95},0).wait(1).to({x:6915.6,y:344.85},0).wait(1).to({x:6978.55,y:358.75},0).wait(1).to({x:7025.15},0).wait(1).to({x:7071.75},0).wait(1).to({x:7118.4},0).wait(1).to({x:7165},0).wait(1).to({x:7211.65},0).wait(1).to({x:7258.25},0).wait(1).to({x:7304.9},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.2,-126.7,5361.7,660.5);


// stage content:
(lib.midterm_McClain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,74];
	// timeline functions:
	this.frame_0 = function() {
		this.linker_mc.addEventListener("click", link.bind(this));
		
		function link(e) {
			
			var url = "https://thebeeconservancy.org";
			
			var win = window.open(url, "_blank");
			
			win.focus();
		
		
		
		}
	}
	this.frame_74 = function() {
		this.stop();
		
		createjs.Touch.enable(stage);
		stage.mouseMoveOutside = true;
		
		var root = this;
		var midpoint = this.stage.canvas.width / 2;
		var bushRestX = this.bushes1.x;
		
		this.stage.on("stagemousemove", function(e) {
		    var newX = 0;
			if (e.stageX < midpoint) {
				newX = (midpoint - e.stageX) / 20;
			} else if (e.stageX > midpoint) {
				newX = (e.stageX - midpoint) / 20;
				newX *= -1;
			}
			createjs.Tween.get(root.bushes1, {override:true}).to({x: bushRestX + newX}, 1000, createjs.Ease.quintOut);
			createjs.Tween.get(root.bushes2, {override:true}).to({x: bushRestX + (newX / 2)}, 1000, createjs.Ease.quintOut);
		
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(74).call(this.frame_74).wait(1));

	// Title
	this.text = new cjs.Text("the bee conservancy", "42px 'Palatino'", "#FFFF00");
	this.text.textAlign = "center";
	this.text.lineHeight = 48;
	this.text.lineWidth = 430;
	this.text.parent = this;
	this.text.setTransform(346,202);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(27).to({_off:false},0).wait(1).to({x:345.9964,y:197.7679},0).wait(1).to({x:345.9929,y:193.5357},0).wait(1).to({x:345.9893,y:189.3036},0).wait(1).to({x:345.9857,y:185.0714},0).wait(1).to({x:345.9821,y:180.8393},0).wait(1).to({x:345.9786,y:176.6071},0).wait(1).to({x:345.975,y:172.375},0).wait(1).to({x:345.9714,y:168.1429},0).wait(1).to({x:345.9679,y:163.9107},0).wait(1).to({x:345.9643,y:159.6786},0).wait(1).to({x:345.9607,y:155.4464},0).wait(1).to({x:345.9571,y:151.2143},0).wait(1).to({x:345.9536,y:146.9821},0).wait(1).to({x:345.95,y:142.75},0).wait(34));

	// foreground
	this.bushes1 = new lib.bushes1();
	this.bushes1.name = "bushes1";
	this.bushes1.setTransform(349.7,220.05,1,1,0,0,0,371.2,37.3);

	this.timeline.addTween(cjs.Tween.get(this.bushes1).wait(1).to({y:218.55},0).wait(1).to({y:217.1},0).wait(1).to({y:215.65},0).wait(1).to({y:214.2},0).wait(1).to({y:212.7},0).wait(1).to({y:211.25},0).wait(1).to({y:209.8},0).wait(1).to({y:208.35},0).wait(1).to({y:206.85},0).wait(1).to({y:205.4},0).wait(1).to({y:203.95},0).wait(1).to({y:202.5},0).wait(1).to({y:201.05},0).wait(1).to({y:199.55},0).wait(1).to({y:198.1},0).wait(1).to({y:196.65},0).wait(1).to({y:195.2},0).wait(1).to({y:193.7},0).wait(1).to({y:192.25},0).wait(1).to({y:190.8},0).wait(1).to({y:189.35},0).wait(1).to({y:187.85},0).wait(1).to({y:186.4},0).wait(1).to({y:184.95},0).wait(1).to({y:183.5},0).wait(1).to({y:182.05},0).wait(49));

	// bee_2
	this.instance = new lib._2bee();
	this.instance.setTransform(-49.4,56.4,0.1533,0.1801);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));

	// bee
	this.instance_1 = new lib.BEE();
	this.instance_1.setTransform(92.2,73,0.1781,0.1841);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75));

	// button
	this.linker_mc = new lib.linker_mc();
	this.linker_mc.name = "linker_mc";
	this.linker_mc.setTransform(561.75,224.3);

	this.timeline.addTween(cjs.Tween.get(this.linker_mc).wait(1).to({y:223.0805},0).wait(1).to({y:221.861},0).wait(1).to({y:220.6415},0).wait(1).to({y:219.422},0).wait(1).to({y:218.2024},0).wait(1).to({y:216.9829},0).wait(1).to({y:215.7634},0).wait(1).to({y:214.5439},0).wait(1).to({y:213.3244},0).wait(1).to({y:212.1049},0).wait(1).to({y:210.8854},0).wait(1).to({y:209.6659},0).wait(1).to({y:208.4463},0).wait(1).to({y:207.2268},0).wait(1).to({y:206.0073},0).wait(1).to({y:204.7878},0).wait(1).to({y:203.5683},0).wait(1).to({y:202.3488},0).wait(1).to({y:201.1293},0).wait(1).to({y:199.9098},0).wait(1).to({y:198.6902},0).wait(1).to({y:197.4707},0).wait(1).to({y:196.2512},0).wait(1).to({y:195.0317},0).wait(1).to({y:193.8122},0).wait(1).to({y:192.5927},0).wait(1).to({y:191.3732},0).wait(1).to({y:190.1537},0).wait(1).to({y:188.9341},0).wait(1).to({y:187.7146},0).wait(1).to({y:186.4951},0).wait(1).to({y:185.2756},0).wait(1).to({y:184.0561},0).wait(1).to({y:182.8366},0).wait(1).to({y:181.6171},0).wait(1).to({y:180.3976},0).wait(1).to({y:179.178},0).wait(1).to({y:177.9585},0).wait(1).to({y:176.739},0).wait(1).to({y:175.5195},0).wait(1).to({y:174.3},0).wait(34));

	// hill
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(50,50,50,0)").ss(7,1,1).p("Eg26gABUAmHgFNBHuAFNIAACpMht1AAAg");
	this.shape.setTransform(350.525,191.2251);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("Eg26ACoIAAipUAmHgFNBHuAFNIAACpg");
	this.shape_1.setTransform(350.525,191.2251);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{y:191.2251}},{t:this.shape,p:{y:191.2251}}]}).to({state:[{t:this.shape_1,p:{y:190.925}},{t:this.shape,p:{y:190.925}}]},1).to({state:[{t:this.shape_1,p:{y:190.625}},{t:this.shape,p:{y:190.625}}]},1).to({state:[{t:this.shape_1,p:{y:190.375}},{t:this.shape,p:{y:190.375}}]},1).to({state:[{t:this.shape_1,p:{y:190.075}},{t:this.shape,p:{y:190.075}}]},1).to({state:[{t:this.shape_1,p:{y:189.775}},{t:this.shape,p:{y:189.775}}]},1).to({state:[{t:this.shape_1,p:{y:189.475}},{t:this.shape,p:{y:189.475}}]},1).to({state:[{t:this.shape_1,p:{y:189.175}},{t:this.shape,p:{y:189.175}}]},1).to({state:[{t:this.shape_1,p:{y:188.875}},{t:this.shape,p:{y:188.875}}]},1).to({state:[{t:this.shape_1,p:{y:188.625}},{t:this.shape,p:{y:188.625}}]},1).to({state:[{t:this.shape_1,p:{y:188.325}},{t:this.shape,p:{y:188.325}}]},1).to({state:[{t:this.shape_1,p:{y:188.025}},{t:this.shape,p:{y:188.025}}]},1).to({state:[{t:this.shape_1,p:{y:187.725}},{t:this.shape,p:{y:187.725}}]},1).to({state:[{t:this.shape_1,p:{y:187.425}},{t:this.shape,p:{y:187.425}}]},1).to({state:[{t:this.shape_1,p:{y:187.125}},{t:this.shape,p:{y:187.125}}]},1).to({state:[{t:this.shape_1,p:{y:186.875}},{t:this.shape,p:{y:186.875}}]},1).to({state:[{t:this.shape_1,p:{y:186.575}},{t:this.shape,p:{y:186.575}}]},1).to({state:[{t:this.shape_1,p:{y:186.275}},{t:this.shape,p:{y:186.275}}]},1).to({state:[{t:this.shape_1,p:{y:185.975}},{t:this.shape,p:{y:185.975}}]},1).to({state:[{t:this.shape_1,p:{y:185.675}},{t:this.shape,p:{y:185.675}}]},1).to({state:[{t:this.shape_1,p:{y:185.375}},{t:this.shape,p:{y:185.375}}]},1).to({state:[{t:this.shape_1,p:{y:185.125}},{t:this.shape,p:{y:185.125}}]},1).to({state:[{t:this.shape_1,p:{y:184.825}},{t:this.shape,p:{y:184.825}}]},1).to({state:[{t:this.shape_1,p:{y:184.525}},{t:this.shape,p:{y:184.525}}]},1).to({state:[{t:this.shape_1,p:{y:184.2251}},{t:this.shape,p:{y:184.2251}}]},1).wait(51));

	// bush1
	this.bushes2 = new lib.bushes2();
	this.bushes2.name = "bushes2";
	this.bushes2.setTransform(325,174.25,1,1,0,0,0,331,26.5);

	this.timeline.addTween(cjs.Tween.get(this.bushes2).wait(1).to({y:173.4},0).wait(1).to({y:172.6},0).wait(1).to({y:171.75},0).wait(1).to({y:170.95},0).wait(1).to({y:170.15},0).wait(1).to({y:169.3},0).wait(1).to({y:168.5},0).wait(1).to({y:167.7},0).wait(1).to({y:166.85},0).wait(1).to({y:166.05},0).wait(1).to({y:165.25},0).wait(1).to({y:164.4},0).wait(1).to({y:163.6},0).wait(1).to({y:162.75},0).wait(1).to({y:161.95},0).wait(1).to({y:161.15},0).wait(1).to({y:160.3},0).wait(1).to({y:159.5},0).wait(1).to({y:158.7},0).wait(1).to({y:157.85},0).wait(1).to({y:157.05},0).wait(1).to({y:156.25},0).wait(53));

	// tree
	this.instance_2 = new lib.tree();
	this.instance_2.setTransform(462,125.55,0.58,0.5679,0,0,0,-2,21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75));

	// background
	this.instance_3 = new lib.darktree();
	this.instance_3.setTransform(259.05,105.4,0.4128,0.4476,0,0,0,-67,8.6);

	this.instance_4 = new lib.tree();
	this.instance_4.setTransform(8.45,125.4,0.42,0.4175,0,0,0,-2,21.7);

	this.instance_5 = new lib.darktree();
	this.instance_5.setTransform(37,119.05,0.3945,0.5163,0,0,0,-67,8.5);

	this.instance_6 = new lib.darktree();
	this.instance_6.setTransform(601,130.5,0.4404,0.5018,0,0,0,-67,8.6);

	this.instance_7 = new lib.tree();
	this.instance_7.setTransform(647,129.1,0.69,0.6942,0,0,0,-2,21.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(51,18,0,0)").ss(1,1,1).p("Eg26gPsMBt1AAAIAAfZMht1AAAg");
	this.shape_2.setTransform(350.525,100.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#054C84","#087AD2","#FFFFFF"],[0.275,0.757,1],-351.4,0,351.5,0).s().p("Eg26APtIAA/ZMBt1AAAIAAfZg");
	this.shape_3.setTransform(350.525,100.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(75));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(281.1,99.1,441.6,160.29999999999998);
// library properties:
lib.properties = {
	id: '6E3624CAB34E476681339851CB96E4C0',
	width: 700,
	height: 200,
	fps: 24,
	color: "#00CCFF",
	opacity: 1.00,
	manifest: [
		{src:"images/midterm_McClain_atlas_1.png?1679009265551", id:"midterm_McClain_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6E3624CAB34E476681339851CB96E4C0'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;