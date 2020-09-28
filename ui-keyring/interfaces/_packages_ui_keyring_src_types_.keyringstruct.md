**Polkadot JS UI libraries**

> [README](../README.md) / [Globals](../globals.md) / ["packages/ui-keyring/src/types"](../modules/_packages_ui_keyring_src_types_.md) / KeyringStruct

# Interface: KeyringStruct

## Hierarchy

* **KeyringStruct**

## Implemented by

* [Keyring](../classes/_packages_ui_keyring_src_keyring_.keyring.md)

## Index

### Properties

* [accounts](_packages_ui_keyring_src_types_.keyringstruct.md#accounts)
* [addExternal](_packages_ui_keyring_src_types_.keyringstruct.md#addexternal)
* [addPair](_packages_ui_keyring_src_types_.keyringstruct.md#addpair)
* [addUri](_packages_ui_keyring_src_types_.keyringstruct.md#adduri)
* [addresses](_packages_ui_keyring_src_types_.keyringstruct.md#addresses)
* [backupAccount](_packages_ui_keyring_src_types_.keyringstruct.md#backupaccount)
* [contracts](_packages_ui_keyring_src_types_.keyringstruct.md#contracts)
* [decodeAddress](_packages_ui_keyring_src_types_.keyringstruct.md#decodeaddress)
* [encodeAddress](_packages_ui_keyring_src_types_.keyringstruct.md#encodeaddress)
* [encryptAccount](_packages_ui_keyring_src_types_.keyringstruct.md#encryptaccount)
* [forgetAccount](_packages_ui_keyring_src_types_.keyringstruct.md#forgetaccount)
* [forgetAddress](_packages_ui_keyring_src_types_.keyringstruct.md#forgetaddress)
* [forgetContract](_packages_ui_keyring_src_types_.keyringstruct.md#forgetcontract)
* [genesisHash](_packages_ui_keyring_src_types_.keyringstruct.md#genesishash)
* [getAccount](_packages_ui_keyring_src_types_.keyringstruct.md#getaccount)
* [getAccounts](_packages_ui_keyring_src_types_.keyringstruct.md#getaccounts)
* [getAddress](_packages_ui_keyring_src_types_.keyringstruct.md#getaddress)
* [getAddresses](_packages_ui_keyring_src_types_.keyringstruct.md#getaddresses)
* [getContract](_packages_ui_keyring_src_types_.keyringstruct.md#getcontract)
* [getContracts](_packages_ui_keyring_src_types_.keyringstruct.md#getcontracts)
* [getPair](_packages_ui_keyring_src_types_.keyringstruct.md#getpair)
* [getPairs](_packages_ui_keyring_src_types_.keyringstruct.md#getpairs)
* [isAvailable](_packages_ui_keyring_src_types_.keyringstruct.md#isavailable)
* [isPassValid](_packages_ui_keyring_src_types_.keyringstruct.md#ispassvalid)
* [keyring](_packages_ui_keyring_src_types_.keyringstruct.md#keyring)
* [loadAll](_packages_ui_keyring_src_types_.keyringstruct.md#loadall)
* [restoreAccount](_packages_ui_keyring_src_types_.keyringstruct.md#restoreaccount)
* [saveAccount](_packages_ui_keyring_src_types_.keyringstruct.md#saveaccount)
* [saveAccountMeta](_packages_ui_keyring_src_types_.keyringstruct.md#saveaccountmeta)
* [saveAddress](_packages_ui_keyring_src_types_.keyringstruct.md#saveaddress)
* [saveContract](_packages_ui_keyring_src_types_.keyringstruct.md#savecontract)
* [saveRecent](_packages_ui_keyring_src_types_.keyringstruct.md#saverecent)
* [setDevMode](_packages_ui_keyring_src_types_.keyringstruct.md#setdevmode)

### Methods

* [createFromUri](_packages_ui_keyring_src_types_.keyringstruct.md#createfromuri)

## Properties

### accounts

• `Readonly` **accounts**: [AddressSubject](_packages_ui_keyring_src_observable_types_.addresssubject.md)

*Defined in [packages/ui-keyring/src/types.ts:64](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L64)*

___

### addExternal

•  **addExternal**: (publicKey: Uint8Array,meta?: KeyringPair$Meta) => [CreateResult](_packages_ui_keyring_src_types_.createresult.md)

*Defined in [packages/ui-keyring/src/types.ts:70](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L70)*

___

### addPair

•  **addPair**: (pair: KeyringPair,password: string) => [CreateResult](_packages_ui_keyring_src_types_.createresult.md)

*Defined in [packages/ui-keyring/src/types.ts:71](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L71)*

___

### addUri

•  **addUri**: (suri: string,password?: undefined \| string,meta?: KeyringPair$Meta,type?: KeypairType) => [CreateResult](_packages_ui_keyring_src_types_.createresult.md)

*Defined in [packages/ui-keyring/src/types.ts:72](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L72)*

___

### addresses

• `Readonly` **addresses**: [AddressSubject](_packages_ui_keyring_src_observable_types_.addresssubject.md)

*Defined in [packages/ui-keyring/src/types.ts:65](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L65)*

___

### backupAccount

•  **backupAccount**: (pair: KeyringPair,password: string) => KeyringPair$Json

*Defined in [packages/ui-keyring/src/types.ts:73](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L73)*

___

### contracts

• `Readonly` **contracts**: [AddressSubject](_packages_ui_keyring_src_observable_types_.addresssubject.md)

*Defined in [packages/ui-keyring/src/types.ts:66](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L66)*

___

### decodeAddress

•  **decodeAddress**: (key: string \| Uint8Array) => Uint8Array

*Defined in [packages/ui-keyring/src/types.ts:75](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L75)*

___

### encodeAddress

•  **encodeAddress**: (key: string \| Uint8Array) => string

*Defined in [packages/ui-keyring/src/types.ts:76](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L76)*

___

### encryptAccount

•  **encryptAccount**: (pair: KeyringPair,password: string) => void

*Defined in [packages/ui-keyring/src/types.ts:77](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L77)*

___

### forgetAccount

•  **forgetAccount**: (address: string) => void

*Defined in [packages/ui-keyring/src/types.ts:78](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L78)*

___

### forgetAddress

•  **forgetAddress**: (address: string) => void

*Defined in [packages/ui-keyring/src/types.ts:79](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L79)*

___

### forgetContract

•  **forgetContract**: (address: string) => void

*Defined in [packages/ui-keyring/src/types.ts:80](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L80)*

___

### genesisHash

• `Optional` `Readonly` **genesisHash**: undefined \| string

*Defined in [packages/ui-keyring/src/types.ts:68](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L68)*

___

### getAccount

•  **getAccount**: (address: string \| Uint8Array) => [KeyringAddress](_packages_ui_keyring_src_types_.keyringaddress.md) \| undefined

*Defined in [packages/ui-keyring/src/types.ts:81](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L81)*

___

### getAccounts

•  **getAccounts**: () => [KeyringAddress](_packages_ui_keyring_src_types_.keyringaddress.md)[]

*Defined in [packages/ui-keyring/src/types.ts:82](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L82)*

___

### getAddress

•  **getAddress**: (address: string \| Uint8Array,type: [KeyringItemType](../modules/_packages_ui_keyring_src_types_.md#keyringitemtype) \| null) => [KeyringAddress](_packages_ui_keyring_src_types_.keyringaddress.md) \| undefined

*Defined in [packages/ui-keyring/src/types.ts:83](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L83)*

___

### getAddresses

•  **getAddresses**: () => [KeyringAddress](_packages_ui_keyring_src_types_.keyringaddress.md)[]

*Defined in [packages/ui-keyring/src/types.ts:84](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L84)*

___

### getContract

•  **getContract**: (address: string \| Uint8Array) => [KeyringAddress](_packages_ui_keyring_src_types_.keyringaddress.md) \| undefined

*Defined in [packages/ui-keyring/src/types.ts:85](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L85)*

___

### getContracts

•  **getContracts**: (genesisHash?: undefined \| string) => [KeyringAddress](_packages_ui_keyring_src_types_.keyringaddress.md)[]

*Defined in [packages/ui-keyring/src/types.ts:86](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L86)*

___

### getPair

•  **getPair**: (address: string \| Uint8Array) => KeyringPair

*Defined in [packages/ui-keyring/src/types.ts:87](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L87)*

___

### getPairs

•  **getPairs**: () => KeyringPair[]

*Defined in [packages/ui-keyring/src/types.ts:88](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L88)*

___

### isAvailable

•  **isAvailable**: (address: string \| Uint8Array) => boolean

*Defined in [packages/ui-keyring/src/types.ts:89](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L89)*

___

### isPassValid

•  **isPassValid**: (password: string) => boolean

*Defined in [packages/ui-keyring/src/types.ts:90](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L90)*

___

### keyring

• `Readonly` **keyring**: BaseKeyringInstance \| undefined

*Defined in [packages/ui-keyring/src/types.ts:67](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L67)*

___

### loadAll

•  **loadAll**: (options: [KeyringOptions](_packages_ui_keyring_src_types_.keyringoptions.md)) => void

*Defined in [packages/ui-keyring/src/types.ts:91](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L91)*

___

### restoreAccount

•  **restoreAccount**: (json: KeyringPair$Json,password: string) => KeyringPair

*Defined in [packages/ui-keyring/src/types.ts:92](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L92)*

___

### saveAccount

•  **saveAccount**: (pair: KeyringPair,password?: undefined \| string) => KeyringPair$Json

*Defined in [packages/ui-keyring/src/types.ts:93](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L93)*

___

### saveAccountMeta

•  **saveAccountMeta**: (pair: KeyringPair,meta: KeyringPair$Meta) => void

*Defined in [packages/ui-keyring/src/types.ts:94](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L94)*

___

### saveAddress

•  **saveAddress**: (address: string,meta: KeyringPair$Meta) => KeyringPair$Json

*Defined in [packages/ui-keyring/src/types.ts:95](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L95)*

___

### saveContract

•  **saveContract**: (address: string,meta: KeyringPair$Meta) => KeyringPair$Json

*Defined in [packages/ui-keyring/src/types.ts:96](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L96)*

___

### saveRecent

•  **saveRecent**: (address: string) => [SingleAddress](_packages_ui_keyring_src_observable_types_.singleaddress.md)

*Defined in [packages/ui-keyring/src/types.ts:97](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L97)*

___

### setDevMode

•  **setDevMode**: (isDevelopment: boolean) => void

*Defined in [packages/ui-keyring/src/types.ts:98](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L98)*

## Methods

### createFromUri

▸ **createFromUri**(`suri`: string, `meta?`: KeyringPair$Meta, `type?`: KeypairType): KeyringPair

*Defined in [packages/ui-keyring/src/types.ts:74](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/types.ts#L74)*

#### Parameters:

Name | Type |
------ | ------ |
`suri` | string |
`meta?` | KeyringPair$Meta |
`type?` | KeypairType |

**Returns:** KeyringPair
