export const getPaginationParams = (total) =>
  total
    ? {
        total,
        showTotal: (total) => `Total count: ${total}`,
      }
    : {};
