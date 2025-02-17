

const Footer = () => {



  const year = new Date().getFullYear();

  return (
    <footer id="footer">
      <p>Copyright &copy; {year}</p>
    </footer>
  );
};

export default Footer;