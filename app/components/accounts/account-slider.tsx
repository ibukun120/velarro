import { LogOut, X } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: { firstName: string, lastName: string; };
  onTabSelect?: (tab: string) => void; // required
  isAuthenticated: boolean;
};

export default function AccountSlider({
  isOpen,
  onClose,
  user,
  isAuthenticated,
  onTabSelect, // ← add this
}: Props) {
  const router = useRouter();
  const links = ["Orders", "Returns", "Messages", "Addresses", "Account Settings"];

  const handleClick = (tab: string) => {
    onClose(); // close slider

    if (!isAuthenticated) {
      router.push("/account/login");
      return;
    }

    // Call the optional callback if provided
    onTabSelect?.(tab);

    router.push(`/account?tab=${tab}`);
  };

  const handleLogout = () => {
    onClose();
    // TODO: clear auth state / token here
    // authStore.logout() OR remove cookie / localStorage
    router.push("/account/login");
  };


  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Slider */}
      <aside
        className={`fixed top-24 right-0 h-full w-full md:w-[45%] lg:w-[25%] bg-white z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button onClick={onClose} className="absolute top-6 right-6 hover:opacity-70">
          <X />
        </button>
        <div className="h-full flex flex-col items-center justify-start pt-20 text-center gap-6 overflow-y-auto">
          {/* User Info */}
          <div>
            <p className="text-md uppercase tracking-widest text-[#333333]">Hello</p>
            <h2 className="text-3xl font-medium mt-1 text-[#333333]">{user.firstName} {user.lastName}</h2>
          </div>

          {/* Nav Links */}
          {/* Nav Links */}
          <nav className="w-full flex flex-col mt-8">
            {links.map((label) => (
              <button
                key={label}
                onClick={() => handleClick(label)}
                className="
                 w-full
                 px-10
                 py-3        
                 text-2xl
                 font-normal
                 text-[#333333]
                 text-center
                 transition-all
                 duration-300
                 hover:bg-[#C59949]/60
                "
              >
                {label}
              </button>
            ))}
          </nav>


          {/* Logout directly below nav links */}
          <button
            onClick={handleLogout}
            className="
             w-full
             h-16
             flex
             items-center
             justify-center
             gap-3
             text-lg
             font-medium
             text-[#333333]
             mt-10
             "
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}