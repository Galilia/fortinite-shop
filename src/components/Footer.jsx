function Footer() {

  return (
    <footer className="page-footer red lighten-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="https://galilia.github.io/fortinite-shop/">Repo</a>
        </div>
      </div>
    </footer>
  )
}

export { Footer };