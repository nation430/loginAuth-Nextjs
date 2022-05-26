import Meta from "./Meta";
import Nav from "./Nav";

const Layout = (props) => {
  return (
    <>
      <Meta />
      <Nav />
      <div>
        <main className="">{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
