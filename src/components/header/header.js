import * as header from './headerStyle'

function Header() {
  return (
      <header.HeaderDiv>
          <a><i className="far fa-paper-plane"></i><b>W</b>eWhy</a>
          <div>
              <ul>
                   <li><i>A</i>bout</li>
                  <li><i>I</i>ntroduce</li>
                  <li><a href="https://github.com/jidole02/study-react/tree/master/react-project/src"><i>S</i>ource</a></li>
              </ul>
          </div>
          <div>
          <a href="https://github.com/jidole02"><i className="fab fa-github"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100012148756964"><i className="fab fa-facebook"></i></a>
          
          </div>
      </header.HeaderDiv>
  );
}

export default Header;