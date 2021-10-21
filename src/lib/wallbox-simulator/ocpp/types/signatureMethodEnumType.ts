/**
 * ### 2.77. SignatureMethodEnumType
 * _Enumeration_
 *
 * Enumeration of the cryptographic method used to create the digital signature. The list is
 * expected to grow in future OCPP releases to allow other signature methods used by Smart Meters.
 *
 * SignatureMethodEnumType is used by: Common:SignedMeterValueType
 */
export type SignatureMethodEnumType = typeof signatureMethods[number];

export const signatureMethods = [
  "ECDSAP256SHA256", // The encoded data is hashed with the SHA-256 hash function, and the hash value is then signed with the ECDSA algorithm using the NIST P-256 elliptic curve. These are the standard algorithms in DLMS security suite 1.
  "ECDSAP384SHA384", // The encoded data is hashed with the SHA-384 hash function, and the hash value is then signed with the ECDSA algorithm using the NIST P-384 elliptic curve. These are the standard algorithms in DLMS security suite 2.
  "ECDSA192SHA256", // The encoded data is hashed with the SHA-256 hash function, and the hash value is then signed with the ECDSA algorithm using a 192-bit elliptic curve. This method is used for instance in EDL meters.
] as const;
