**Polkadot JS UI libraries**

> [README](../README.md) / [Globals](../globals.md) / ["packages/ui-keyring/src/stores/Browser"](../modules/_packages_ui_keyring_src_stores_browser_.md) / BrowserStore

# Class: BrowserStore

## Hierarchy

* **BrowserStore**

## Implements

* [KeyringStore](../interfaces/_packages_ui_keyring_src_types_.keyringstore.md)

## Index

### Methods

* [all](_packages_ui_keyring_src_stores_browser_.browserstore.md#all)
* [get](_packages_ui_keyring_src_stores_browser_.browserstore.md#get)
* [remove](_packages_ui_keyring_src_stores_browser_.browserstore.md#remove)
* [set](_packages_ui_keyring_src_stores_browser_.browserstore.md#set)

## Methods

### all

▸ **all**(`cb`: (key: string,value: [KeyringJson](../interfaces/_packages_ui_keyring_src_types_.keyringjson.md)) => void): void

*Defined in [packages/ui-keyring/src/stores/Browser.ts:9](https://github.com/polkadot-js/ui/blob/fea7424a/packages/ui-keyring/src/stores/Browser.ts#L9)*

#### Parameters:

Name | Type |
------ | ------ |
`cb` | (key: string,value: [KeyringJson](../interfaces/_packages_ui_keyring_src_types_.keyringjson.md)) => void |

**Returns:** void

___

### get

▸ **get**(`key`: string, `cb`: (value: [KeyringJson](../interfaces/_packages_ui_keyring_src_types_.keyringjson.md)) => void): void

*Defined in [packages/ui-keyring/src/stores/Browser.ts:15](https://github.com/polkadot-js/ui/blob/fea7424a/packages/ui-keyring/src/stores/Browser.ts#L15)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |
`cb` | (value: [KeyringJson](../interfaces/_packages_ui_keyring_src_types_.keyringjson.md)) => void |

**Returns:** void

___

### remove

▸ **remove**(`key`: string, `cb?`: undefined \| () => void): void

*Defined in [packages/ui-keyring/src/stores/Browser.ts:19](https://github.com/polkadot-js/ui/blob/fea7424a/packages/ui-keyring/src/stores/Browser.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |
`cb?` | undefined \| () => void |

**Returns:** void

___

### set

▸ **set**(`key`: string, `value`: [KeyringJson](../interfaces/_packages_ui_keyring_src_types_.keyringjson.md), `cb?`: undefined \| () => void): void

*Defined in [packages/ui-keyring/src/stores/Browser.ts:24](https://github.com/polkadot-js/ui/blob/fea7424a/packages/ui-keyring/src/stores/Browser.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |
`value` | [KeyringJson](../interfaces/_packages_ui_keyring_src_types_.keyringjson.md) |
`cb?` | undefined \| () => void |

**Returns:** void
