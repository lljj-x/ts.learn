import './a.ts';
import './b.ts';

class A {
    static c = '11';

    constructor(public a: string, public b: string) {
        this.init();
    }

    init() {
        console.log('ok');
        this.asyncFn().then(() => {
            console.log('async');
        });
    }

    async asyncFn() {
        console.log('asymc');
    }
}

new A('a', 'b');
