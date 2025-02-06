export function isPrime (n:number):boolean{
    if(n <=1)
    {
        return false;
    }
    for (let i=2; i <= Math.sqrt(n);i++)
    {
        if(n%i === 0)
        {
            return false
        }
    }
    return true
}

export function isPerfect(n:number):boolean
{
    if(n <=1)
    {
        return false;
    }
    let sum =1;
    for (let i=2; i<Math.sqrt(n);i++)
    {
        if(n%i === 0)
        {
            sum += i;
            if(i !== n/i)
            {
                sum += n/i
            }
        }
    }
    return sum === n;

}

export function isArmstrong (n:number){
    const numStr = n.toString();
    const power = numStr.length;
    const sum = numStr
    .split("")
    .reduce((acc,digit)=> acc + Math.pow(parseInt(digit),power),0);
    return sum === n;
}

export function getDigitSum (n:number):number{
    return n
    .toString()
    .split("")
    .reduce((acc,digit)=> acc + parseInt(digit),0);
}