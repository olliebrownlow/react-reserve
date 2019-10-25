## MERN Stack shopping app

- react 16.8.6
- next 9.1.1
- MongoDB Atlas
- Stripe for checking out
- Cloudinary image platform
- [Heroku deployment](https://olliebrownlow-react-reserve.herokuapp.com/)

## Getting started

Clone the repo, navigate to the root directory and run `npm install` to install the dependencies.

## To start the server

Run `npm run dev`. The server will start on localhost 3000 by default.

## Deployment on Heroku

To interact with the app online, head [here](https://olliebrownlow-react-reserve.herokuapp.com/).

To checkout a cart, use 4242 4242 4242 4242 for the card number.

## Screenshots and features

- Signup page:

  ![screenshot1](./static/screenshots/signup.PNG)

<br/>

- Login page:

  ![screenshot2](./static/screenshots/login.PNG)

<br/>

- Home page:

  ![screenshot3](./static/screenshots/homepage.PNG)

<br/>

- Products are paginated:

  ![screenshot4](./static/screenshots/products-paginated.PNG)

<br/>

- Products can be individually viewed and added to your cart. Only root and admin users can delete products:

  ![screenshot5](./static/screenshots/root-admin-delete-products.PNG)

<br/>

- Cart items appear with images and a remove button:

  ![screenshot6](./static/screenshots/cart-items.PNG)

<br/>

- Checkout managed with Stripe in test mode:

  ![screenshot7](./static/screenshots/stripe-checkout.PNG)

<br/>

- Cart is emptied after checkout:

  ![screenshot8](./static/screenshots/post-checkout-cart.PNG)

<br/>

- Order history shown in user's account page:

  ![screenshot9](./static/screenshots/user-account-order-history.PNG)

<br/>

- Root and admin users can create new products:

  ![screenshot10](./static/screenshots/root-admin-create-new-products.PNG)

<br/>

- Root users can change user permissions:

  ![screenshot11](./static/screenshots/root-user-permissions.PNG)
