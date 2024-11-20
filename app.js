{
    let arr = [-1, 5, -5, 11]
    arr2 = arr.filter(n => n > 0)
    console.log(arr2);
}
{
    let str = "hello world"
    str.split("").map(l => l.charAt(0).toUpperCase()+l.slice(1)).join(" ")
}
{
    let num = 7835
    console.log(num.toString().split("").reverse().join(""));
}