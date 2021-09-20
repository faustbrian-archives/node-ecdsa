import "jest-extended";

import { sign, verify, verifyBatch } from "./index";

test("#sign", () => {
  expect(
    sign(
      "0000000000000000000000000000000000000000000000000000000000000000",
      "0000000000000000000000000000000000000000000000000000000000000003",
    ),
  ).toBeString();
});

test("#verify", () => {
  expect(verify(
    "0000000000000000000000000000000000000000000000000000000000000000",
    sign(
      "0000000000000000000000000000000000000000000000000000000000000000",
      "0000000000000000000000000000000000000000000000000000000000000003",
    ),
    "02f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
  )).toBeTrue();
});

test("#verifyBatch", () => {
  expect(verifyBatch([{
    hash: "0000000000000000000000000000000000000000000000000000000000000000",
    publicKey:
      "02f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
    signature: sign(
      "0000000000000000000000000000000000000000000000000000000000000000",
      "0000000000000000000000000000000000000000000000000000000000000003",
    ),
  }, {
    hash: "0000000000000000000000000000000000000000000000000000000000000000",
    publicKey:
      "02f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
    signature: sign(
      "0000000000000000000000000000000000000000000000000000000000000000",
      "0000000000000000000000000000000000000000000000000000000000000003",
    ),
  }])).toBeTrue();
});
