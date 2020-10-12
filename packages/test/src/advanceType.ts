{
    // 类型别名
    type Name = string;
    const x: Name = '11';
    console.log(x);

    type NameResolver = () => string;
    type NameOrResolver = Name | NameResolver;

    function getName(n: NameOrResolver): Name {
        return typeof n === 'string' ? n : n();
    }

    getName('hzhzhz');
}

{
    // 字符串字面量类型
    type EventNames = 'click' | 'scroll' | 'mousemove';
    const addEvent = (ele: Element, event: EventNames) => {
        ele.addEventListener(event, () => {
            // nothing ..
        });
    };
    addEvent(document.body, 'click');
}

{
    // Tuple 元组
    const array: [string, number] = ['Tom', 25];

    array.push('111');

    // 新元素的类型不能超出固定的元素
    // array.push(null);
    console.log(array);
}

// eslint-disable-next-line no-lone-blocks
{
    // 枚举
    enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}

    console.log(Days.Sun);

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    enum Days1 {Sun = 1, Mon, Tue, Wed, Thu, Fri, Sat = <any>'S'}

    console.log(Days1);

    // 计算成员
    enum Color {Green, Blue, Red = 're11111d'.length}
    console.log(Color);

    // 常量枚举
    const enum Directions {
        Up,
        Down,
        Left,
        Right,
    }
    const directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
    console.log(directions);

    // class
    class Animal {
        private name: string;

        public constructor(name: string) {
            this.name = name;
        }
    }

    new Animal('Jack');

    // 抽象类
    abstract class Animal2 {
        public name: string ;

        public constructor(name: string) {
            this.name = name;
        }

        public abstract sayHi(): any;
    }

    class Cat extends Animal2 {
        public sayHi() {
            console.log(`Meow, My name is ${this.name}`);
        }
    }

    const cat = new Cat('Tom');
}

{
    // 泛型
    function createArray(length: number, value: any): Array<any> {
        const result = [];
        for (let i = 0; i < length; i += 1) {
            result[i] = value;
        }
        return result;
    }

    createArray(3, 'x'); // ['x', 'x', 'x']

    // 泛型类
    class GenericNumber<T> {
        zeroValue: T | undefined;

        add: ((x: T, y: T) => T) | undefined;
    }

    const myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) { return x + y; };
}
