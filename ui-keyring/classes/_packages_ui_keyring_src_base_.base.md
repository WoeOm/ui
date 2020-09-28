**Polkadot JS UI libraries**

> [README](../README.md) / [Globals](../globals.md) / ["packages/ui-keyring/src/Base"](../modules/_packages_ui_keyring_src_base_.md) / Base

# Class: Base

## Hierarchy

* **Base**

  ↳ [Keyring](_packages_ui_keyring_src_keyring_.keyring.md)

## Index

### Constructors

* [constructor](_packages_ui_keyring_src_base_.base.md#constructor)

### Accessors

* [accounts](_packages_ui_keyring_src_base_.base.md#accounts)
* [addresses](_packages_ui_keyring_src_base_.base.md#addresses)
* [contracts](_packages_ui_keyring_src_base_.base.md#contracts)
* [genesisHash](_packages_ui_keyring_src_base_.base.md#genesishash)
* [keyring](_packages_ui_keyring_src_base_.base.md#keyring)

### Methods

* [decodeAddress](_packages_ui_keyring_src_base_.base.md#decodeaddress)
* [encodeAddress](_packages_ui_keyring_src_base_.base.md#encodeaddress)
* [getPair](_packages_ui_keyring_src_base_.base.md#getpair)
* [getPairs](_packages_ui_keyring_src_base_.base.md#getpairs)
* [isAvailable](_packages_ui_keyring_src_base_.base.md#isavailable)
* [isPassValid](_packages_ui_keyring_src_base_.base.md#ispassvalid)
* [setDevMode](_packages_ui_keyring_src_base_.base.md#setdevmode)
* [setSS58Format](_packages_ui_keyring_src_base_.base.md#setss58format)

## Constructors

### constructor

\+ **new Base**(): [Base](_packages_ui_keyring_src_base_.base.md)

*Defined in [packages/ui-keyring/src/Base.ts:29](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/Base.ts#L29)*

**Returns:** [Base](_packages_ui_keyring_src_base_.base.md)

## Accessors

### accounts

• get **accounts**(): [AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)

*Defined in [packages/ui-keyring/src/Base.ts:38](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/Base.ts#L38)*

**Returns:** [AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)

___

### addresses

• get **addresses**(): [AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)

*Defined in [packages/ui-keyring/src/Base.ts:42](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/Base.ts#L42)*

**Returns:** [AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)

___

### contracts

• get **contracts**(): [AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)

*Defined in [packages/ui-keyring/src/Base.ts:46](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/Base.ts#L46)*

**Returns:** [AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)

___

### genesisHash

• get **genesisHash**(): string \| undefined

*Defined in [packages/ui-keyring/src/Base.ts:58](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/Base.ts#L58)*

**Returns:** string \| undefined

___

### keyring

• get **keyring**(): KeyringInstance

*Defined in [packages/ui-keyring/src/Base.ts:50](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/Base.ts#L50)*

**Returns:** KeyringInstance

## Methods

### decodeAddress

▸ **decodeAddress**(`key`: string \| Uint8Array, `ignoreChecksum?`: undefined \| false \| true, `ss58Format?`: Prefix): Uint8Array

*Defined in [packages/ui-keyring/src/Base.ts:62](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/Base.ts#L62)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string \| Uint8Array |
`ignoreChecksum?` | undefined \| false \| true |
`ss58Format?` | Prefix |

**Returns:** Uint8Array

___

### encodeAddress

▸ **encodeAddress**(`key`: string \| Uint8Array, `ss58Format?`: Prefix): string

*Defined in [packages/ui-keyring/src/Base.ts:66](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/Base.ts#L66)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string \| Uint8Array |
`ss58Format?` | Prefix |

**Returns:** string

___

### getPair

▸ **getPair**(`address`: string \| Uint8Array): KeyringPair

*Defined in [packages/ui-keyring/src/Base.ts:70](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/Base.ts#L70)*

#### Parameters:

Name | Type |
------ | ------ |
`address` | string \| Uint8Array |

**Returns:** KeyringPair

___

### getPairs

▸ **getPairs**(): KeyringPair[]

*Defined in [packages/ui-keyring/src/Base.ts:74](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/Base.ts#L74)*

**Returns:** KeyringPair[]

___

### isAvailable

▸ **isAvailable**(`_address`: Uint8Array \| string): boolean

*Defined in [packages/ui-keyring/src/Base.ts:80](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/Base.ts#L80)*

#### Parameters:

Name | Type |
------ | ------ |
`_address` | Uint8Array \| string |

**Returns:** boolean

___

### isPassValid

▸ **isPassValid**(`password`: string): boolean

*Defined in [packages/ui-keyring/src/Base.ts:91](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/Base.ts#L91)*

#### Parameters:

Name | Type |
------ | ------ |
`password` | string |

**Returns:** boolean

___

### setDevMode

▸ **setDevMode**(`isDevelopment`: boolean): void

*Defined in [packages/ui-keyring/src/Base.ts:101](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/Base.ts#L101)*

#### Parameters:

Name | Type |
------ | ------ |
`isDevelopment` | boolean |

**Returns:** void

___

### setSS58Format

▸ **setSS58Format**(`ss58Format?`: Prefix): void

*Defined in [packages/ui-keyring/src/Base.ts:95](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/Base.ts#L95)*

#### Parameters:

Name | Type |
------ | ------ |
`ss58Format?` | Prefix |

**Returns:** void
