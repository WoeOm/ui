[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["packages/ui-settings/src/defaults/crypto"](_packages_ui_settings_src_defaults_crypto_.md)

# Module: "packages/ui-settings/src/defaults/crypto"

## Index

### Variables

* [CRYPTOS](_packages_ui_settings_src_defaults_crypto_.md#const-cryptos)
* [CRYPTOS_ETH](_packages_ui_settings_src_defaults_crypto_.md#const-cryptos_eth)

## Variables

### `Const` CRYPTOS

• **CRYPTOS**: *[Option](_packages_ui_settings_src_types_.md#option)[]* = [
  {
    info: 'sr25519',
    text: 'Schnorrkel (sr25519, recommended)',
    value: 'sr25519'
  },
  {
    info: 'ed25519',
    text: 'Edwards (ed25519, alternative)',
    value: 'ed25519'
  },
  {
    info: 'ecdsa',
    text: 'ECDSA (Non BTC/ETH compatible)',
    value: 'ecdsa'
  }
]

*Defined in [packages/ui-settings/src/defaults/crypto.ts:7](https://github.com/polkadot-js/ui/blob/ccfa7307/packages/ui-settings/src/defaults/crypto.ts#L7)*

___

### `Const` CRYPTOS_ETH

• **CRYPTOS_ETH**: *[Option](_packages_ui_settings_src_types_.md#option)[]* = [
  {
    info: 'ethereum',
    text: 'ECDSA (ETH compatible)',
    value: 'ethereum'
  }
]

*Defined in [packages/ui-settings/src/defaults/crypto.ts:25](https://github.com/polkadot-js/ui/blob/ccfa7307/packages/ui-settings/src/defaults/crypto.ts#L25)*
