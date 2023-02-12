// import { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { NavLink } from "react-router-dom";
// // import navTitle from "../../../Images/img3.png";
// import "./NavigationBar.css";
// import { FaMoon, FaRegMoon } from "react-icons/fa";
// import { useContext } from "react";

// import Button from "react-bootstrap/Button";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";

// import { AuthContext } from "../../contexts/AuthProvider";
// import { Tooltip } from "react-tooltip";

// const NavigationBar = () => {
//   const [dark, setDark] = useState(true);
//   const { user, logOut } = useContext(AuthContext);

//   const handleLogOut = () => {
//     logOut()
//       .then((result) => {})
//       .catch((error) => {
//       });
//   };

//   return (
//     <Navbar
//       collapseOnSelect
//       expand="lg"
//       className={
//         dark
//           ? "bg-dark text-light py-0 mb-4"
//           : "bg-dark bg-opacity-25 text-dark py-0 mb-4"
//       }
//     >
//       <Container className={dark ? "text-light" : "text-dark"}>
//         <Navbar.Brand href="#home">
//           {/* <img className="nav-img" src={navTitle} alt="nav-title" /> */}
//           <span
//             className={
//               dark
//                 ? "text-light nav-title mx-2 fw-bold"
//                 : "text-dark nav-title mx-2 fw-bold"
//             }
//           >
//             Tech Learner
//           </span>
//         </Navbar.Brand>
//         <Navbar.Toggle
//           className={dark ? "bg-light bg-opacity-10" : "bg-dark bg-opacity-25"}
//           aria-controls="responsive-navbar-nav"
//         />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="nav ms-auto">
//             <ul className="d-lg-flex">
//               <NavLink
//                 className={({ isActive }) => (isActive ? "active" : "inactive")}
//                 to="/home"
//               >
//                 <li>Home</li>
//               </NavLink>
//               <NavLink
//                 className={({ isActive }) => (isActive ? "active" : "inactive")}
//                 to="/courses"
//               >
//                 <li>Courses</li>
//               </NavLink>
//               <NavLink
//                 className={({ isActive }) => (isActive ? "active" : "inactive")}
//                 to="blogs"
//               >
//                 <li>Blogs</li>
//               </NavLink>
//               <NavLink
//                 className={({ isActive }) => (isActive ? "active" : "inactive")}
//                 to="frequent_ques"
//               >
//                 <li>FAQ</li>
//               </NavLink>
//               {user?.uid ? (
//                 <>
//                   <Button
//                     onClick={handleLogOut}
//                     style={{
//                       color: "white",
//                       backgroundColor: "#343338",
//                       textDecoration: "none",
//                     }}
//                     variant="link"
//                   >
//                     Sign Out
//                   </Button>
//                   <OverlayTrigger
//                     key={"bottom"}
//                     placement={"bottom"}
//                     overlay={
//                       <Tooltip id={`tooltip-${"bottom"}`}>
//                         {user.displayName}
//                       </Tooltip>
//                     }
//                   >
//                     <span title={user.displayName}>
//                       <img
//                         src={user.photoURL}
//                         style={{ width: "40px", borderRadius: "50%" }}
//                         alt=""
//                       />
//                     </span>
//                   </OverlayTrigger>
//                 </>
//               ) : (
//                 <>
//                   <NavLink
//                     className={({ isActive }) =>
//                       isActive ? "active" : "inactive"
//                     }
//                     to="login"
//                   >
//                     <li>Sign In</li>
//                   </NavLink>
//                   <NavLink
//                     className={({ isActive }) =>
//                       isActive ? "active" : "inactive"
//                     }
//                     to="registration"
//                   >
//                     <li>Sign Up</li>
//                   </NavLink>
//                 </>
//               )}
//             </ul>
//           </Nav>
//           <span
//             className="dark-mood"
//             onClick={() => {
//               setDark(!dark);
//             }}
//           >
//             {dark ? <FaRegMoon /> : <FaMoon />}
//           </span>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavigationBar;

import React from "react";

const NavigationBar = () => {
  return (
    <div>
      <header aria-label="Site Header" class="border-b border-gray-100">
        <div class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
          
          <div class="flex flex-1 items-center justify-end">
            <nav
              aria-label="Site Nav"
              class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
            >
              <a
                href="/about"
                class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                About
              </a>

              <a
                href="/news"
                class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                News
              </a>

              <a
                href="/products"
                class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Products
              </a>

              <a
                href="/contact"
                class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
              >
                Contact
              </a>
            </nav>

            <div class="ml-8 flex items-center">
              <div class="flex items-center divide-x divide-gray-100 border-x border-gray-100">
                <span>
                  <a
                    href="/cart"
                    class="block border-b-4 border-transparent p-6 hover:border-red-700"
                  >
                    <svg
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>

                    <span class="sr-only">Cart</span>
                  </a>
                </span>

                <span>
                  <a
                    href="/account"
                    class="block border-b-4 border-transparent p-6 hover:border-red-700"
                  >
                    <svg
                      class="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span class="sr-only"> Account </span>
                  </a>
                </span>

                <span class="hidden sm:block">
                  <a
                    href="/search"
                    class="block border-b-4 border-transparent p-6 hover:border-red-700"
                  >
                    <svg
                      class="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>

                  
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavigationBar;
