**Polkadot JS UI libraries**

> [README](../README.md) / [Globals](../globals.md) / "packages/ui-keyring/src/defaults"

# Module: "packages/ui-keyring/src/defaults"

## Index

### Variables

* [accountRegex](_packages_ui_keyring_src_defaults_.md#accountregex)
* [addressRegex](_packages_ui_keyring_src_defaults_.md#addressregex)
* [contractRegex](_packages_ui_keyring_src_defaults_.md#contractregex)

### Functions

* [accountKey](_packages_ui_keyring_src_defaults_.md#accountkey)
* [addressKey](_packages_ui_keyring_src_defaults_.md#addresskey)
* [contractKey](_packages_ui_keyring_src_defaults_.md#contractkey)

## Variables

### accountRegex

• `Const` **accountRegex**: RegExp = new RegExp(\`^${ACCOUNT\_PREFIX}0x[0-9a-f]*\`, '')

*Defined in [packages/ui-keyring/src/defaults.ts:27](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/defaults.ts#L27)*

___

### addressRegex

• `Const` **addressRegex**: RegExp = new RegExp(\`^${ADDRESS\_PREFIX}0x[0-9a-f]*\`, '')

*Defined in [packages/ui-keyring/src/defaults.ts:29](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/defaults.ts#L29)*

___

### contractRegex

• `Const` **contractRegex**: RegExp = new RegExp(\`^${CONTRACT\_PREFIX}0x[0-9a-f]*\`, '')

*Defined in [packages/ui-keyring/src/defaults.ts:31](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/defaults.ts#L31)*

## Functions

### accountKey

▸ `Const`**accountKey**(`address`: string): string

*Defined in [packages/ui-keyring/src/defaults.ts:18](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/defaults.ts#L18)*

#### Parameters:

Name | Type |
------ | ------ |
`address` | string |

**Returns:** string

___

### addressKey

▸ `Const`**addressKey**(`address`: string): string

*Defined in [packages/ui-keyring/src/defaults.ts:21](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/defaults.ts#L21)*

#### Parameters:

Name | Type |
------ | ------ |
`address` | string |

**Returns:** string

___

### contractKey

▸ `Const`**contractKey**(`address`: string): string

*Defined in [packages/ui-keyring/src/defaults.ts:24](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/ui-keyring/src/defaults.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`address` | string |

**Returns:** string
