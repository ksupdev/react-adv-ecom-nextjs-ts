import { Button } from "@/components/ui/button";
import { sarabun, kanit } from "../fonts";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="mx-auto max-w-2xl pt-16 pb-10">
            <h2 className="text-3xl text-blue-700">Contact us</h2>
            <p>สวัสดี contact Page</p>
            <p className="font-kanit">สวัสดี kanit contact Page</p>
            <p className={sarabun.className}>สวัสดี sarabun contact Page</p>
            <p className={kanit.className}>สวัสดี kanit contact Page</p>
            <hr />
            <div className="m-10">
                <Button variant="outline" asChild >
                    <Link href="/">Go to Home Page</Link>
                </Button>
            </div>

        </div>
    )
}