let result = 0;

for (let i = 0; i < 10000000; i++) {
    result += 0.1 + i;
}

console.log(result);