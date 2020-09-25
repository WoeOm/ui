**Polkadot JS UI libraries**

> [README](../README.md) / [Globals](../globals.md) / ["packages/ui-keyring/src/Keyring"](../modules/_packages_ui_keyring_src_keyring_.md) / Keyring

# Class: Keyring

## Hierarchy

* [Base](_packages_ui_keyring_src_base_.base.md)

  ↳ **Keyring**

## Implements

* [KeyringStruct](../interfaces/_packages_ui_keyring_src_types_.keyringstruct.md)

## Index

### Constructors

* [constructor](_packages_ui_keyring_src_keyring_.keyring.md#constructor)

### Accessors

* [accounts](_packages_ui_keyring_src_keyring_.keyring.md#accounts)
* [addresses](_packages_ui_keyring_src_keyring_.keyring.md#addresses)
* [contracts](_packages_ui_keyring_src_keyring_.keyring.md#contracts)
* [genesisHash](_packages_ui_keyring_src_keyring_.keyring.md#genesishash)
* [keyring](_packages_ui_keyring_src_keyring_.keyring.md#keyring)

### Methods

* [addExternal](_packages_ui_keyring_src_keyring_.keyring.md#addexternal)
* [addHardware](_packages_ui_keyring_src_keyring_.keyring.md#addhardware)
* [addMultisig](_packages_ui_keyring_src_keyring_.keyring.md#addmultisig)
* [addPair](_packages_ui_keyring_src_keyring_.keyring.md#addpair)
* [addUri](_packages_ui_keyring_src_keyring_.keyring.md#adduri)
* [backupAccount](_packages_ui_keyring_src_keyring_.keyring.md#backupaccount)
* [createFromJson](_packages_ui_keyring_src_keyring_.keyring.md#createfromjson)
* [createFromUri](_packages_ui_keyring_src_keyring_.keyring.md#createfromuri)
* [decodeAddress](_packages_ui_keyring_src_keyring_.keyring.md#decodeaddress)
* [encodeAddress](_packages_ui_keyring_src_keyring_.keyring.md#encodeaddress)
* [encryptAccount](_packages_ui_keyring_src_keyring_.keyring.md#encryptaccount)
* [forgetAccount](_packages_ui_keyring_src_keyring_.keyring.md#forgetaccount)
* [forgetAddress](_packages_ui_keyring_src_keyring_.keyring.md#forgetaddress)
* [forgetContract](_packages_ui_keyring_src_keyring_.keyring.md#forgetcontract)
* [getAccount](_packages_ui_keyring_src_keyring_.keyring.md#getaccount)
* [getAccounts](_packages_ui_keyring_src_keyring_.keyring.md#getaccounts)
* [getAddress](_packages_ui_keyring_src_keyring_.keyring.md#getaddress)
* [getAddresses](_packages_ui_keyring_src_keyring_.keyring.md#getaddresses)
* [getContract](_packages_ui_keyring_src_keyring_.keyring.md#getcontract)
* [getContracts](_packages_ui_keyring_src_keyring_.keyring.md#getcontracts)
* [getPair](_packages_ui_keyring_src_keyring_.keyring.md#getpair)
* [getPairs](_packages_ui_keyring_src_keyring_.keyring.md#getpairs)
* [isAvailable](_packages_ui_keyring_src_keyring_.keyring.md#isavailable)
* [isPassValid](_packages_ui_keyring_src_keyring_.keyring.md#ispassvalid)
* [loadAll](_packages_ui_keyring_src_keyring_.keyring.md#loadall)
* [restoreAccount](_packages_ui_keyring_src_keyring_.keyring.md#restoreaccount)
* [saveAccount](_packages_ui_keyring_src_keyring_.keyring.md#saveaccount)
* [saveAccountMeta](_packages_ui_keyring_src_keyring_.keyring.md#saveaccountmeta)
* [saveAddress](_packages_ui_keyring_src_keyring_.keyring.md#saveaddress)
* [saveContract](_packages_ui_keyring_src_keyring_.keyring.md#savecontract)
* [saveRecent](_packages_ui_keyring_src_keyring_.keyring.md#saverecent)
* [setDevMode](_packages_ui_keyring_src_keyring_.keyring.md#setdevmode)
* [setSS58Format](_packages_ui_keyring_src_keyring_.keyring.md#setss58format)

## Constructors

### constructor

\+ **new Keyring**(): [Keyring](_packages_ui_keyring_src_keyring_.keyring.md)

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[constructor](_packages_ui_keyring_src_base_.base.md#constructor)*

*Defined in [packages/ui-keyring/src/Base.ts:29](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Base.ts#L29)*

**Returns:** [Keyring](_packages_ui_keyring_src_keyring_.keyring.md)

## Accessors

### accounts

• get **accounts**(): [AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[accounts](_packages_ui_keyring_src_base_.base.md#accounts)*

*Defined in [packages/ui-keyring/src/Base.ts:38](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Base.ts#L38)*

**Returns:** [AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)

___

### addresses

• get **addresses**(): [AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[addresses](_packages_ui_keyring_src_base_.base.md#addresses)*

*Defined in [packages/ui-keyring/src/Base.ts:42](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Base.ts#L42)*

**Returns:** [AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)

___

### contracts

• get **contracts**(): [AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[contracts](_packages_ui_keyring_src_base_.base.md#contracts)*

*Defined in [packages/ui-keyring/src/Base.ts:46](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Base.ts#L46)*

**Returns:** [AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)

___

### genesisHash

• get **genesisHash**(): string \| undefined

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[genesisHash](_packages_ui_keyring_src_base_.base.md#genesishash)*

*Defined in [packages/ui-keyring/src/Base.ts:58](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Base.ts#L58)*

**Returns:** string \| undefined

___

### keyring

• get **keyring**(): KeyringInstance

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[keyring](_packages_ui_keyring_src_base_.base.md#keyring)*

*Defined in [packages/ui-keyring/src/Base.ts:50](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Base.ts#L50)*

**Returns:** KeyringInstance

## Methods

### addExternal

▸ **addExternal**(`address`: string \| Uint8Array, `meta`: KeyringPair$Meta): [CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)

*Defined in [packages/ui-keyring/src/Keyring.ts:32](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L32)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`address` | string \| Uint8Array | - |
`meta` | KeyringPair$Meta | {} |

**Returns:** [CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)

___

### addHardware

▸ **addHardware**(`address`: string \| Uint8Array, `hardwareType`: string, `meta`: KeyringPair$Meta): [CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)

*Defined in [packages/ui-keyring/src/Keyring.ts:41](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L41)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`address` | string \| Uint8Array | - |
`hardwareType` | string | - |
`meta` | KeyringPair$Meta | {} |

**Returns:** [CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)

___

### addMultisig

▸ **addMultisig**(`addresses`: (string \| Uint8Array)[], `threshold`: BigInt \| BN \| number, `meta`: KeyringPair$Meta): [CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)

*Defined in [packages/ui-keyring/src/Keyring.ts:45](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L45)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`addresses` | (string \| Uint8Array)[] | - |
`threshold` | BigInt \| BN \| number | - |
`meta` | KeyringPair$Meta | {} |

**Returns:** [CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)

___

### addPair

▸ **addPair**(`pair`: KeyringPair, `password`: string): [CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)

*Defined in [packages/ui-keyring/src/Keyring.ts:54](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L54)*

#### Parameters:

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`password` | string |

**Returns:** [CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)

___

### addUri

▸ **addUri**(`suri`: string, `password?`: undefined \| string, `meta`: KeyringPair$Meta, `type?`: KeypairType): [CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)

*Defined in [packages/ui-keyring/src/Keyring.ts:63](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L63)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`suri` | string | - |
`password?` | undefined \| string | - |
`meta` | KeyringPair$Meta | {} |
`type?` | KeypairType | - |

**Returns:** [CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)

___

### backupAccount

▸ **backupAccount**(`pair`: KeyringPair, `password`: string): KeyringPair$Json

*Defined in [packages/ui-keyring/src/Keyring.ts:72](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L72)*

#### Parameters:

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`password` | string |

**Returns:** KeyringPair$Json

___

### createFromJson

▸ **createFromJson**(`json`: KeyringPair$Json, `meta`: KeyringPair$Meta): KeyringPair

*Defined in [packages/ui-keyring/src/Keyring.ts:82](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L82)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`json` | KeyringPair$Json | - |
`meta` | KeyringPair$Meta | {} |

**Returns:** KeyringPair

___

### createFromUri

▸ **createFromUri**(`suri`: string, `meta`: KeyringPair$Meta, `type?`: KeypairType): KeyringPair

*Implementation of [KeyringStruct](../interfaces/_packages_ui_keyring_src_types_.keyringstruct.md)*

*Defined in [packages/ui-keyring/src/Keyring.ts:86](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L86)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`suri` | string | - |
`meta` | KeyringPair$Meta | {} |
`type?` | KeypairType | - |

**Returns:** KeyringPair

___

### decodeAddress

▸ **decodeAddress**(`key`: string \| Uint8Array, `ignoreChecksum?`: undefined \| false \| true, `ss58Format?`: Prefix): Uint8Array

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[decodeAddress](_packages_ui_keyring_src_base_.base.md#decodeaddress)*

*Defined in [packages/ui-keyring/src/Base.ts:62](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Base.ts#L62)*

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

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[encodeAddress](_packages_ui_keyring_src_base_.base.md#encodeaddress)*

*Defined in [packages/ui-keyring/src/Base.ts:66](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Base.ts#L66)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string \| Uint8Array |
`ss58Format?` | Prefix |

**Returns:** string

___

### encryptAccount

▸ **encryptAccount**(`pair`: KeyringPair, `password`: string): void

*Defined in [packages/ui-keyring/src/Keyring.ts:90](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L90)*

#### Parameters:

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`password` | string |

**Returns:** void

___

### forgetAccount

▸ **forgetAccount**(`address`: string): void

*Defined in [packages/ui-keyring/src/Keyring.ts:99](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L99)*

#### Parameters:

Name | Type |
------ | ------ |
`address` | string |

**Returns:** void

___

### forgetAddress

▸ **forgetAddress**(`address`: string): void

*Defined in [packages/ui-keyring/src/Keyring.ts:104](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L104)*

#### Parameters:

Name | Type |
------ | ------ |
`address` | string |

**Returns:** void

___

### forgetContract

▸ **forgetContract**(`address`: string): void

*Defined in [packages/ui-keyring/src/Keyring.ts:108](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L108)*

#### Parameters:

Name | Type |
------ | ------ |
`address` | string |

**Returns:** void

___

### getAccount

▸ **getAccount**(`address`: string \| Uint8Array): [KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md) \| undefined

*Defined in [packages/ui-keyring/src/Keyring.ts:112](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L112)*

#### Parameters:

Name | Type |
------ | ------ |
`address` | string \| Uint8Array |

**Returns:** [KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md) \| undefined

___

### getAccounts

▸ **getAccounts**(): [KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md)[]

*Defined in [packages/ui-keyring/src/Keyring.ts:116](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L116)*

**Returns:** [KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md)[]

___

### getAddress

▸ **getAddress**(`_address`: string \| Uint8Array, `type`: [KeyringItemType](../modules/_packages_ui_keyring_src_types_.md#keyringitemtype) \| null): [KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md) \| undefined

*Defined in [packages/ui-keyring/src/Keyring.ts:125](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L125)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`_address` | string \| Uint8Array | - |
`type` | [KeyringItemType](../modules/_packages_ui_keyring_src_types_.md#keyringitemtype) \| null | null |

**Returns:** [KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md) \| undefined

___

### getAddresses

▸ **getAddresses**(): [KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md)[]

*Defined in [packages/ui-keyring/src/Keyring.ts:144](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L144)*

**Returns:** [KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md)[]

___

### getContract

▸ **getContract**(`address`: string \| Uint8Array): [KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md) \| undefined

*Defined in [packages/ui-keyring/src/Keyring.ts:152](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L152)*

#### Parameters:

Name | Type |
------ | ------ |
`address` | string \| Uint8Array |

**Returns:** [KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md) \| undefined

___

### getContracts

▸ **getContracts**(): [KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md)[]

*Defined in [packages/ui-keyring/src/Keyring.ts:156](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L156)*

**Returns:** [KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md)[]

___

### getPair

▸ **getPair**(`address`: string \| Uint8Array): KeyringPair

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[getPair](_packages_ui_keyring_src_base_.base.md#getpair)*

*Defined in [packages/ui-keyring/src/Base.ts:70](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Base.ts#L70)*

#### Parameters:

Name | Type |
------ | ------ |
`address` | string \| Uint8Array |

**Returns:** KeyringPair

___

### getPairs

▸ **getPairs**(): KeyringPair[]

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[getPairs](_packages_ui_keyring_src_base_.base.md#getpairs)*

*Defined in [packages/ui-keyring/src/Base.ts:74](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Base.ts#L74)*

**Returns:** KeyringPair[]

___

### isAvailable

▸ **isAvailable**(`_address`: Uint8Array \| string): boolean

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[isAvailable](_packages_ui_keyring_src_base_.base.md#isavailable)*

*Defined in [packages/ui-keyring/src/Base.ts:80](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Base.ts#L80)*

#### Parameters:

Name | Type |
------ | ------ |
`_address` | Uint8Array \| string |

**Returns:** boolean

___

### isPassValid

▸ **isPassValid**(`password`: string): boolean

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[isPassValid](_packages_ui_keyring_src_base_.base.md#ispassvalid)*

*Defined in [packages/ui-keyring/src/Base.ts:91](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Base.ts#L91)*

#### Parameters:

Name | Type |
------ | ------ |
`password` | string |

**Returns:** boolean

___

### loadAll

▸ **loadAll**(`options`: [KeyringOptions](../interfaces/_packages_ui_keyring_src_types_.keyringoptions.md), `injected`: { address: string ; meta: [KeyringJson$Meta](../interfaces/_packages_ui_keyring_src_types_.keyringjson_meta.md)  }[]): void

*Defined in [packages/ui-keyring/src/Keyring.ts:252](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L252)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`options` | [KeyringOptions](../interfaces/_packages_ui_keyring_src_types_.keyringoptions.md) | - |
`injected` | { address: string ; meta: [KeyringJson$Meta](../interfaces/_packages_ui_keyring_src_types_.keyringjson_meta.md)  }[] | [] |

**Returns:** void

___

### restoreAccount

▸ **restoreAccount**(`json`: KeyringPair$Json, `password`: string): KeyringPair

*Defined in [packages/ui-keyring/src/Keyring.ts:278](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L278)*

#### Parameters:

Name | Type |
------ | ------ |
`json` | KeyringPair$Json |
`password` | string |

**Returns:** KeyringPair

___

### saveAccount

▸ **saveAccount**(`pair`: KeyringPair, `password?`: undefined \| string): KeyringPair$Json

*Defined in [packages/ui-keyring/src/Keyring.ts:297](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L297)*

#### Parameters:

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`password?` | undefined \| string |

**Returns:** KeyringPair$Json

___

### saveAccountMeta

▸ **saveAccountMeta**(`pair`: KeyringPair, `meta`: KeyringPair$Meta): void

*Defined in [packages/ui-keyring/src/Keyring.ts:308](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L308)*

#### Parameters:

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`meta` | KeyringPair$Meta |

**Returns:** void

___

### saveAddress

▸ **saveAddress**(`address`: string, `meta`: KeyringPair$Meta, `type`: [KeyringAddressType](../modules/_packages_ui_keyring_src_types_.md#keyringaddresstype)): KeyringPair$Json

*Defined in [packages/ui-keyring/src/Keyring.ts:319](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L319)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`address` | string | - |
`meta` | KeyringPair$Meta | - |
`type` | [KeyringAddressType](../modules/_packages_ui_keyring_src_types_.md#keyringaddresstype) | "address" |

**Returns:** KeyringPair$Json

___

### saveContract

▸ **saveContract**(`address`: string, `meta`: KeyringPair$Meta): KeyringPair$Json

*Defined in [packages/ui-keyring/src/Keyring.ts:341](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L341)*

#### Parameters:

Name | Type |
------ | ------ |
`address` | string |
`meta` | KeyringPair$Meta |

**Returns:** KeyringPair$Json

___

### saveRecent

▸ **saveRecent**(`address`: string): [SingleAddress](../interfaces/_packages_ui_keyring_src_observable_types_.singleaddress.md)

*Defined in [packages/ui-keyring/src/Keyring.ts:345](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Keyring.ts#L345)*

#### Parameters:

Name | Type |
------ | ------ |
`address` | string |

**Returns:** [SingleAddress](../interfaces/_packages_ui_keyring_src_observable_types_.singleaddress.md)

___

### setDevMode

▸ **setDevMode**(`isDevelopment`: boolean): void

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[setDevMode](_packages_ui_keyring_src_base_.base.md#setdevmode)*

*Defined in [packages/ui-keyring/src/Base.ts:101](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Base.ts#L101)*

#### Parameters:

Name | Type |
------ | ------ |
`isDevelopment` | boolean |

**Returns:** void

___

### setSS58Format

▸ **setSS58Format**(`ss58Format?`: Prefix): void

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[setSS58Format](_packages_ui_keyring_src_base_.base.md#setss58format)*

*Defined in [packages/ui-keyring/src/Base.ts:95](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/Base.ts#L95)*

#### Parameters:

Name | Type |
------ | ------ |
`ss58Format?` | Prefix |

**Returns:** void
