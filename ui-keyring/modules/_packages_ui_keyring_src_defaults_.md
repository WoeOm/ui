[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["packages/ui-keyring/src/defaults"](_packages_ui_keyring_src_defaults_.md)

# Module: "packages/ui-keyring/src/defaults"

## Index

### Variables

* [accountRegex](_packages_ui_keyring_src_defaults_.md#const-accountregex)
* [addressRegex](_packages_ui_keyring_src_defaults_.md#const-addressregex)
* [contractRegex](_packages_ui_keyring_src_defaults_.md#const-contractregex)

### Functions

* [accountKey](_packages_ui_keyring_src_defaults_.md#const-accountkey)
* [addressKey](_packages_ui_keyring_src_defaults_.md#const-addresskey)
* [contractKey](_packages_ui_keyring_src_defaults_.md#const-contractkey)

## Variables

### `Const` accountRegex

• **accountRegex**: *RegExp‹›* = new RegExp(`^${ACCOUNT_PREFIX}0x[0-9a-f]*`, '')

*Defined in [packages/ui-keyring/src/defaults.ts:28](https://github.com/polkadot-js/ui/blob/42e57ee0/packages/ui-keyring/src/defaults.ts#L28)*

___

### `Const` addressRegex

• **addressRegex**: *RegExp‹›* = new RegExp(`^${ADDRESS_PREFIX}0x[0-9a-f]*`, '')

*Defined in [packages/ui-keyring/src/defaults.ts:30](https://github.com/polkadot-js/ui/blob/42e57ee0/packages/ui-keyring/src/defaults.ts#L30)*

___

### `Const` contractRegex

• **contractRegex**: *RegExp‹›* = new RegExp(`^${CONTRACT_PREFIX}0x[0-9a-f]*`, '')

*Defined in [packages/ui-keyring/src/defaults.ts:32](https://github.com/polkadot-js/ui/blob/42e57ee0/packages/ui-keyring/src/defaults.ts#L32)*

## Functions

### `Const` accountKey

▸ **accountKey**(`address`: string): *string*

*Defined in [packages/ui-keyring/src/defaults.ts:19](https://github.com/polkadot-js/ui/blob/42e57ee0/packages/ui-keyring/src/defaults.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *string*

___

### `Const` addressKey

▸ **addressKey**(`address`: string): *string*

*Defined in [packages/ui-keyring/src/defaults.ts:22](https://github.com/polkadot-js/ui/blob/42e57ee0/packages/ui-keyring/src/defaults.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *string*

___

### `Const` contractKey

▸ **contractKey**(`address`: string): *string*

*Defined in [packages/ui-keyring/src/defaults.ts:25](https://github.com/polkadot-js/ui/blob/42e57ee0/packages/ui-keyring/src/defaults.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |

**Returns:** *string*
