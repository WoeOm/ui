**Polkadot JS UI libraries**

> [README](../README.md) / [Globals](../globals.md) / "packages/vue-identicon/src/icons/Polkadot"

# Module: "packages/vue-identicon/src/icons/Polkadot"

## Index

### Variables

* [Polkadot](_packages_vue_identicon_src_icons_polkadot_.md#polkadot)

## Variables

### Polkadot

• `Const` **Polkadot**: ExtendedVue\<Vue, Data, { createSvgHtml: () => void  }, unknown, Record\<\"address\" \| \"size\" \| \"isAlternative\", any>> = Vue.extend({ created: function (): void { this.createSvgHtml(); }, data: function (): Data { return { // eslint-disable-next-line quotes svgHtml: \`\<svg viewBox="0 0 64 64" />\` }; }, methods: { createSvgHtml: function (): void { const circles = polkadotIcon(this.address, { isAlternative: (this as This).isAlternative \|\| false }).map(({ cx, cy, fill, r }) => \`\<circle cx=${cx} cy=${cy} fill="${fill}" r=${r} />\` ).join(''); this.svgHtml = \`\<svg height=${this.size as number} viewBox='0 0 64 64' width=${this.size as number}>${circles}\</svg>\`; } }, props: ['address', 'isAlternative', 'size'], // eslint-disable-next-line quotes template: \`\<div v-html="svgHtml" />\`})

*Defined in [packages/vue-identicon/src/icons/Polkadot.ts:20](https://github.com/polkadot-js/ui/blob/1833b1a2/packages/vue-identicon/src/icons/Polkadot.ts#L20)*

**`name`** Polkadot

**`description`** The Polkadot default identicon
