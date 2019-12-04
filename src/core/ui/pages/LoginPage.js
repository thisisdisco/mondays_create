import React, { PureComponent } from 'react';
import styled from 'styled-components';

import {
  Page,
  Container,
  Input,
  Card,
  Heading as HeadingAtom,
  FormGroup,
  Button,
} from 'core/ui/atoms/index';
import { loginWithPassword } from 'core/api/actions';

class LoginPage extends PureComponent {
  state = {
    email: '',
    password: '',
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = () => {
    const { email, password } = this.state;
    loginWithPassword(email, password).catch(e => {
      console.log(e);
      this.setState({ error: e.message });
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Page>
        <Container>
          <CardCenter>
            <Heading>Welcome, <br/> Log in to continue</Heading>
            <FormGroup>
              <Input type="email" placeholder="E-mail" value={email} name="email" onChange={this.onChange}/>
            </FormGroup>
            <FormGroup>
              <Input type="password" placeholder="Password" value={password} name="password" onChange={this.onChange}/>
            </FormGroup>
            <Button onClick={this.onSubmit}>Log in</Button>
          </CardCenter>
        </Container>
      </Page>
    );
  }
}

export default LoginPage;

const Heading = styled(p => <HeadingAtom level={3} {...p} />)`
  margin-top: 0;
  margin-bottom: 10px;
`;

const CardCenter = styled(Card)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 300px;
  width: 300px;
  padding: 15px;
`;
