import App from "next/app";
import Layout from "../components/_App/Layout";

class MyApp extends App {
  static async appGetInitialProps({ component, ctx }) {
    let pageProps = {};

    if (component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps: pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
