**Polkadot JS UI libraries**

> [README](../README.md) / [Globals](../globals.md) / ["packages/react-identicon/src/Demo"](../modules/_packages_react_identicon_src_demo_.md) / Demo

# Class: Demo

## Hierarchy

* PureComponent

  ↳ **Demo**

## Index

### Methods

* [UNSAFE\_componentWillMount](_packages_react_identicon_src_demo_.demo.md#unsafe_componentwillmount)
* [UNSAFE\_componentWillReceiveProps](_packages_react_identicon_src_demo_.demo.md#unsafe_componentwillreceiveprops)
* [UNSAFE\_componentWillUpdate](_packages_react_identicon_src_demo_.demo.md#unsafe_componentwillupdate)
* [componentDidCatch](_packages_react_identicon_src_demo_.demo.md#componentdidcatch)
* [componentDidMount](_packages_react_identicon_src_demo_.demo.md#componentdidmount)
* [componentDidUpdate](_packages_react_identicon_src_demo_.demo.md#componentdidupdate)
* [componentWillMount](_packages_react_identicon_src_demo_.demo.md#componentwillmount)
* [componentWillReceiveProps](_packages_react_identicon_src_demo_.demo.md#componentwillreceiveprops)
* [componentWillUnmount](_packages_react_identicon_src_demo_.demo.md#componentwillunmount)
* [componentWillUpdate](_packages_react_identicon_src_demo_.demo.md#componentwillupdate)
* [getSnapshotBeforeUpdate](_packages_react_identicon_src_demo_.demo.md#getsnapshotbeforeupdate)
* [render](_packages_react_identicon_src_demo_.demo.md#render)
* [shouldComponentUpdate](_packages_react_identicon_src_demo_.demo.md#shouldcomponentupdate)

## Methods

### UNSAFE\_componentWillMount

▸ `Optional`**UNSAFE_componentWillMount**(): void

*Inherited from [Demo](_packages_react_identicon_src_demo_.demo.md).[UNSAFE_componentWillMount](_packages_react_identicon_src_demo_.demo.md#unsafe_componentwillmount)*

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

▸ `Optional`**UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly\<{}>, `nextContext`: any): void

*Inherited from [Demo](_packages_react_identicon_src_demo_.demo.md).[UNSAFE_componentWillReceiveProps](_packages_react_identicon_src_demo_.demo.md#unsafe_componentwillreceiveprops)*

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
`nextProps` | Readonly\<{}> |
`nextContext` | any |

**Returns:** void

___

### UNSAFE\_componentWillUpdate

▸ `Optional`**UNSAFE_componentWillUpdate**(`nextProps`: Readonly\<{}>, `nextState`: Readonly\<{}>, `nextContext`: any): void

*Inherited from [Demo](_packages_react_identicon_src_demo_.demo.md).[UNSAFE_componentWillUpdate](_packages_react_identicon_src_demo_.demo.md#unsafe_componentwillupdate)*

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
`nextProps` | Readonly\<{}> |
`nextState` | Readonly\<{}> |
`nextContext` | any |

**Returns:** void

___

### componentDidCatch

▸ `Optional`**componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): void

*Inherited from [Demo](_packages_react_identicon_src_demo_.demo.md).[componentDidCatch](_packages_react_identicon_src_demo_.demo.md#componentdidcatch)*

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

*Inherited from [Demo](_packages_react_identicon_src_demo_.demo.md).[componentDidMount](_packages_react_identicon_src_demo_.demo.md#componentdidmount)*

*Defined in node_modules/@types/react/index.d.ts:620*

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** void

___

### componentDidUpdate

▸ `Optional`**componentDidUpdate**(`prevProps`: Readonly\<{}>, `prevState`: Readonly\<{}>, `snapshot?`: SS): void

*Inherited from [Demo](_packages_react_identicon_src_demo_.demo.md).[componentDidUpdate](_packages_react_identicon_src_demo_.demo.md#componentdidupdate)*

*Defined in node_modules/@types/react/index.d.ts:683*

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<{}> |
`prevState` | Readonly\<{}> |
`snapshot?` | SS |

**Returns:** void

___

### componentWillMount

▸ `Optional`**componentWillMount**(): void

*Inherited from [Demo](_packages_react_identicon_src_demo_.demo.md).[componentWillMount](_packages_react_identicon_src_demo_.demo.md#componentwillmount)*

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

▸ `Optional`**componentWillReceiveProps**(`nextProps`: Readonly\<{}>, `nextContext`: any): void

*Inherited from [Demo](_packages_react_identicon_src_demo_.demo.md).[componentWillReceiveProps](_packages_react_identicon_src_demo_.demo.md#componentwillreceiveprops)*

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
`nextProps` | Readonly\<{}> |
`nextContext` | any |

**Returns:** void

___

### componentWillUnmount

▸ `Optional`**componentWillUnmount**(): void

*Inherited from [Demo](_packages_react_identicon_src_demo_.demo.md).[componentWillUnmount](_packages_react_identicon_src_demo_.demo.md#componentwillunmount)*

*Defined in node_modules/@types/react/index.d.ts:636*

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** void

___

### componentWillUpdate

▸ `Optional`**componentWillUpdate**(`nextProps`: Readonly\<{}>, `nextState`: Readonly\<{}>, `nextContext`: any): void

*Inherited from [Demo](_packages_react_identicon_src_demo_.demo.md).[componentWillUpdate](_packages_react_identicon_src_demo_.demo.md#componentwillupdate)*

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
`nextProps` | Readonly\<{}> |
`nextState` | Readonly\<{}> |
`nextContext` | any |

**Returns:** void

___

### getSnapshotBeforeUpdate

▸ `Optional`**getSnapshotBeforeUpdate**(`prevProps`: Readonly\<{}>, `prevState`: Readonly\<{}>): any \| null

*Inherited from [Demo](_packages_react_identicon_src_demo_.demo.md).[getSnapshotBeforeUpdate](_packages_react_identicon_src_demo_.demo.md#getsnapshotbeforeupdate)*

*Defined in node_modules/@types/react/index.d.ts:677*

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters:

Name | Type |
------ | ------ |
`prevProps` | Readonly\<{}> |
`prevState` | Readonly\<{}> |

**Returns:** any \| null

___

### render

▸ **render**(): React.ReactNode

*Defined in [packages/react-identicon/src/Demo.tsx:13](https://github.com/polkadot-js/ui/blob/678d4dc5/packages/react-identicon/src/Demo.tsx#L13)*

**Returns:** React.ReactNode

___

### shouldComponentUpdate

▸ `Optional`**shouldComponentUpdate**(`nextProps`: Readonly\<{}>, `nextState`: Readonly\<{}>, `nextContext`: any): boolean

*Inherited from [Demo](_packages_react_identicon_src_demo_.demo.md).[shouldComponentUpdate](_packages_react_identicon_src_demo_.demo.md#shouldcomponentupdate)*

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
`nextProps` | Readonly\<{}> |
`nextState` | Readonly\<{}> |
`nextContext` | any |

**Returns:** boolean
