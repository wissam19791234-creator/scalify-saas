let credits=12; export const getUserCredits=()=>credits; export const consumeCredit=()=>{credits=Math.max(0,credits-1);return credits}; export const refillCredits=(v:number)=>credits+=v;
