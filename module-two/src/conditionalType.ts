// conditional type:type operator
type isString<T>=T extends string?true:false;
type A=isString<number> //!false
type Result<T>=T extends string?"string":"other";
type B=Result<number|string> //!"string"|"other"
type RicPeoplelessVehicle={
    car:string;
    bike:string;
    bus:string;
}
type CheckValues<T>=T extends keyof RicPeoplelessVehicle?true:false;
type C=CheckValues<"car"> //?true