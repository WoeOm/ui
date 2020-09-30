**Polkadot JS UI libraries**

> [README](../README.md) / [Globals](../globals.md) / ["packages/reactnative-identicon/src/Identicon"](../modules/_packages_reactnative_identicon_src_identicon_.md) / IdentityIcon

# Class: IdentityIcon

## Hierarchy

* PureComponent\<Props, State>

  ↳ **IdentityIcon**

## Index

### Methods

* [UNSAFE\_componentWillMount](_packages_reactnative_identicon_src_identicon_.identityicon.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](_packages_reactnative_identicon_src_identicon_.identityicon.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](_packages_reactnative_identicon_src_identicon_.identityicon.md#unsafe_componentwillupdate)
* [componentDidCatch](_packages_reactnative_identicon_src_identicon_.identityicon.md#componentdidcatch)
* [componentDidMount](_packages_reactnative_identicon_src_identicon_.identityicon.md#componentdidmount)
* [componentDidUpdate](_packages_reactnative_identicon_src_identicon_.identityicon.md#componentdidupdate)
* [componentWillMount](_packages_reactnative_identicon_src_identicon_.identityicon.md#componentwillmount)
* [componentWillReceiveProps](_packages_reactnative_identicon_src_identicon_.identityicon.md#componentwillreceiveprops)
* [componentWillUnmount](_packages_reactnative_identicon_src_identicon_.identityicon.md#componentwillunmount)
* [componentWillUpdate](_packages_reactnative_identicon_src_identicon_.identityicon.md#componentwillupdate)
* [getSnapshotBeforeUpdate](_packages_reactnative_identicon_src_identicon_.identityicon.md#getsnapshotbeforeupdate)
* [render](_packages_reactnative_identicon_src_identicon_.identityicon.md#render)
* [shouldComponentUpdate](_packages_reactnative_identicon_src_identicon_.identityicon.md#shouldcomponentupdate)
* [getDerivedStateFromProps](_packages_reactnative_identicon_src_identicon_.identityicon.md#getderivedstatefromprops)
* [setDefaultPrefix](_packages_reactnative_identicon_src_identicon_.identityicon.md#setdefaultprefix)

### Object literals

* [state](_packages_reactnative_identicon_src_identicon_.identityicon.md#state)

## Methods

### UNSAFE\_componentWillMount

▸ `Optional`**UNSAFE_componentWillMount**(): void

*Inherited from [IdentityIcon](_packages_reactnative_identicon_src_identicon_.identityicon.md).[UNSAFE_componentWillMount](_packages_reactnative_identicon_src_identicon_.identityicon.md#unsafe_componentwillmount)*

*Defined in node_modules/@types/react/index.d.ts:712*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** void

___

### UNSAFE\_componentWillReceiveProps

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly\<Props>, `nextContext`: any): void

*Inherited from [IdentityIcon](_packages_reactnative_identicon_src_identicon_.identityicon.md).[UNSAFE_componentWillReceiveProps](_packages_reactnative_identicon_src_identicon_.identityicon.md#unsafe_componentwillreceiveprops)*

*Defined in node_modules/@types/react/index.d.ts:744*

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | Readonly\<Props> |
`nextContext` | any |

**Returns:** void

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: Readonly\<Props>, `nextState`: Readonly\<State>, `nextContext`: any): void

*Inherited from [IdentityIcon](_packages_reactnative_identicon_src_identicon_.identityicon.md).[UNSAFE_componentWillUpdate](_packages_reactnative_identicon_src_identicon_.identityicon.md#unsafe_componentwillupdate)*

*Defined in node_modules/@types/react/index.d.ts:772*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | Readonly\<Props> |
`nextState` | Readonly\<State> |
`nextContext` | any |

**Returns:** void

___

### componentDidCatch

▸ `Optional`**componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): void

*Inherited from [IdentityIcon](_packages_reactnative_identicon_src_identicon_.identityicon.md).[componentDidCatch](_packages_reactnative_identicon_src_identicon_.identityicon.md#componentdidcatch)*

*Defined in node_modules/@types/react/index.d.ts:641*

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters:

Name | Type |
------ | ------ |
`error` | Error |
`errorInfo` | ErrorInfo |

**Returns:** void

___

### componentDidMount

▸ `Optional`**componentDidMount**(): void

*Inherited from [IdentityIcon](_packages_reactnative_identicon_src_identicon_.identityicon.md).[componentDidMount](_packages_reactnative_identicon_src_identicon_.identityicon.md#componentdidmount)*

*Defined in node_modules/@types/react/index.d.ts:620*

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** void

___

### componentDidUpdate

▸ `Optional`**componentDidUpdate**(`prevProps`: Readonly\<Props>, `prevState`: Readonly\<State>, `snapshot?`: SS): void

*Inherited from [IdentityIcon](_packages_reactnative_identicon_src_identicon_.identityicon.md).[componentDidUpdate](_packages_reactnative_identicon_src_identicon_.identityicon.md#componentdidupdate)*

*Defined in node_modules/@types/react/index.d.ts:683*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<Props> |
`prevState` | Readonly\<State> |
`snapshot?` | SS |

**Returns:** void

___

### componentWillMount

▸ `Optional`**componentWillMount**(): void

*Inherited from [IdentityIcon](_packages_reactnative_identicon_src_identicon_.identityicon.md).[componentWillMount](_packages_reactnative_identicon_src_identicon_.identityicon.md#componentwillmount)*

*Defined in node_modules/@types/react/index.d.ts:698*

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** void

___

### componentWillReceiveProps

▸ `Optional`**componentWillReceiveProps**(`nextProps`: Readonly\<Props>, `nextContext`: any): void

*Inherited from [IdentityIcon](_packages_reactnative_identicon_src_identicon_.identityicon.md).[componentWillReceiveProps](_packages_reactnative_identicon_src_identicon_.identityicon.md#componentwillreceiveprops)*

*Defined in node_modules/@types/react/index.d.ts:727*

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | Readonly\<Props> |
`nextContext` | any |

**Returns:** void

___

### componentWillUnmount

▸ `Optional`**componentWillUnmount**(): void

*Inherited from [IdentityIcon](_packages_reactnative_identicon_src_identicon_.identityicon.md).[componentWillUnmount](_packages_reactnative_identicon_src_identicon_.identityicon.md#componentwillunmount)*

*Defined in node_modules/@types/react/index.d.ts:636*

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** void

___

### componentWillUpdate

▸ `Optional`**componentWillUpdate**(`nextProps`: Readonly\<Props>, `nextState`: Readonly\<State>, `nextContext`: any): void

*Inherited from [IdentityIcon](_packages_reactnative_identicon_src_identicon_.identityicon.md).[componentWillUpdate](_packages_reactnative_identicon_src_identicon_.identityicon.md#componentwillupdate)*

*Defined in node_modules/@types/react/index.d.ts:757*

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | Readonly\<Props> |
`nextState` | Readonly\<State> |
`nextContext` | any |

**Returns:** void

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: Readonly\<Props>, `prevState`: Readonly\<State>): any \| null

*Inherited from [IdentityIcon](_packages_reactnative_identicon_src_identicon_.identityicon.md).[getSnapshotBeforeUpdate](_packages_reactnative_identicon_src_identicon_.identityicon.md#getsnapshotbeforeupdate)*

*Defined in node_modules/@types/react/index.d.ts:677*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<Props> |
`prevState` | Readonly\<State> |

**Returns:** any \| null

___

### render

▸ **render**(): React.ReactNode

*Defined in [packages/reactnative-identicon/src/Identicon.tsx:64](https://github.com/polkadot-js/ui/blob/fea7424a/packages/reactnative-identicon/src/Identicon.tsx#L64)*

**Returns:** React.ReactNode

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: Readonly\<Props>, `nextState`: Readonly\<State>, `nextContext`: any): boolean

*Inherited from [IdentityIcon](_packages_reactnative_identicon_src_identicon_.identityicon.md).[shouldComponentUpdate](_packages_reactnative_identicon_src_identicon_.identityicon.md#shouldcomponentupdate)*

*Defined in node_modules/@types/react/index.d.ts:631*

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters:

Name | Type |
------ | ------ |
`nextProps` | Readonly\<Props> |
`nextState` | Readonly\<State> |
`nextContext` | any |

**Returns:** boolean

___

### getDerivedStateFromProps

▸ `Static`**getDerivedStateFromProps**(`__namedParameters`: { prefix: undefined \| number = IdentityIcon.prefix; value: undefined \| null \| string \| Uint8Array  }, `prevState`: State): State \| null

*Defined in [packages/reactnative-identicon/src/Identicon.tsx:46](https://github.com/polkadot-js/ui/blob/fea7424a/packages/reactnative-identicon/src/Identicon.tsx#L46)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { prefix: undefined \| number = IdentityIcon.prefix; value: undefined \| null \| string \| Uint8Array  } |
`prevState` | State |

**Returns:** State \| null

___

### setDefaultPrefix

▸ `Static`**setDefaultPrefix**(`prefix`: Prefix): void

*Defined in [packages/reactnative-identicon/src/Identicon.tsx:42](https://github.com/polkadot-js/ui/blob/fea7424a/packages/reactnative-identicon/src/Identicon.tsx#L42)*

#### Parameters:

Name | Type |
------ | ------ |
`prefix` | Prefix |

**Returns:** void

## Object literals

### state

▪  **state**: object

*Defined in [packages/reactnative-identicon/src/Identicon.tsx:35](https://github.com/polkadot-js/ui/blob/fea7424a/packages/reactnative-identicon/src/Identicon.tsx#L35)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`address` | string | "" |
`publicKey` | string | "0x" |
