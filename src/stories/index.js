import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import App from '../App';
import Label from '../Label';

// storiesOf('App', module)
//   .add('デフォルト', () => <App/>)
//   .add('指定したメッセージ', () => <App message="ようこそReactへ" />);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Label', module)
  .add('success', () => <Label type="success" />)
  .add('default', () => <Label type="" />)

