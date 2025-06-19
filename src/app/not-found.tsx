import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <svg
        className="h-28 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 514 258"
        fill="none"
      >
        <path
          d="M353.28 86.187h37.547v10.24l6.724 -0.102a102 102 0 0 1 6.929 0.102c2.963 2.963 1.932 6.765 1.939 10.704l-0.02 3.584 0.02 3.543c-0.014 5.325 -0.246 9.503 -1.939 14.589l1.707 1.707a157 157 0 0 1 0.171 8.752l-0.02 5.352 -0.041 5.632 -0.027 5.652 -0.082 13.872H387.415l-1.707 -37.547 -29.013 -1.707v39.253h-17.067l-1.707 -37.547 -3.413 -1.707v-5.12l3.413 -1.707a186 186 0 0 0 1.065 -13.756l0.198 -3.925q0.239 -4.806 0.444 -9.619h13.653zm3.413 17.067v8.533h30.72v-8.533zm87.04 -17.067h51.2v17.067h-47.787v8.533h35.84v13.653l4.055 0.751c4.478 0.956 4.478 0.956 7.892 2.662v29.013h-11.947v11.947H428.373c0 -15.36 0 -15.36 1.707 -17.067a232 232 0 0 1 10.622 -0.171l6.519 0.02 6.868 0.041 6.881 0.027q8.451 0.027 16.903 0.082l-1.707 -20.48 -37.547 -1.707v-5.12l3.413 -1.707c1.12 -4.314 1.12 -4.314 1.707 -8.533h-15.36v-17.067h15.36z"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <h1 className="mt-8 mb-6 text-8xl font-medium">404</h1>

      <Button variant="link" asChild>
        <Link href="/">
          Go to Home
          <ArrowRightIcon />
        </Link>
      </Button>
    </div>
  );
}
