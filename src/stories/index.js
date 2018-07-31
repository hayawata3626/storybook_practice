import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Button, Welcome } from '@storybook/react/demo';
import App from '../App';
import Label from '../Label';


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
  .add('default', () => <Label type="" />)
  .add('alert', () => <Label type="alert" />)


storiesOf('App', module)
  .add('info of App',
    withInfo(`
      マークダウン形式で記述することができます。

      ### タイトル

      ~~~js
      <Button>Click Here</Button>
      ~~~

    `)(() =>
      <App text="hello from storybook"/>
    )
  )