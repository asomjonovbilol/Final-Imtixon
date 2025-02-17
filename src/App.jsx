import "./styles/styles.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LayoutPage,
  HomePage,
  ProductsPage,
  ErrorPage,
  ContactPage,
  AboutPage,
  SignUpPage,
  LogInPage,
  DetailsPage,
  WishlistPage,
  CartPage,
  CheckoutPage,
  AccountPage,
  ReviewsPage,
  UnderConstruction,
} from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route
            path="products"
            element={
              <ProductsPage url="https://dummyjson.com/products?limit=0" />
            }
          />
          <Route path="/search/:q" element={<ProductsPage url="" />} />
          <Route path="products/:id" element={<DetailsPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="account/address" element={<UnderConstruction />} />
          <Route path="account/payment" element={<UnderConstruction />} />
          <Route path="account/orders" element={<UnderConstruction />} />
          <Route path="account/returns" element={<UnderConstruction />} />
          <Route path="account/cancellations" element={<UnderConstruction />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
