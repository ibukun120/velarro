"use client";

import { useState, useEffect, ReactNode } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { AccountSettingsTab, AddressesTab, MessagesTab, OrdersTab, ReturnsTab } from "../../(site)/account/_components/tab-views";

const tabs = ["Orders", "Returns", "Messages", "Addresses", "Account Settings"];

interface AccountPageProps {
    isAuthenticated?: boolean; // optional prop for mock/testing
}

const TAB_COMPONENTS: Record<string, ReactNode> = {
    Orders: <OrdersTab />,
    Returns: <ReturnsTab />,
    Messages: <MessagesTab />,
    Addresses: <AddressesTab />,
    "Account Settings": <AccountSettingsTab />,
};


export default function AccountPageClient({ isAuthenticated = true }: AccountPageProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialTab = searchParams.get("tab") || "Orders";

    const [activeTab, setActiveTab] = useState(initialTab);

    // redirect if user not authenticated
    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/account/login");
        }
    }, [isAuthenticated, router]);

    // update active tab if URL param changes
    useEffect(() => {
        setActiveTab(initialTab);
    }, [initialTab]);

    if (!isAuthenticated) return null; // prevent flicker

    return (
        <div className="min-h-screen flex flex-col items-center text-neutral-1 bg-[#333333]/90 p-4 py-20">
            <div className="w-full max-w-5xl flex flex-col items-center">
                {/* Tabs */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-12">{activeTab}</h3>
                <div className="flex flex-wrap justify-center w-full">
                    {/* Tabs */}
                    <div className="flex overflow-x-auto whitespace-nowrap justify-start w-full px-2 md:justify-center scrollbar-hide">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative px-4 py-2 uppercase tracking-widest text-md md:text-xl inline-block ${activeTab === tab
                                    ? "font-bold text-neutral-1"
                                    : "font-normal text-[#33333]"
                                    }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#C59949]" />
                                )}
                            </button>
                        ))}
                    </div>

                </div>

                {/* Tab content */}
                <div className="mt-8 w-full bg-white p-6 rounded shadow text-black">
                    {TAB_COMPONENTS[activeTab]}
                </div>
            </div>
        </div>
    );
}