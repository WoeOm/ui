**Polkadot JS UI libraries**

> [README](../README.md) / [Globals](../globals.md) / "packages/react-qr/src/util"

# Module: "packages/react-qr/src/util"

## Index

### Functions

* [createAddressPayload](_packages_react_qr_src_util_.md#createaddresspayload)
* [createFrames](_packages_react_qr_src_util_.md#createframes)
* [createImgSize](_packages_react_qr_src_util_.md#createimgsize)
* [createSignPayload](_packages_react_qr_src_util_.md#createsignpayload)
* [decodeString](_packages_react_qr_src_util_.md#decodestring)
* [encodeNumber](_packages_react_qr_src_util_.md#encodenumber)
* [encodeString](_packages_react_qr_src_util_.md#encodestring)

## Functions

### createAddressPayload

▸ **createAddressPayload**(`address`: string, `genesisHash`: string): Uint8Array

*Defined in [packages/react-qr/src/util.ts:31](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/react-qr/src/util.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`address` | string |
`genesisHash` | string |

**Returns:** Uint8Array

___

### createFrames

▸ **createFrames**(`input`: Uint8Array): Uint8Array[]

*Defined in [packages/react-qr/src/util.ts:46](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/react-qr/src/util.ts#L46)*

#### Parameters:

Name | Type |
------ | ------ |
`input` | Uint8Array |

**Returns:** Uint8Array[]

___

### createImgSize

▸ **createImgSize**(`size?`: string \| number): Record\<string, string>

*Defined in [packages/react-qr/src/util.ts:66](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/react-qr/src/util.ts#L66)*

#### Parameters:

Name | Type |
------ | ------ |
`size?` | string \| number |

**Returns:** Record\<string, string>

___

### createSignPayload

▸ **createSignPayload**(`address`: string, `cmd`: number, `payload`: string \| Uint8Array, `genesisHash`: string \| Uint8Array): Uint8Array

*Defined in [packages/react-qr/src/util.ts:35](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/react-qr/src/util.ts#L35)*

#### Parameters:

Name | Type |
------ | ------ |
`address` | string |
`cmd` | number |
`payload` | string \| Uint8Array |
`genesisHash` | string \| Uint8Array |

**Returns:** Uint8Array

___

### decodeString

▸ **decodeString**(`value`: Uint8Array): string

*Defined in [packages/react-qr/src/util.ts:25](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/react-qr/src/util.ts#L25)*

#### Parameters:

Name | Type |
------ | ------ |
`value` | Uint8Array |

**Returns:** string

___

### encodeNumber

▸ **encodeNumber**(`value`: number): Uint8Array

*Defined in [packages/react-qr/src/util.ts:11](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/react-qr/src/util.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`value` | number |

**Returns:** Uint8Array

___

### encodeString

▸ **encodeString**(`value`: string): Uint8Array

*Defined in [packages/react-qr/src/util.ts:15](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/react-qr/src/util.ts#L15)*

#### Parameters:

Name | Type |
------ | ------ |
`value` | string |

**Returns:** Uint8Array
