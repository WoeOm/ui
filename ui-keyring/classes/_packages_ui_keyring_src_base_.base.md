[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["packages/ui-keyring/src/Base"](../modules/_packages_ui_keyring_src_base_.md) › [Base](_packages_ui_keyring_src_base_.base.md)

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

###  constructor

\+ **new Base**(): *[Base](_packages_ui_keyring_src_base_.base.md)*

*Defined in [packages/ui-keyring/src/Base.ts:30](https://github.com/polkadot-js/ui/blob/54a325f3/packages/ui-keyring/src/Base.ts#L30)*

**Returns:** *[Base](_packages_ui_keyring_src_base_.base.md)*

## Accessors

###  accounts

• **get accounts**(): *[AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)*

*Defined in [packages/ui-keyring/src/Base.ts:39](https://github.com/polkadot-js/ui/blob/54a325f3/packages/ui-keyring/src/Base.ts#L39)*

**Returns:** *[AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)*

___

###  addresses

• **get addresses**(): *[AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)*

*Defined in [packages/ui-keyring/src/Base.ts:43](https://github.com/polkadot-js/ui/blob/54a325f3/packages/ui-keyring/src/Base.ts#L43)*

**Returns:** *[AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)*

___

###  contracts

• **get contracts**(): *[AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)*

*Defined in [packages/ui-keyring/src/Base.ts:47](https://github.com/polkadot-js/ui/blob/54a325f3/packages/ui-keyring/src/Base.ts#L47)*

**Returns:** *[AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)*

___

###  genesisHash

• **get genesisHash**(): *string | undefined*

*Defined in [packages/ui-keyring/src/Base.ts:59](https://github.com/polkadot-js/ui/blob/54a325f3/packages/ui-keyring/src/Base.ts#L59)*

**Returns:** *string | undefined*

___

###  keyring

• **get keyring**(): *KeyringInstance*

*Defined in [packages/ui-keyring/src/Base.ts:51](https://github.com/polkadot-js/ui/blob/54a325f3/packages/ui-keyring/src/Base.ts#L51)*

**Returns:** *KeyringInstance*

## Methods

###  decodeAddress

▸ **decodeAddress**(`key`: string | Uint8Array, `ignoreChecksum?`: undefined | false | true, `ss58Format?`: Prefix): *Uint8Array*

*Defined in [packages/ui-keyring/src/Base.ts:63](https://github.com/polkadot-js/ui/blob/54a325f3/packages/ui-keyring/src/Base.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; Uint8Array |
`ignoreChecksum?` | undefined &#124; false &#124; true |
`ss58Format?` | Prefix |

**Returns:** *Uint8Array*

___

###  encodeAddress

▸ **encodeAddress**(`key`: string | Uint8Array, `ss58Format?`: Prefix): *string*

*Defined in [packages/ui-keyring/src/Base.ts:67](https://github.com/polkadot-js/ui/blob/54a325f3/packages/ui-keyring/src/Base.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; Uint8Array |
`ss58Format?` | Prefix |

**Returns:** *string*

___

###  getPair

▸ **getPair**(`address`: string | Uint8Array): *KeyringPair*

*Defined in [packages/ui-keyring/src/Base.ts:71](https://github.com/polkadot-js/ui/blob/54a325f3/packages/ui-keyring/src/Base.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *KeyringPair*

___

###  getPairs

▸ **getPairs**(): *KeyringPair[]*

*Defined in [packages/ui-keyring/src/Base.ts:75](https://github.com/polkadot-js/ui/blob/54a325f3/packages/ui-keyring/src/Base.ts#L75)*

**Returns:** *KeyringPair[]*

___

###  isAvailable

▸ **isAvailable**(`_address`: Uint8Array | string): *boolean*

*Defined in [packages/ui-keyring/src/Base.ts:81](https://github.com/polkadot-js/ui/blob/54a325f3/packages/ui-keyring/src/Base.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`_address` | Uint8Array &#124; string |

**Returns:** *boolean*

___

###  isPassValid

▸ **isPassValid**(`password`: string): *boolean*

*Defined in [packages/ui-keyring/src/Base.ts:92](https://github.com/polkadot-js/ui/blob/54a325f3/packages/ui-keyring/src/Base.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |

**Returns:** *boolean*

___

###  setDevMode

▸ **setDevMode**(`isDevelopment`: boolean): *void*

*Defined in [packages/ui-keyring/src/Base.ts:102](https://github.com/polkadot-js/ui/blob/54a325f3/packages/ui-keyring/src/Base.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`isDevelopment` | boolean |

**Returns:** *void*

___

###  setSS58Format

▸ **setSS58Format**(`ss58Format?`: Prefix): *void*

*Defined in [packages/ui-keyring/src/Base.ts:96](https://github.com/polkadot-js/ui/blob/54a325f3/packages/ui-keyring/src/Base.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`ss58Format?` | Prefix |

**Returns:** *void*
