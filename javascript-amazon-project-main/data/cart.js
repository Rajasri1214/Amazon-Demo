//used to push product id and quantity into the cart variable 
//using export u can access this cart var outside the file
export const cart = [{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
},{
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
}];

//func to get product id and add to the cart var
 export function addToCart(productId) {
    let matchingItem;
  
    cart.forEach((cartItem) => {
      if(productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    if(matchingItem) {
      matchingItem.quantity +=1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1
      });
    }
}