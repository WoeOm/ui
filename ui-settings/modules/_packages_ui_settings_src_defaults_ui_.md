[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["packages/ui-settings/src/defaults/ui"](_packages_ui_settings_src_defaults_ui_.md)

# Module: "packages/ui-settings/src/defaults/ui"

## Index

### Variables

* [ICONS](_packages_ui_settings_src_defaults_ui_.md#const-icons)
* [ICON_DEFAULT](_packages_ui_settings_src_defaults_ui_.md#const-icon_default)
* [ICON_DEFAULT_HOST](_packages_ui_settings_src_defaults_ui_.md#const-icon_default_host)
* [LANGUAGE_DEFAULT](_packages_ui_settings_src_defaults_ui_.md#const-language_default)
* [UIMODES](_packages_ui_settings_src_defaults_ui_.md#const-uimodes)
* [UIMODE_DEFAULT](_packages_ui_settings_src_defaults_ui_.md#const-uimode_default)
* [UITHEMES](_packages_ui_settings_src_defaults_ui_.md#const-uithemes)
* [UITHEME_DEFAULT](_packages_ui_settings_src_defaults_ui_.md#const-uitheme_default)

## Variables

### `Const` ICONS

• **ICONS**: *[Option](_packages_ui_settings_src_types_.md#option)[]* = [
  {
    info: 'default',
    text: 'Default for the connected node',
    value: 'default'
  },
  {
    info: 'polkadot',
    text: 'Polkadot',
    value: 'polkadot'
  },
  {
    info: 'substrate',
    text: 'Substrate',
    value: 'substrate'
  },
  {
    info: 'beachball',
    text: 'Beachball',
    value: 'beachball'
  }
]

*Defined in [packages/ui-settings/src/defaults/ui.ts:50](https://github.com/polkadot-js/ui/blob/723641ac/packages/ui-settings/src/defaults/ui.ts#L50)*

___

### `Const` ICON_DEFAULT

• **ICON_DEFAULT**: *"default"* = "default"

*Defined in [packages/ui-settings/src/defaults/ui.ts:44](https://github.com/polkadot-js/ui/blob/723641ac/packages/ui-settings/src/defaults/ui.ts#L44)*

___

### `Const` ICON_DEFAULT_HOST

• **ICON_DEFAULT_HOST**: *"polkadot" | "substrate"* = isPolkadot
  ? 'polkadot'
  : 'substrate'

*Defined in [packages/ui-settings/src/defaults/ui.ts:46](https://github.com/polkadot-js/ui/blob/723641ac/packages/ui-settings/src/defaults/ui.ts#L46)*

___

### `Const` LANGUAGE_DEFAULT

• **LANGUAGE_DEFAULT**: *"default"* = "default"

*Defined in [packages/ui-settings/src/defaults/ui.ts:8](https://github.com/polkadot-js/ui/blob/723641ac/packages/ui-settings/src/defaults/ui.ts#L8)*

___

### `Const` UIMODES

• **UIMODES**: *[Option](_packages_ui_settings_src_types_.md#option)[]* = [
  {
    info: 'full',
    text: 'Fully featured',
    value: 'full'
  },
  {
    info: 'light',
    text: 'Basic features only',
    value: 'light'
  }
]

*Defined in [packages/ui-settings/src/defaults/ui.ts:14](https://github.com/polkadot-js/ui/blob/723641ac/packages/ui-settings/src/defaults/ui.ts#L14)*

___

### `Const` UIMODE_DEFAULT

• **UIMODE_DEFAULT**: *"light" | "full"* = !isPolkadot && typeof window !== 'undefined' && window.location.host.includes('ui-light')
  ? 'light'
  : 'full'

*Defined in [packages/ui-settings/src/defaults/ui.ts:10](https://github.com/polkadot-js/ui/blob/723641ac/packages/ui-settings/src/defaults/ui.ts#L10)*

___

### `Const` UITHEMES

• **UITHEMES**: *[Option](_packages_ui_settings_src_types_.md#option)[]* = [
  {
    info: 'polkadot',
    text: 'Polkadot',
    value: 'polkadot'
  },
  {
    info: 'substrate',
    text: 'Substrate',
    value: 'substrate'
  }
]

*Defined in [packages/ui-settings/src/defaults/ui.ts:31](https://github.com/polkadot-js/ui/blob/723641ac/packages/ui-settings/src/defaults/ui.ts#L31)*

___

### `Const` UITHEME_DEFAULT

• **UITHEME_DEFAULT**: *"polkadot" | "substrate"* = isPolkadot
  ? 'polkadot'
  : 'substrate'

*Defined in [packages/ui-settings/src/defaults/ui.ts:27](https://github.com/polkadot-js/ui/blob/723641ac/packages/ui-settings/src/defaults/ui.ts#L27)*
