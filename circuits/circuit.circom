pragma circom 2.0.0;

include "node_modules/circomlib/circomlib.circom";

component main {
    public input hash;
    private input secret;

    component hasher = Poseidon(1);

    hasher.inputs[0] <== secret;
    hash === hasher.out;}
