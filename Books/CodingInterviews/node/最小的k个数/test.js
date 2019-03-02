function test () {
    let a = 1;
    return function () {
        a++;
        console.log(a);
    };
}

let a = test();

a();
a();
a();