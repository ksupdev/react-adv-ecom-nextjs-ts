import { Button } from "@/components/ui/button";
import { sarabun, kanit } from "../fonts";

export default function ContactPage() {
    return (
        <main>
            <h2 className="font-k2d text-3xl text-blue-300">Contact us</h2>
            <p>สวัสดี contact Page</p>
            <p className="font-kanit">สวัสดี kanit contact Page</p>
            <p className={sarabun.className}>สวัสดี sarabun contact Page</p>
            <p className={kanit.className}>สวัสดี kanit contact Page</p>
            <Button className="my-3" >Go to Homepage </Button>
        </main>
    )
}