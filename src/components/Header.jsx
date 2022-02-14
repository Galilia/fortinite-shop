function Header() {

  return (
    <nav className="red darken-1">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">IMDB movies</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="!#">Repo</a></li>
        </ul>
      </div>
    </nav>
  )
}

export { Header };