function add(a: number, b: number) {
    return a + b;
}

type AddFn = typeof add;
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never; 

type AddFnReturnValueType = ReturnValueType<AddFn>

// Note: Visit Utility Type built with typescript to check the shorthand any utility features