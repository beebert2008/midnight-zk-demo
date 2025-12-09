async function generateHash() {
    const secretInput = document.getElementById("secret");
    const hashOutput = document.getElementById("hash");

    const secret = secretInput.value;

    if (!secret) {
        hashOutput.innerText = "Please enter a number.";
        return;
    }

    // Simple fake hash (for demo)
    const hash = "0x" + BigInt(secret * 123456789n).toString(16);

    hashOutput.innerText = hash;
}
