**Polkadot JS UI libraries**

> [README](../README.md) / [Globals](../globals.md) / ["packages/ui-keyring/src/observable/types"](../modules/_packages_ui_keyring_src_observable_types_.md) / AddressSubject

# Interface: AddressSubject

## Hierarchy

* **AddressSubject**

## Index

### Properties

* [add](_packages_ui_keyring_src_observable_types_.addresssubject.md#add)
* [remove](_packages_ui_keyring_src_observable_types_.addresssubject.md#remove)
* [subject](_packages_ui_keyring_src_observable_types_.addresssubject.md#subject)

## Properties

### add

•  **add**: (store: [KeyringStore](_packages_ui_keyring_src_types_.keyringstore.md),address: string,json: [KeyringJson](_packages_ui_keyring_src_types_.keyringjson.md)) => [SingleAddress](_packages_ui_keyring_src_observable_types_.singleaddress.md)

*Defined in [packages/ui-keyring/src/observable/types.ts:18](https://github.com/polkadot-js/ui/blob/fea7424a/packages/ui-keyring/src/observable/types.ts#L18)*

___

### remove

•  **remove**: (store: [KeyringStore](_packages_ui_keyring_src_types_.keyringstore.md),address: string) => void

*Defined in [packages/ui-keyring/src/observable/types.ts:19](https://github.com/polkadot-js/ui/blob/fea7424a/packages/ui-keyring/src/observable/types.ts#L19)*

___

### subject

•  **subject**: BehaviorSubject\<[SubjectInfo](_packages_ui_keyring_src_observable_types_.subjectinfo.md)>

*Defined in [packages/ui-keyring/src/observable/types.ts:20](https://github.com/polkadot-js/ui/blob/fea7424a/packages/ui-keyring/src/observable/types.ts#L20)*
