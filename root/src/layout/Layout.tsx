import { FC } from "react";
import SEO from "layout/SEO";
import Footer from "layout/Footer";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <SEO />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
