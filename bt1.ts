function check<N>(n:N):string{
    return  typeof n
}

console.log(check<number>(123));
console.log(check<string>("123"));
console.log(check<boolean>(true));

