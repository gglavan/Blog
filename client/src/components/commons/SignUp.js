import React from "react";
import { Button, Checkbox, Form, Input, Icon } from "semantic-ui-react";

const SignUp = () => (
  <Form>
    <Form.Field>
      <Input iconPosition="left" placeholder="Email">
        <Icon name="at" />
        <input />
      </Input>
    </Form.Field>
    <Form.Field>
      <Input iconPosition="left" placeholder="Email">
        <Icon name="at" />
        <input />
      </Input>
    </Form.Field>
    <Form.Field>
      <Checkbox label="I agree to the Terms and Conditions" />
    </Form.Field>
    <Button type="submit">Sign Up</Button>
  </Form>
);

export default SignUp;
