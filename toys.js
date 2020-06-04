const getResultItem = (product) => {
  console.log('--> getResultItem()');

  let resultItem = {};

  if (product) {
    let tags = product.title.split(' ').slice(0, 2);

    resultItem = {
      title: product.title,
      tags: tags,
      imageUrl: product.imageUrl
    };
  }
  return resultItem;
};

export { getResultItem };
