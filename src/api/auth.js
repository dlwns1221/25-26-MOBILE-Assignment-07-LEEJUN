export const signInAsync = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "dlwns1221@gmail.com" && password === "qlalfqjsgh") {
        resolve({ id: "u1", name: "어드민", email });
      } else {
        reject(new Error("INVALID_CREDENTIALS"));
      }
    }, 1000);
  });
};
