import Link from "next/link";
import { FaHome, FaUser, FaFire } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

const links = [
  { name: "Home", href: "", icon: <FaHome /> },
  { name: "Trending", href: "trending", icon: <FaFire /> },
  {
    name: "Notifications",
    href: "notifications",
    icon: <IoMdNotifications />,
  },
  { name: "Messages", href: "messages", icon: <BiSolidMessageSquareDetail /> },
  { name: "Profile", href: "profile", icon: <FaUser /> },
] as const;

export default function Header() {
  return (
    <header className="py-1 border-b border-neutral-700 shadow-xl fixed w-full top-0 bg-neutral-800 z-50">
      <div className="w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link className="text-lg font-medium" href="/">
            SkyLook
          </Link>
          <div>
            <form action="">
              <input
                className="py-1 px-4 bg-neutral-700 rounded-lg border border-neutral-600"
                type="text"
                name="search"
                placeholder="Search..."
              />
            </form>
          </div>
        </div>
        <nav>
          <ul className="flex gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={`/${link.href.toLocaleLowerCase()}`}>
                  <div className="hover:bg-neutral-700 rounded-lg py-1 px-3 flex flex-col items-center">
                    <div className="text-xl">{link.icon}</div>
                    <div>{link.name}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
