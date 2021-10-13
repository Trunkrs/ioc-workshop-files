class DataStorage<TEntity> {
  /**
   * Retrieves the entity from the underlying store.
   * @param selector The selector for the entity.
   */
  public getEntity(selector: Partial<TEntity>): Promise<TEntity> {
    return Promise.resolve(undefined as unknown as TEntity)
  }

  /**
   * Sets the entity value to the specified value.
   * @param selector The selector for the entity.
   * @param entity The entity value.
   */
  public setEntity(selector: Partial<TEntity>, entity: TEntity): Promise<void> {
    return Promise.resolve()
  }
}

export default DataStorage
