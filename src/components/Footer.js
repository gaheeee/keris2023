
export default function Footer() {
  return (
    <footer>
          <div className="img-footer">
            <img
              src={require("../assets/footer-logo.png")}
              alt="Little Lemon logo">
            </img>
          </div>
          <div className="text-footer">
            <p >이용약관</p>
            <p>(우) 41061 대구광역시 동구 동내로 64 TEL 053-714-0114 / FAX 053-714-0192</p>
            <p>Copyright © 2022 KERIS. ALL Rights Reserved.</p>
          </div>
      
      { /* 
      <menu>
        <li className="img-footer">
          <img
            src={require("../assets/footer-logo.png")}
            alt="Little Lemon logo"
          ></img>
        </li>
        <li className="contact">
          <p >이용약관</p>
          <p>(우) 41061 대구광역시 동구 동내로 64 TEL 053-714-0114 / FAX 053-714-0192</p>
          <p>Copyright © 2022 KERIS. ALL Rights Reserved.</p>
        </li>
      </menu>
      */ }

      
    </footer>
  );
}
