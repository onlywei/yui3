YUI.add("array-extras",function(E){var C=E.Lang,D=Array.prototype,B=E.Array;B.lastIndexOf=D.lastIndexOf?function(A,G,F){return F||F===0?A.lastIndexOf(G,F):A.lastIndexOf(G);}:function(F,I,H){var A=F.length,G=A-1;if(H||H===0){G=Math.min(H<0?A+H:H,A);}if(G>-1&&A>0){for(;G>-1;--G){if(F[G]===I){return G;}}}return -1;};B.unique=function(F,J){var I=0,A=F.length,H=[],K,G;for(;I<A;++I){K=F[I];for(G=H.length;G>-1;--G){if(K===H[G]){break;}}if(G===-1){H.push(K);}}if(J){if(C.isNumber(H[0])){H.sort(B.numericSort);}else{H.sort();}}return H;};B.filter=D.filter?function(A,F,G){return A.filter(F,G);}:function(F,J,K){var H=0,A=F.length,G=[],I;for(;H<A;++H){I=F[H];if(J.call(K,I,H,F)){G.push(I);}}return G;};B.reject=function(A,F,G){return B.filter(A,function(J,I,H){return !F.call(G,J,I,H);});};B.every=D.every?function(A,F,G){return A.every(F,G);}:function(F,H,I){for(var G=0,A=F.length;G<A;++G){if(!H.call(I,F[G],G,F)){return false;}}return true;};B.map=D.map?function(A,F,G){return A.map(F,G);}:function(F,I,J){var H=0,A=F.length,G=F.concat();for(;H<A;++H){G[H]=I.call(J,F[H],H,F);}return G;};B.reduce=D.reduce?function(A,H,F,G){return A.reduce(function(L,K,J,I){return F.call(G,L,K,J,I);},H);}:function(G,K,I,J){var H=0,F=G.length,A=K;for(;H<F;++H){A=I.call(J,A,G[H],H,G);}return A;};B.find=function(F,H,I){for(var G=0,A=F.length;G<A;G++){if(H.call(I,F[G],G,F)){return F[G];}}return null;};B.grep=function(A,F){return B.filter(A,function(H,G){return F.test(H);});};B.partition=function(A,G,H){var F={matches:[],rejects:[]};B.each(A,function(J,I){var K=G.call(H,J,I,A)?F.matches:F.rejects;K.push(J);});return F;};B.zip=function(F,A){var G=[];B.each(F,function(I,H){G.push([I,A[H]]);});return G;};B.forEach=B.each;},"@VERSION@");YUI.add("arraylist",function(E){var D=E.Array,C=D.each,A;function B(F){if(F!==undefined){this._items=E.Lang.isArray(F)?F:D(F);}else{this._items=this._items||[];}}A={item:function(F){return this._items[F];},each:function(G,F){C(this._items,function(I,H){I=this.item(H);G.call(F||I,I,H,this);},this);return this;},some:function(G,F){return D.some(this._items,function(I,H){I=this.item(H);return G.call(F||I,I,H,this);},this);},indexOf:function(F){return D.indexOf(this._items,F);},size:function(){return this._items.length;},isEmpty:function(){return !this.size();}};A._item=A.item;B.prototype=A;E.mix(B,{addMethod:function(F,G){G=D(G);C(G,function(H){F[H]=function(){var J=D(arguments,0,true),I=[];C(this._items,function(M,L){M=this._item(L);var K=M[H].apply(M,J);if(K!==undefined&&K!==M){I.push(K);}},this);return I.length?I:this;};});}});E.ArrayList=B;},"@VERSION@");YUI.add("arraylist-add",function(A){A.mix(A.ArrayList.prototype,{add:function(D,C){var B=this._items;if(A.Lang.isNumber(C)){B.splice(C,0,D);}else{B.push(D);}return this;},remove:function(E,D,B){B=B||this.itemsAreEqual;for(var C=this._items.length-1;C>=0;--C){if(B.call(this,E,this.item(C))){this._items.splice(C,1);if(!D){break;}}}return this;},itemsAreEqual:function(C,B){return C===B;}});},"@VERSION@",{requires:["arraylist"]});YUI.add("arraylist-filter",function(A){A.mix(A.ArrayList.prototype,{filter:function(C){var B=[];A.Array.each(this._items,function(E,D){E=this.item(D);if(C(E)){B.push(E);}},this);return new this.constructor(B);}});},"@VERSION@",{requires:["arraylist"]});YUI.add("array-invoke",function(A){A.Array.invoke=function(B,E){var D=A.Array(arguments,2,true),F=A.Lang.isFunction,C=[];A.Array.each(A.Array(B),function(H,G){if(F(H[E])){C[G]=H[E].apply(H,D);}});return C;};},"@VERSION@");YUI.add("collection",function(A){},"@VERSION@",{use:["array-extras","arraylist","arraylist-add","arraylist-filter","array-invoke"]});