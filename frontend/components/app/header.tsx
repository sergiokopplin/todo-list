import ProfileMenu from "./profile-menu";
import { authOptions } from "@lib/auth";
import { IconChecklist } from "@tabler/icons-react";
import { getServerSession } from "next-auth";
import Link from "next/link";

async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="flex w-full items-center justify-between bg-blue-600 px-4 py-2 dark:bg-neutral-800">
      <Link href="/" className="flex items-center gap-x-4 text-white">
        <IconChecklist className="h-6 w-6" />
        <h1 className="select-none font-semibold">To Do</h1>
      </Link>
      <ProfileMenu {...session!.user} />
    </header>
  );
}

export default Header;
