/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';
import CheckboxStyles from '@zendeskgarden/css-forms/dist/checkbox.css';

import { version } from '../../package.json';
const COMPONENT_ID = 'toggles.toggle_view';

/**
 * Used as a layout wrapper for other Toggle views. Accepts all `<div>` props
 */
const ToggleView = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(CheckboxStyles['c-chk'], {
      // RTL
      [CheckboxStyles['is-rtl']]: isRtl(props)
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default ToggleView;
