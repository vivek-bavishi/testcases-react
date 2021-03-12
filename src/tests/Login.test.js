import React from 'react';
import 'mutationobserver-shim';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import LoginView from '../tests_view/Login.view';
import Login from '../pages/Login';

// const onSubmit = jest.fn();  // you can mock the function

// jest.mock("../api/login", () => ({    //you can mock the api
//   loginUser: jest.fn(),
// }));

describe('Login test cases', () => {
  const values = {
    // define variable which hase demo input value
    email: 'Testing@aiir.com',
    password: 'test123',
  };

  // let api;             //define api which has api mock

  // beforeAll(() => {    // in this before all you can resolve api
  //   api = jest.requireMock("../api/login");
  // });

  it('should all field of login defined', async () => {
    const view = renderView(); //view in veriable

    expect(view.container).toBeInTheDocument(); // toBeInTheDocument used to assert that an element is in the body of the document like mathcher
    expect(view.email).toBeInTheDocument();
    expect(view.password).toBeInTheDocument();
    expect(view.submit).toBeInTheDocument();
  });
  it('should render empty form', () => {
    const view = renderView();

    expect(view.email).toBeDefined();          // toBeDefined to check that a variable is not undefined. For example
    expect(view.password).toBeDefined();
    expect(view.submit).toBeDefined();
    expect(view.email.textContent).toBe('');
    expect(view.password.textContent).toBe('');
    expect(view.submit).toBeInTheDocument();
  });

  it('click submit without fill form', async () => {
    const view = renderView();
    expect(view.email).toBeDefined();
    expect(view.password).toBeDefined();
    expect(view.submit).toBeDefined();
    await waitFor(() => {
      fireEvent.click(view.submit);
    });
    // here write code which is show validation error check truthyness of error
  });

  it('should not render error on submit with values', async () => {
    const view = renderView();

    await waitFor(() => {
      fireEvent.change(view.email, { target: { value: values.email } });
      fireEvent.change(view.password, { target: { value: values.password } });
      expect(view.email.value).toBe(values.email);
      expect(view.password.value).toBe(values.password);
    });
    await waitFor(() => fireEvent.click(view.submit));
    // write code here which is check error is defined (example show below)
    // await waitFor(() => {
    //   expect(view.emailError).not.toBeInTheDocument();
    // })
  });

  it('should call initial api', async () => {
    renderView();
    // api.loginUser();                                               // you can call api directly
    // await waitFor(() => expect(api.loginUser).toHaveBeenCalled()); // you can check api call truthyness
  });
});
const renderView = () => {
  const dom = render(
    <Router>
      <Login />
    </Router>,
  );
  return new LoginView(dom);
};
