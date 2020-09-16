[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["packages/ui-keyring/src/Keyring"](../modules/_packages_ui_keyring_src_keyring_.md) › [Keyring](_packages_ui_keyring_src_keyring_.keyring.md)

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

###  constructor

\+ **new Keyring**(): *[Keyring](_packages_ui_keyring_src_keyring_.keyring.md)*

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[constructor](_packages_ui_keyring_src_base_.base.md#constructor)*

*Defined in [packages/ui-keyring/src/Base.ts:30](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Base.ts#L30)*

**Returns:** *[Keyring](_packages_ui_keyring_src_keyring_.keyring.md)*

## Accessors

###  accounts

• **get accounts**(): *[AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)*

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[accounts](_packages_ui_keyring_src_base_.base.md#accounts)*

*Defined in [packages/ui-keyring/src/Base.ts:39](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Base.ts#L39)*

**Returns:** *[AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)*

___

###  addresses

• **get addresses**(): *[AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)*

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[addresses](_packages_ui_keyring_src_base_.base.md#addresses)*

*Defined in [packages/ui-keyring/src/Base.ts:43](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Base.ts#L43)*

**Returns:** *[AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)*

___

###  contracts

• **get contracts**(): *[AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)*

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[contracts](_packages_ui_keyring_src_base_.base.md#contracts)*

*Defined in [packages/ui-keyring/src/Base.ts:47](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Base.ts#L47)*

**Returns:** *[AddressSubject](../interfaces/_packages_ui_keyring_src_observable_types_.addresssubject.md)*

___

###  genesisHash

• **get genesisHash**(): *string | undefined*

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[genesisHash](_packages_ui_keyring_src_base_.base.md#genesishash)*

*Defined in [packages/ui-keyring/src/Base.ts:59](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Base.ts#L59)*

**Returns:** *string | undefined*

___

###  keyring

• **get keyring**(): *KeyringInstance*

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[keyring](_packages_ui_keyring_src_base_.base.md#keyring)*

*Defined in [packages/ui-keyring/src/Base.ts:51](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Base.ts#L51)*

**Returns:** *KeyringInstance*

## Methods

###  addExternal

▸ **addExternal**(`address`: string | Uint8Array, `meta`: KeyringPair$Meta): *[CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)*

*Defined in [packages/ui-keyring/src/Keyring.ts:33](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L33)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`address` | string &#124; Uint8Array | - |
`meta` | KeyringPair$Meta | {} |

**Returns:** *[CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)*

___

###  addHardware

▸ **addHardware**(`address`: string | Uint8Array, `hardwareType`: string, `meta`: KeyringPair$Meta): *[CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)*

*Defined in [packages/ui-keyring/src/Keyring.ts:42](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L42)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`address` | string &#124; Uint8Array | - |
`hardwareType` | string | - |
`meta` | KeyringPair$Meta | {} |

**Returns:** *[CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)*

___

###  addMultisig

▸ **addMultisig**(`addresses`: (string | Uint8Array)[], `threshold`: BigInt | BN | number, `meta`: KeyringPair$Meta): *[CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)*

*Defined in [packages/ui-keyring/src/Keyring.ts:46](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L46)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`addresses` | (string &#124; Uint8Array)[] | - |
`threshold` | BigInt &#124; BN &#124; number | - |
`meta` | KeyringPair$Meta | {} |

**Returns:** *[CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)*

___

###  addPair

▸ **addPair**(`pair`: KeyringPair, `password`: string): *[CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)*

*Defined in [packages/ui-keyring/src/Keyring.ts:55](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`password` | string |

**Returns:** *[CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)*

___

###  addUri

▸ **addUri**(`suri`: string, `password?`: undefined | string, `meta`: KeyringPair$Meta, `type?`: KeypairType): *[CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)*

*Defined in [packages/ui-keyring/src/Keyring.ts:64](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L64)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`suri` | string | - |
`password?` | undefined &#124; string | - |
`meta` | KeyringPair$Meta | {} |
`type?` | KeypairType | - |

**Returns:** *[CreateResult](../interfaces/_packages_ui_keyring_src_types_.createresult.md)*

___

###  backupAccount

▸ **backupAccount**(`pair`: KeyringPair, `password`: string): *KeyringPair$Json*

*Defined in [packages/ui-keyring/src/Keyring.ts:73](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`password` | string |

**Returns:** *KeyringPair$Json*

___

###  createFromUri

▸ **createFromUri**(`suri`: string, `meta`: KeyringPair$Meta, `type?`: KeypairType): *KeyringPair*

*Implementation of [KeyringStruct](../interfaces/_packages_ui_keyring_src_types_.keyringstruct.md)*

*Defined in [packages/ui-keyring/src/Keyring.ts:83](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L83)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`suri` | string | - |
`meta` | KeyringPair$Meta | {} |
`type?` | KeypairType | - |

**Returns:** *KeyringPair*

___

###  decodeAddress

▸ **decodeAddress**(`key`: string | Uint8Array, `ignoreChecksum?`: undefined | false | true, `ss58Format?`: Prefix): *Uint8Array*

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[decodeAddress](_packages_ui_keyring_src_base_.base.md#decodeaddress)*

*Defined in [packages/ui-keyring/src/Base.ts:63](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Base.ts#L63)*

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

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[encodeAddress](_packages_ui_keyring_src_base_.base.md#encodeaddress)*

*Defined in [packages/ui-keyring/src/Base.ts:67](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Base.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; Uint8Array |
`ss58Format?` | Prefix |

**Returns:** *string*

___

###  encryptAccount

▸ **encryptAccount**(`pair`: KeyringPair, `password`: string): *void*

*Defined in [packages/ui-keyring/src/Keyring.ts:87](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`password` | string |

**Returns:** *void*

___

###  forgetAccount

▸ **forgetAccount**(`address`: string): *void*

*Defined in [packages/ui-keyring/src/Keyring.ts:96](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *void*

___

###  forgetAddress

▸ **forgetAddress**(`address`: string): *void*

*Defined in [packages/ui-keyring/src/Keyring.ts:101](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L101)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *void*

___

###  forgetContract

▸ **forgetContract**(`address`: string): *void*

*Defined in [packages/ui-keyring/src/Keyring.ts:105](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *void*

___

###  getAccount

▸ **getAccount**(`address`: string | Uint8Array): *[KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md) | undefined*

*Defined in [packages/ui-keyring/src/Keyring.ts:109](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *[KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md) | undefined*

___

###  getAccounts

▸ **getAccounts**(): *[KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md)[]*

*Defined in [packages/ui-keyring/src/Keyring.ts:113](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L113)*

**Returns:** *[KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md)[]*

___

###  getAddress

▸ **getAddress**(`_address`: string | Uint8Array, `type`: [KeyringItemType](../modules/_packages_ui_keyring_src_types_.md#keyringitemtype) | null): *[KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md) | undefined*

*Defined in [packages/ui-keyring/src/Keyring.ts:122](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L122)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_address` | string &#124; Uint8Array | - |
`type` | [KeyringItemType](../modules/_packages_ui_keyring_src_types_.md#keyringitemtype) &#124; null | null |

**Returns:** *[KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md) | undefined*

___

###  getAddresses

▸ **getAddresses**(): *[KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md)[]*

*Defined in [packages/ui-keyring/src/Keyring.ts:141](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L141)*

**Returns:** *[KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md)[]*

___

###  getContract

▸ **getContract**(`address`: string | Uint8Array): *[KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md) | undefined*

*Defined in [packages/ui-keyring/src/Keyring.ts:149](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L149)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *[KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md) | undefined*

___

###  getContracts

▸ **getContracts**(): *[KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md)[]*

*Defined in [packages/ui-keyring/src/Keyring.ts:153](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L153)*

**Returns:** *[KeyringAddress](../interfaces/_packages_ui_keyring_src_types_.keyringaddress.md)[]*

___

###  getPair

▸ **getPair**(`address`: string | Uint8Array): *KeyringPair*

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[getPair](_packages_ui_keyring_src_base_.base.md#getpair)*

*Defined in [packages/ui-keyring/src/Base.ts:71](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Base.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *KeyringPair*

___

###  getPairs

▸ **getPairs**(): *KeyringPair[]*

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[getPairs](_packages_ui_keyring_src_base_.base.md#getpairs)*

*Defined in [packages/ui-keyring/src/Base.ts:75](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Base.ts#L75)*

**Returns:** *KeyringPair[]*

___

###  isAvailable

▸ **isAvailable**(`_address`: Uint8Array | string): *boolean*

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[isAvailable](_packages_ui_keyring_src_base_.base.md#isavailable)*

*Defined in [packages/ui-keyring/src/Base.ts:81](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Base.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`_address` | Uint8Array &#124; string |

**Returns:** *boolean*

___

###  isPassValid

▸ **isPassValid**(`password`: string): *boolean*

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[isPassValid](_packages_ui_keyring_src_base_.base.md#ispassvalid)*

*Defined in [packages/ui-keyring/src/Base.ts:92](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Base.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |

**Returns:** *boolean*

___

###  loadAll

▸ **loadAll**(`options`: [KeyringOptions](../interfaces/_packages_ui_keyring_src_types_.keyringoptions.md), `injected`: object[]): *void*

*Defined in [packages/ui-keyring/src/Keyring.ts:249](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L249)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [KeyringOptions](../interfaces/_packages_ui_keyring_src_types_.keyringoptions.md) | - |
`injected` | object[] | [] |

**Returns:** *void*

___

###  restoreAccount

▸ **restoreAccount**(`json`: KeyringPair$Json, `password`: string): *KeyringPair*

*Defined in [packages/ui-keyring/src/Keyring.ts:275](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L275)*

**Parameters:**

Name | Type |
------ | ------ |
`json` | KeyringPair$Json |
`password` | string |

**Returns:** *KeyringPair*

___

###  saveAccount

▸ **saveAccount**(`pair`: KeyringPair, `password?`: undefined | string): *KeyringPair$Json*

*Defined in [packages/ui-keyring/src/Keyring.ts:294](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L294)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`password?` | undefined &#124; string |

**Returns:** *KeyringPair$Json*

___

###  saveAccountMeta

▸ **saveAccountMeta**(`pair`: KeyringPair, `meta`: KeyringPair$Meta): *void*

*Defined in [packages/ui-keyring/src/Keyring.ts:305](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L305)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | KeyringPair |
`meta` | KeyringPair$Meta |

**Returns:** *void*

___

###  saveAddress

▸ **saveAddress**(`address`: string, `meta`: KeyringPair$Meta, `type`: [KeyringAddressType](../modules/_packages_ui_keyring_src_types_.md#keyringaddresstype)): *KeyringPair$Json*

*Defined in [packages/ui-keyring/src/Keyring.ts:316](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L316)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`address` | string | - |
`meta` | KeyringPair$Meta | - |
`type` | [KeyringAddressType](../modules/_packages_ui_keyring_src_types_.md#keyringaddresstype) | "address" |

**Returns:** *KeyringPair$Json*

___

###  saveContract

▸ **saveContract**(`address`: string, `meta`: KeyringPair$Meta): *KeyringPair$Json*

*Defined in [packages/ui-keyring/src/Keyring.ts:338](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L338)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`meta` | KeyringPair$Meta |

**Returns:** *KeyringPair$Json*

___

###  saveRecent

▸ **saveRecent**(`address`: string): *[SingleAddress](../interfaces/_packages_ui_keyring_src_observable_types_.singleaddress.md)*

*Defined in [packages/ui-keyring/src/Keyring.ts:342](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Keyring.ts#L342)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *[SingleAddress](../interfaces/_packages_ui_keyring_src_observable_types_.singleaddress.md)*

___

###  setDevMode

▸ **setDevMode**(`isDevelopment`: boolean): *void*

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[setDevMode](_packages_ui_keyring_src_base_.base.md#setdevmode)*

*Defined in [packages/ui-keyring/src/Base.ts:102](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Base.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`isDevelopment` | boolean |

**Returns:** *void*

___

###  setSS58Format

▸ **setSS58Format**(`ss58Format?`: Prefix): *void*

*Inherited from [Base](_packages_ui_keyring_src_base_.base.md).[setSS58Format](_packages_ui_keyring_src_base_.base.md#setss58format)*

*Defined in [packages/ui-keyring/src/Base.ts:96](https://github.com/polkadot-js/ui/blob/8f61882b/packages/ui-keyring/src/Base.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`ss58Format?` | Prefix |

**Returns:** *void*
