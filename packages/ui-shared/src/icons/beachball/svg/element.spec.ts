// Copyright 2017-2020 @polkadot/ui-shared authors & contributors
// SPDX-License-Identifier: Apache-2.0

import xmlserializer from 'xmlserializer';

import element from './element';

describe('element', (): void => {
  it('creates a basic SVG element', (): void => {
    expect(
      xmlserializer.serializeToString(
        element(123)
      )
    ).toEqual('<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="123" height="123"/>');
  });
});
