export default function Header() {
  return (
    <header>
      <h2 className="logo">Logo</h2>
      <nav className="navigation">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Recipes</a>
        <a href="#">Contact</a>
        <button className="btnLogin-popup">Login</button>
        {/* <button className="btnLogin-popup">Register</button> */}
      </nav>
    </header>
  );
}
