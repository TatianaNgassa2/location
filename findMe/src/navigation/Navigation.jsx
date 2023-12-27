import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isHover, setIsHover] = useState(false);
  return (
    <aside className="flex flex-col   w-60 h-screen !bg-white pt-16 px-12">
      <ul>
        <li
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="mb-3"
        >
          <Link
            to="/profile"
            style={{
              color:
                // eslint-disable-next-line no-restricted-globals
                location.pathname === "/profile"
                  ? "green"
                  : isHover
                  ? "green"
                  : "black",
            }}
          >
            Mon profil
          </Link>
        </li>

        <li
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Link
            to="/activite"
            style={{
              color:
                // eslint-disable-next-line no-restricted-globals
                location.pathname === "/activite"
                  ? "green"
                  : isHover
                  ? "green"
                  : "black",
            }}
          >
            Mon activite
          </Link>
        </li>
      </ul>
    </aside>
  );
}
