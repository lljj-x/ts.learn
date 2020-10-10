export default class A {
    static c = '11';

    constructor(public a: string, public b: string) {
        this.init();
    }

    init() {
        console.log('ok');
        this.asyncFn();
    }

    async asyncFn() {
        console.log('asymc');
    }
}
