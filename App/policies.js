/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
  names: {
    signUpSignIn: "B2C_1_SharpsUserFlow",
    editProfile: "B2C_1_edit_profile_v2",
  },
  authorities: {
    signUpSignIn: {
      authority:
        "https://sharpsmountain.b2clogin.com/sharpsmountain.onmicrosoft.com/B2C_1_SharpsUserFlow",
    },
    editProfile: {
      authority:
        "https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/B2C_1_edit_profile_v2",
    },
  },
  authorityDomain: "sharpsmountain.b2clogin.com",
};
