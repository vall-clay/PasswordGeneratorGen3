function getPassword() {
  const passwordLength = document.getElementById("passwordLength").value;
  const password = generatePassword(passwordLength);
  document.getElementById("password").value = password;
}

function savePassword() {
  const password = document.getElementById("password").value;
  const filename = document.getElementById("filename").value;
  const blob = new Blob([password], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

function generatePassword(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}
