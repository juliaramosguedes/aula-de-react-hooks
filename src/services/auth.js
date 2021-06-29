export const signIn = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        user: {
          name: "Julia",
          email: "hi@juliaramos.dev",
        },
      });
    }, 2000);
  });
};
