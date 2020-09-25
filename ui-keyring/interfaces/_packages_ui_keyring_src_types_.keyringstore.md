**Polkadot JS UI libraries**

> [README](../README.md) / [Globals](../globals.md) / ["packages/ui-keyring/src/types"](../modules/_packages_ui_keyring_src_types_.md) / KeyringStore

# Interface: KeyringStore

## Hierarchy

* **KeyringStore**

## Implemented by

* [BrowserStore](../classes/_packages_ui_keyring_src_stores_browser_.browserstore.md)
* [FileStore](../classes/_packages_ui_keyring_src_stores_file_.filestore.md)

## Index

### Properties

* [all](_packages_ui_keyring_src_types_.keyringstore.md#all)
* [get](_packages_ui_keyring_src_types_.keyringstore.md#get)
* [remove](_packages_ui_keyring_src_types_.keyringstore.md#remove)
* [set](_packages_ui_keyring_src_types_.keyringstore.md#set)

## Properties

### all

•  **all**: (cb: (key: string,value: [KeyringJson](_packages_ui_keyring_src_types_.keyringjson.md)) => void) => void

*Defined in [packages/ui-keyring/src/types.ts:35](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/types.ts#L35)*

___

### get

•  **get**: (key: string,cb: (value: [KeyringJson](_packages_ui_keyring_src_types_.keyringjson.md)) => void) => void

*Defined in [packages/ui-keyring/src/types.ts:36](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/types.ts#L36)*

___

### remove

•  **remove**: (key: string,cb?: undefined \| () => void) => void

*Defined in [packages/ui-keyring/src/types.ts:37](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/types.ts#L37)*

___

### set

•  **set**: (key: string,value: [KeyringJson](_packages_ui_keyring_src_types_.keyringjson.md),cb?: undefined \| () => void) => void

*Defined in [packages/ui-keyring/src/types.ts:38](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/ui-keyring/src/types.ts#L38)*
