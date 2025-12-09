async function generateHash() {
  const secret = document.getElementById("secret").value;

  const hash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(secret)
  );

  const hashHex = Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");

  document.getElementById("hash").innerText = hashHex;
}
