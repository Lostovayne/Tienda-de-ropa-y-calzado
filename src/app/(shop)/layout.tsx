import { Footer, Sidebar, TopMenu } from "@/components";

export const metadata = {
    title: "Shop | Tesla",
    description: "Tienda de ropa online",
};
export default function ShopLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen max-w-[1600px] mx-auto ">
            <TopMenu />
            <Sidebar />
            <div className="px-4 sm:px-10"> {children}</div>
            <Footer />
        </main>
    );
}
