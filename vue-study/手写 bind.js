Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError("error");
    }

    var args = [...arguments].slice(1), fn = this;
    return function Fn() {
        return fn.apply(this instanceof Fn ?
            new fn(...arguments) : context, args.concat(...arguments));
    }
}

function foo(args) {
    console.log(...args, this);
}
let obj = {};
args.myBind(obj, 1, 2);
