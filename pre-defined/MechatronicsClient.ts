class MechatronicsClient {
  /**
   * Resets the transaction interface and will disable current selection.
   */
  public resetTransaction(): Promise<void> {
    return Promise.resolve()
  }

  /**
   * Dispenses the product from the specified slot number.
   * @param slotNr The slot number to dispense from.
   */
  public dispense(slotNr: number): Promise<void> {
    return Promise.resolve()
  }
}

export default MechatronicsClient
