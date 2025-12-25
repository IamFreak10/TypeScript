// ?:Ternary Operator:Decision Making
// ??:nullish coalescing operator :null||undefined
// ?. optional chaning

const biyaEligible = (age: number) => {
  //   if (age >= 21) {
  //     console.log('You are Eligible');
  //   } else {
  //     console.log('You are Not Eligible');
  //   }
  const result = age >= 21 ? 'You Are Eligible' : 'You are not eligible';
  //   console.log(result);
};

biyaEligible(12);

const userTheme = undefined;
const selectedTheme = userTheme ?? 'light';
// console.log(selectedTheme);
const isAuthenticated=null;

