// import { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

// OLD CLASS COMPONENT VERSION
// export default class Navbar extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => (
//           <ThemeContext.Consumer>
//             {(themeContext) => {
//               const { isAuthenticated, toggleAuth } = authContext;
//               const { isLightTheme, light, dark } = themeContext;
//               const theme = isLightTheme ? light : dark;
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }

// USECONTEXT INSIDE FUNCTIONAL COMPONENTS
export const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? 'Logged in' : 'Logged out'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
