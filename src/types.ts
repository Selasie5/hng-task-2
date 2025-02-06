export interface NumberResponse {
    number: number;
    is_prime:boolean,
    is_perfect: boolean,
    properties: string[];
    digit_sum : number;
    fun_fact:unknown;
}

export interface ErrorResponse{
    error:true,
    number:string
}