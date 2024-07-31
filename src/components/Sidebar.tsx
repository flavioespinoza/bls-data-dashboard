import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  LayoutDashboard,
  Newspaper,
  Folders,
  CreditCard,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Command className="bg-secondary rounded-none">
      <CommandList>
        <CommandGroup heading="">
          <div className="flex">
            <LayoutDashboard className="mr-2 mt-1 ml-1 h-4 w-4" />
            <Link href='/' className="mt-0">Dashboard</Link>
          </div>
          <div className="flex">
            <Newspaper className="mr-2 mt-1 ml-1 h-4 w-4" />
            <Link href='/posts'>Posts</Link>
          </div>
          <div className="flex">
            <Folders className="mr-2 mt-1 ml-1 h-4 w-4" />
            <Link href='#'>Categories</Link>
          </div>
        </CommandGroup>
        <CommandSeparator />
        
      </CommandList>
    </Command>
  );
};

export default Sidebar;
