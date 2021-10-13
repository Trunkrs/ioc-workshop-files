import PaymentResult from '../models/enum/PaymentResult'

class PaymentClient {
  /**
   * Executes a payment through the integrated bank terminal.
   * @param price The value of the transaction in cents.
   */
  public doPayment(price: number): Promise<PaymentResult> {
    return Promise.resolve(PaymentResult.Success)
  }
}

export default PaymentClient
