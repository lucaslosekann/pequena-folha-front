import { useEffect, useState } from "react";
import Header from "../components/Header";
import AdminAgendaTab from "../components/AdminAgendaTab";
import AdminPartnersTab from "../components/AdminPartnersTab";
import AdminRegistrationsTab from "../components/AdminRegistrationsTab";
import { cn } from "../lib/utils";
import AdminFormsTab from "../components/AdminFormsTab";

const TABS: {
    [key: string]: { label: string; component: React.ReactNode };
} = {
    agenda: {
        label: "Agenda",
        component: <AdminAgendaTab />,
    },
    partners: {
        label: "Parceiros",
        component: <AdminPartnersTab />,
    },
    registrations: {
        label: "Cadastros",
        component: <AdminRegistrationsTab />,
    },
    forms: {
        label: "Formulários",
        component: <AdminFormsTab />,
    },
};

export default function Admin() {
    const [selectedTab, setSelectedTab] = useState(new URLSearchParams(window.location.search).get("tab") || Object.keys(TABS)[0]);

    useEffect(() => {
        const q = new URLSearchParams(window.location.search);
        q.set("tab", selectedTab);
        window.history.replaceState(null, "", `${window.location.pathname}?${q.toString()}`);
    }, [selectedTab]);

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <div className="container mx-auto mt-5 flex flex-1 flex-col gap-2">
                <div className="w-fit rounded-lg bg-[#533F2C] text-sm font-light text-white">
                    {Object.entries(TABS).map(([key, tab]) => (
                        <button
                            key={key}
                            onClick={() => setSelectedTab(key)}
                            className={cn(`rounded-lg px-8 py-2`, selectedTab === key && "bg-own-brown")}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                {TABS[selectedTab].component}
            </div>
        </div>
    );
}
