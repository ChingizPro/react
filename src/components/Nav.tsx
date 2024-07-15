interface Props {
  count: number;
}

const Nav = ({ count }: Props) => {
  return <div>Navbar. Products count: {count}</div>;
};

export default Nav;
