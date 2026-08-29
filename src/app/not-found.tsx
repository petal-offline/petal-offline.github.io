import type { Metadata } from "next";
import { Error404 } from "@/components/ui/pixeleted-404-not-found";

export const metadata: Metadata = {
    title: "Page Not Found | Petal Chan",
    description: "This Petal Chan page could not be found.",
};

export default function NotFound() {
    return <Error404 />;
}
