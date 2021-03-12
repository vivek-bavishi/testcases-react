import { queryByTestId } from '@testing-library/react';

export default class LoginView {
  constructor(dom) {
    this.dom = dom;
  }

  get container() {
    return queryByTestId(this.dom.container, 'Login.container');
  }

  get email() {
    return queryByTestId(this.dom.container, 'Login.email');
  }

  get password() {
    return queryByTestId(this.dom.container, 'Login.password');
  }

  get submit() {
    return queryByTestId(this.dom.container, 'Login.submit');
  }
}
