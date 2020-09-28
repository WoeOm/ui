**Polkadot JS UI libraries**

> [README](../README.md) / [Globals](../globals.md) / "packages/vue-identicon/src/icons/Beachball"

# Module: "packages/vue-identicon/src/icons/Beachball"

## Index

### Variables

* [Beachball](_packages_vue_identicon_src_icons_beachball_.md#beachball)

## Variables

### Beachball

• `Const` **Beachball**: ExtendedVue\<Vue, Data, { createHtml: () => void  }, unknown, Record\<\"address\" \| \"size\", any>> = Vue.extend({ created: function (): void { this.createHtml(); }, data: function (): Data { return { // eslint-disable-next-line quotes html: \`\<div />\` }; }, methods: { createHtml: function (): void { this.html = beachballIcon(this.address, this.size).outerHTML; } }, props: ['address', 'size'], // eslint-disable-next-line quotes template: \`\<div v-html="html" />\`})

*Defined in [packages/vue-identicon/src/icons/Beachball.ts:15](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/vue-identicon/src/icons/Beachball.ts#L15)*

**`name`** Beachball

**`description`** The Beachball identicon
