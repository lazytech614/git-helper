export const SAMPLE_DIFF = `
diff --git a/src/auth.ts b/src/auth.ts

+ import { ClerkProvider } from "@clerk/nextjs";

+ export async function login() {
+   console.log("logged in");
+ }

- export async function loginOld() {}
`;

export const EXAMPLE_URL = "https://githubhelper.dev/tools/base64-url?source=homepage&theme=dark";

export const EXAMPLE_ORIGINAL = `function greet(name) {
  return "Hello " + name;
}

console.log(greet("John"));
`;

export const EXAMPLE_MODIFIED = `function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("John"));
console.log("Welcome to GitHub Helper");
`;


export const SAMPLE_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjk5OTk5OTk5OTl9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"