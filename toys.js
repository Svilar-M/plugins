doSomething = (product) => {
  console.log('This is console.log from function doSomthing()');
  console.log(product);
  return 'yooopy';
}
export default { doSomething };

doSomething(null);
