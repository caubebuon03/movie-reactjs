import { render, screen, fireEvent } from '@testing-library/react';
import CheckOutModal from '../../../components/Layout/checkout-modal/checkout-modal';
import { Provider } from 'react-redux';
import store from '../../../store';

describe('CheckOutModal', () => {
  test('renders CheckoutCard component', () => {
    render(
    <Provider store={store}>
    <CheckOutModal isCheckout={true} SetIsCheckout={() => {}} SetIsSuccess={() => {}} />
    </Provider>
    );
    const checkoutCardElement = screen.getByText('Place order');
    expect(checkoutCardElement).toBeTruthy();
  });

  test('renders Checkout component', () => {
    render(
    <Provider store={store}>
    <CheckOutModal isCheckout={true} SetIsCheckout={() => {}} SetIsSuccess={() => {}} />
    </Provider>
    );
    const checkoutElement = screen.getByText('Card Number');
    expect(checkoutElement).toBeTruthy();
  });

  test('calls SetIsCheckout and SetIsSuccess when checkout is done', () => {
    const setIsCheckout = jest.fn();
    const setIsSuccess = jest.fn();
    render(
    <Provider store={store}>
    <CheckOutModal isCheckout={true} SetIsCheckout={setIsCheckout} SetIsSuccess={setIsSuccess} />
    </Provider>
    );
    fireEvent.click(screen.getByText('Place order'));
    expect(setIsCheckout).toBeTruthy();
    expect(setIsSuccess).toBeTruthy();
  });
});