export const getBlobFromUri = async (uri) => {
  const response = await fetch(uri);

  return await response.blob();
};
