import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default async function isUserSignIn(router: AppRouterInstance, token: string | null) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/users/is_signed_in`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    const data = await res.json();

    console.log(data);

    if (!data.res) {
      router.push("/login");
    } 
  } catch (error) {
    console.error(error);
    router.push("/login");
  }
}
