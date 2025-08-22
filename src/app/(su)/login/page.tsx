import { LoginForm } from "@/components/login-form";
import { login } from "../actions";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-red-300/20">
      <a
        href="/"
        className="absolute bottom-4 hover:underline text-slate-700 font-semibold"
      >
        <div className="w-full max-w-sm"></div>
        Go back to Home Page
      </a>
      <LoginForm
        action={async (formdata) => {
          "use server";
          console.log(formdata);
          const username = formdata.get("username") as string;
          const password = formdata.get("password") as string;
          console.log(username, password);
          await login(username, password);
        }}
      />
    </div>
    // </div>
  );
}
