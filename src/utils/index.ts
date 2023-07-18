export const checkImageURL = (url: any) => {
  if (!url) {
    return false;
  } else {
    const pattern = new RegExp(
      '^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$',
      'i',
    );
    return pattern.test(url);
  }
};
