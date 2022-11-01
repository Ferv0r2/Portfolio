import { FC } from "react";
import SEO from "layout/SEO";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <SEO />
      {children}
    </div>
  );
};

export default Layout;
