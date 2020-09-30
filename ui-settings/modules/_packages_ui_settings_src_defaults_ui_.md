**Polkadot JS UI libraries**

> [README](../README.md) / [Globals](../globals.md) / "packages/ui-settings/src/defaults/ui"

# Module: "packages/ui-settings/src/defaults/ui"

## Index

### Variables

* [ICONS](_packages_ui_settings_src_defaults_ui_.md#icons)
* [ICON\_DEFAULT](_packages_ui_settings_src_defaults_ui_.md#icon_default)
* [ICON\_DEFAULT\_HOST](_packages_ui_settings_src_defaults_ui_.md#icon_default_host)
* [LANGUAGE\_DEFAULT](_packages_ui_settings_src_defaults_ui_.md#language_default)
* [UIMODES](_packages_ui_settings_src_defaults_ui_.md#uimodes)
* [UIMODE\_DEFAULT](_packages_ui_settings_src_defaults_ui_.md#uimode_default)
* [UITHEMES](_packages_ui_settings_src_defaults_ui_.md#uithemes)
* [UITHEME\_DEFAULT](_packages_ui_settings_src_defaults_ui_.md#uitheme_default)

## Variables

### ICONS

• `Const` **ICONS**: [Option](_packages_ui_settings_src_types_.md#option)[] = [ { info: 'default', text: 'Default for the connected node', value: 'default' }, { info: 'polkadot', text: 'Polkadot', value: 'polkadot' }, { info: 'substrate', text: 'Substrate', value: 'substrate' }, { info: 'beachball', text: 'Beachball', value: 'beachball' }]

*Defined in [packages/ui-settings/src/defaults/ui.ts:50](https://github.com/polkadot-js/ui/blob/fea7424a/packages/ui-settings/src/defaults/ui.ts#L50)*

___

### ICON\_DEFAULT

• `Const` **ICON\_DEFAULT**: \"default\" = "default"

*Defined in [packages/ui-settings/src/defaults/ui.ts:44](https://github.com/polkadot-js/ui/blob/fea7424a/packages/ui-settings/src/defaults/ui.ts#L44)*

___

### ICON\_DEFAULT\_HOST

• `Const` **ICON\_DEFAULT\_HOST**: \"polkadot\" \| \"substrate\" = isPolkadot ? 'polkadot' : 'substrate'

*Defined in [packages/ui-settings/src/defaults/ui.ts:46](https://github.com/polkadot-js/ui/blob/fea7424a/packages/ui-settings/src/defaults/ui.ts#L46)*

___

### LANGUAGE\_DEFAULT

• `Const` **LANGUAGE\_DEFAULT**: \"default\" = "default"

*Defined in [packages/ui-settings/src/defaults/ui.ts:8](https://github.com/polkadot-js/ui/blob/fea7424a/packages/ui-settings/src/defaults/ui.ts#L8)*

___

### UIMODES

• `Const` **UIMODES**: [Option](_packages_ui_settings_src_types_.md#option)[] = [ { info: 'full', text: 'Fully featured', value: 'full' }, { info: 'light', text: 'Basic features only', value: 'light' }]

*Defined in [packages/ui-settings/src/defaults/ui.ts:14](https://github.com/polkadot-js/ui/blob/fea7424a/packages/ui-settings/src/defaults/ui.ts#L14)*

___

### UIMODE\_DEFAULT

• `Const` **UIMODE\_DEFAULT**: \"light\" \| \"full\" = !isPolkadot && typeof window !== 'undefined' && window.location.host.includes('ui-light') ? 'light' : 'full'

*Defined in [packages/ui-settings/src/defaults/ui.ts:10](https://github.com/polkadot-js/ui/blob/fea7424a/packages/ui-settings/src/defaults/ui.ts#L10)*

___

### UITHEMES

• `Const` **UITHEMES**: [Option](_packages_ui_settings_src_types_.md#option)[] = [ { info: 'polkadot', text: 'Polkadot', value: 'polkadot' }, { info: 'substrate', text: 'Substrate', value: 'substrate' }]

*Defined in [packages/ui-settings/src/defaults/ui.ts:31](https://github.com/polkadot-js/ui/blob/fea7424a/packages/ui-settings/src/defaults/ui.ts#L31)*

___

### UITHEME\_DEFAULT

• `Const` **UITHEME\_DEFAULT**: \"polkadot\" \| \"substrate\" = isPolkadot ? 'polkadot' : 'substrate'

*Defined in [packages/ui-settings/src/defaults/ui.ts:27](https://github.com/polkadot-js/ui/blob/fea7424a/packages/ui-settings/src/defaults/ui.ts#L27)*
