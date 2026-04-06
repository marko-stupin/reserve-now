import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 px-5 hover:bg-accent-950 hover:text-accent-100 transition-colors flex items-center gap-4 font-semibold text-accent-200 w-full">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-accent-600" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
