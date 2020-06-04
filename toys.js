function getResultItem(product) {
  console.log('--> getResultItem()');

  let resultItem = {};

  if (product) {
    let tags = title.split(' ').slice(0, 2);

    resultItem = {
      title: product.title,
      tags: tags,
      imageUrl: product.imageUrl
    };
  }
  return t;
};

export { getResultItem };
