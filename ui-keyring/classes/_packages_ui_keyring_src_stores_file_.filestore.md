[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["packages/ui-keyring/src/stores/File"](../modules/_packages_ui_keyring_src_stores_file_.md) › [FileStore](_packages_ui_keyring_src_stores_file_.filestore.md)

# Class: FileStore

## Hierarchy

* **FileStore**

## Implements

* [KeyringStore](../interfaces/_packages_ui_keyring_src_types_.keyringstore.md)

## Index

### Constructors

* [constructor](_packages_ui_keyring_src_stores_file_.filestore.md#constructor)

### Methods

* [all](_packages_ui_keyring_src_stores_file_.filestore.md#all)
* [get](_packages_ui_keyring_src_stores_file_.filestore.md#get)
* [remove](_packages_ui_keyring_src_stores_file_.filestore.md#remove)
* [set](_packages_ui_keyring_src_stores_file_.filestore.md#set)

## Constructors

###  constructor

\+ **new FileStore**(`path`: string): *[FileStore](_packages_ui_keyring_src_stores_file_.filestore.md)*

*Defined in [packages/ui-keyring/src/stores/File.ts:13](https://github.com/polkadot-js/ui/blob/723641ac/packages/ui-keyring/src/stores/File.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *[FileStore](_packages_ui_keyring_src_stores_file_.filestore.md)*

## Methods

###  all

▸ **all**(`cb`: function): *void*

*Defined in [packages/ui-keyring/src/stores/File.ts:23](https://github.com/polkadot-js/ui/blob/723641ac/packages/ui-keyring/src/stores/File.ts#L23)*

**Parameters:**

▪ **cb**: *function*

▸ (`key`: string, `value`: [KeyringJson](../interfaces/_packages_ui_keyring_src_types_.keyringjson.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [KeyringJson](../interfaces/_packages_ui_keyring_src_types_.keyringjson.md) |

**Returns:** *void*

___

###  get

▸ **get**(`key`: string, `cb`: function): *void*

*Defined in [packages/ui-keyring/src/stores/File.ts:34](https://github.com/polkadot-js/ui/blob/723641ac/packages/ui-keyring/src/stores/File.ts#L34)*

**Parameters:**

▪ **key**: *string*

▪ **cb**: *function*

▸ (`value`: [KeyringJson](../interfaces/_packages_ui_keyring_src_types_.keyringjson.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [KeyringJson](../interfaces/_packages_ui_keyring_src_types_.keyringjson.md) |

**Returns:** *void*

___

###  remove

▸ **remove**(`key`: string, `cb?`: undefined | function): *void*

*Defined in [packages/ui-keyring/src/stores/File.ts:42](https://github.com/polkadot-js/ui/blob/723641ac/packages/ui-keyring/src/stores/File.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`cb?` | undefined &#124; function |

**Returns:** *void*

___

###  set

▸ **set**(`key`: string, `value`: [KeyringJson](../interfaces/_packages_ui_keyring_src_types_.keyringjson.md), `cb?`: undefined | function): *void*

*Defined in [packages/ui-keyring/src/stores/File.ts:47](https://github.com/polkadot-js/ui/blob/723641ac/packages/ui-keyring/src/stores/File.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [KeyringJson](../interfaces/_packages_ui_keyring_src_types_.keyringjson.md) |
`cb?` | undefined &#124; function |

**Returns:** *void*
