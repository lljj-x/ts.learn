
// base type

{
    // base
    const numberA = 1;
    console.log(numberA);

    // eslint-disable-next-line
    let anyA: any = 'xx';
    anyA = 1;

    console.log(anyA);
}

{
    // object interfaces
    interface Person {
        readonly id: string;
        name: string;
        age?: number;
        [key: string]: string | number | undefined; // 包含了可选的属性
    }

    const tom: Person = {
        id: '111',
        name: 'Tom',
        age: 25
    };

    // readonly
    // tom.id = '333';
    console.log(tom);

}

{
    // Array

    // 「类型 + 方括号」表示法
    const arrayList: number[] = [1, 2, 3];

    arrayList.push(4);

    console.log(arrayList);

    // 泛型表示法
    const arrayList2: Array<number | string> = [1, 2, 3];
    arrayList2.push('4');
    console.log(arrayList2);

    // 接口表示法
    interface NumberArray {
        [index: number]: number | string;
    }
    const arrayList3: NumberArray = [1, 3, 4];

    // 类数组不能直接push
    // arrayList3.push('4');
    console.log(arrayList3);

    // 类数组 arguments
    function sum() {
        /*
        const args: {
            [index: number]: number;
            length: number;
            callee: Function;
            // eslint-disable-next-line prefer-rest-params
        } = arguments;
        */

        // eslint-disable-next-line
        const anyArray: any[] = [1, '2'];
        console.log(anyArray);

        // eslint-disable-next-line prefer-rest-params
        const args: IArguments = arguments;
        console.log(args);
    }

    sum();

}

{
    // Function

    // 函数申明
    function sum(x: number, y: number): number {
        return x + y;
    }

    console.log(sum(1, 2));

    // 函数表达式
    const mySum: (x: number, y: number) => number = function fn(x: number, y: number): number {
        return x + y;
    };
    console.log(mySum(1, 2));

    // 接口定义形状
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }

    const mySearch: SearchFunc = function fn(source: string, subString: string) {
        return source.search(subString) !== -1;
    };

    mySearch('111', '1');

    // 定义默认值即为可选参数

    // 重载
    function reverse(x: number): number;
    function reverse(x: string): string;
    function reverse(x: number | string): number | string {
        if (typeof x === 'string') {
            return x.split('').reverse().join('');
        }
        if (typeof x === 'number') {
            return Number(x.toString().split('').reverse().join(''));
        }

        return '';
    }
    console.log(reverse(1));
}

{
    // 类型断言 as

    // 联合类型断言
    interface Cat {
        name: string;
        run(): void;
    }

    interface Fish {
        name: string;
        swim(): void;
    }

    function isFish(animal: Cat | Fish) {
        // as 断言类型
        return typeof (animal as Fish).swim === 'function';
    }

    isFish({
        name: 'xx',
        swim() {
            console.log('swim ....');
        }
    });

    //  父类断言为更加具体的子类
    class ApiError extends Error {
         code = 0;
    }

    class HttpError extends Error {
        statusCode = 200;
    }

    function isApiError(error: Error) {
        return error instanceof ApiError;
        // return typeof (error as ApiError).code === 'number';
    }

    isApiError({ message: '', name: '', stack: '' });

    // interface
    interface ApiErrorInterface extends Error {
        code: number;
    }
    interface HttpErrorInterface extends Error {
        statusCode: number;
    }

    function iIsApiError(error: Error) {
        return typeof (error as ApiErrorInterface).code === 'number';
    }

    iIsApiError({ message: '', name: '', stack: '' });


    // 任何一个类型断言为 any
    (window as any).foo = 1;

    // any 断言为一个具体的类型
    function getCacheData(key: string): any {
        return (window as any).cache[key];
    }

    interface Cat {
        name: string;
        run(): void;
    }

    const tom = getCacheData('tom') as Cat;
    tom.run();


    // 双重断言 - 借助 中间any来as任何类型
    interface Cat {
        run(): void;
    }
    interface Fish {
        swim(): void;
    }

    function testCat(cat: Cat) {
        return (cat as any as Fish);
    }
}
