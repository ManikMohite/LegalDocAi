// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { useSession, signOut } from "next-auth/react";
// import jwt from "jsonwebtoken";

// export default function Navbar() {
//   const { data: nextAuthSession } = useSession(); // NextAuth session
//   const [jwtSession, setJwtSession] = useState(null); // manual login session
//   const [open, setOpen] = useState(false);

//   // Read JWT token (manual login)
//  useEffect(() => {
//   const token = document.cookie
//     .split("; ")
//     .find((x) => x.startsWith("token="))
//     ?.split("=")[1];

//   if (token) {
//     const decoded = jwt.decode(token);
//     Promise.resolve().then(() => {
//       setJwtSession(decoded);
//     });
//   }
// }, []);


//   // Final session: NextAuth > JWT > null
// const session = nextAuthSession?.user
//   ? {
//       name: nextAuthSession.user.name,
//       email: nextAuthSession.user.email,
//       image: nextAuthSession.user.image,
//       logoutType: "nextAuth",
//     }
//   : jwtSession
//   ? {
//       name: jwtSession.name || jwtSession.email.split("@")[0],
//       email: jwtSession.email,
//       image: null,
//       logoutType: "jwt",
//     }
//   : null;   // <--- FIX


// function handleLogout() {
//   if (session?.logoutType === "nextAuth") {
//     signOut({ callbackUrl: "/" });
//   } else {
//     document.cookie =
//       "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//     window.location.reload();
//   }
// }



//   return (
//     <header className="bg-white px-6 py-3 shadow-sm">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">

//         {/* Logo */}
//         <Link href="/" className="no-underline">
//           <h1 className="text-2xl font-bold text-purple-700">
//             Legal Document Assistant
//           </h1>
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:block">
//           <ul className="flex items-center space-x-6 text-gray-700 font-medium">

//             <li><Link href="/" className="hover:text-purple-700">Home</Link></li>
//             <li><Link href="/dashboard" className="hover:text-purple-700">Features</Link></li>
//             <li><Link href="/general_chat" className="hover:text-purple-700">Contact</Link></li>

//             {/* -------- SESSION LOGIC -------- */}
//             {!session ? (
//               <>
//                 <li>
//                   <Link href="/signup">
//                     <button className="px-6 py-2 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800">
//                       Sign up
//                     </button>
//                   </Link>
//                 </li>

//                 <li>
//                   <Link href="/login">
//                     <button className="px-6 py-2 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800">
//                       Login
//                     </button>
//                   </Link>
//                 </li>
//               </>
//             ) : (
//               <li className="flex items-center gap-3">

//                 {/* If image exists → show it, else show avatar letter */}
//                 {session.image ? (
//                   <img
//                     src={session.image}
//                     alt="profile"
//                     className="w-10 h-10 rounded-full border"
//                   />
//                 ) : (
//                   <div className="w-10 h-10 rounded-full bg-purple-300 flex items-center justify-center font-bold text-purple-800 uppercase">
//                   {session?.name?.[0]?.toUpperCase() || session?.email?.[0]?.toUpperCase() || "U"}

//                   </div>
//                 )}

//                 <span className="font-medium">{session.name}</span>

//                 <button
//                   onClick={handleLogout}
//                   className="px-4 py-2 bg-red-600 text-white rounded"
//                 >
//                   Logout
//                 </button>
//               </li>
//             )}

//           </ul>
//         </nav>

//         {/* Mobile Button */}
//         <button className="md:hidden text-purple-700" onClick={() => setOpen(!open)}>
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <nav className="md:hidden mt-4 bg-white shadow-lg rounded-lg p-4">
//           <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
//             <Link href="/">Home</Link>
//             <Link href="/features">Features</Link>
//             <Link href="/general_chat">Contact</Link>
//             <Link href="/dashboard" className="font-semibold text-purple-700">
//               Dashboard
//             </Link>

//             {!session ? (
//               <Link href="/login">
//                 <button className="w-full px-6 py-2 bg-purple-700 text-white rounded-lg">
//                   Login
//                 </button>
//               </Link>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="w-full px-6 py-2 bg-red-600 text-white rounded-lg"
//               >
//                 Logout
//               </button>
//             )}
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import jwt from "jsonwebtoken";

export default function Navbar() {
  const { data: nextAuthSession } = useSession();
  const [jwtSession, setJwtSession] = useState(null);
  const [open, setOpen] = useState(false);

  // Read JWT token (manual login)
  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((x) => x.startsWith("token="))
      ?.split("=")[1];

    if (token) {
      const decoded = jwt.decode(token);
      Promise.resolve().then(() => {
        setJwtSession(decoded);
      });
    }
  }, []);

  // Final session logic
  const session = nextAuthSession?.user
    ? {
        name: nextAuthSession.user.name,
        email: nextAuthSession.user.email,
        image: nextAuthSession.user.image,
        logoutType: "nextAuth",
      }
    : jwtSession
    ? {
        name: jwtSession.name || jwtSession.email.split("@")[0],
        email: jwtSession.email,
        image: null,
        logoutType: "jwt",
      }
    : null;

  // LOGOUT
  function handleLogout() {
    if (session?.logoutType === "nextAuth") {
      signOut({ callbackUrl: "/" });
    } else {
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location.reload();
    }
  }

  return (
    <header className="bg-white px-6 py-4 shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="no-underline">
          <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-cyan-600">
            LegalDoc AI
          </h1>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8 text-gray-700 font-medium">

            <li>
              <Link href="/" className="hover:text-blue-700 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/features" className="hover:text-blue-700 transition">
                Features
              </Link>
            </li>

            <li>
              <Link href="/Howitwork" className="hover:text-blue-700 transition">
                How it works
              </Link>
            </li>

            {/* SESSION BUTTONS */}
            {!session ? (
              <>
                <li>
                  <Link href="/signup">
                    <button className="px-6 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-700 to-cyan-600 shadow-lg hover:opacity-90 transition">
                      Sign Up
                    </button>
                  </Link>
                </li>

                <li>
                  <Link href="/login">
                    <button className="px-6 py-2 border border-cyan-600 text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition">
                      Login
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <li className="flex items-center gap-3">

                {/* USER IMAGE OR LETTER */}
                {session.image ? (
                  <img
                    src={session.image}
                    alt="profile"
                    className="w-10 h-10 rounded-full border"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-cyan-200 flex items-center justify-center font-bold text-blue-900 uppercase">
                    {session?.name?.[0] || session?.email?.[0] || "U"}
                  </div>
                )}

                <span className="font-medium text-blue-900">{session.name}</span>

                <button
  onClick={handleLogout}
  className="px-5 py-2.5 border border-red-500 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all duration-200"
>
  Logout
</button>

              </li>
            )}
          </ul>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-blue-900" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <nav className="md:hidden mt-4 bg-white shadow-lg rounded-lg p-5 border border-slate-200">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <Link href="/dashboard" className="hover:text-blue-700">Features</Link>
            <Link href="/general_chat" className="hover:text-blue-700">How it's works</Link>

            {!session ? (
              <>
                <Link href="/signup">
                  <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-700 to-cyan-600 text-white rounded-lg">
                    Sign Up
                  </button>
                </Link>

                <Link href="/login">
                  <button className="w-full px-6 py-2 border border-cyan-600 text-cyan-600 rounded-lg">
                    Login
                  </button>
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full px-6 py-2 bg-red-600 text-white rounded-lg"
              >
                Logout
              </button>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}

