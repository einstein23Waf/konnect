export const getErrorMessage = (error: any): string => {
  switch (error.code) {
    case "auth/invalid-email":
      return "Invalid email address.";
    case "auth/user-disabled":
      return "This account has been disabled.";
    case "auth/user-not-found":
      return "No account found with this email.";
    case "auth/wrong-password":
      return "Incorrect password.";
    default:
      return "An error occurred. Please try again";
  }
};
