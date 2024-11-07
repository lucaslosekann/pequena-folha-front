import { useState } from 'react'
import Header from '../components/Header'
import clsx from 'clsx'
import AdminPreviousEventsTab from '../components/AdminPreviousEventsTab'
import AdminAgendaTab from '../components/AdminAgendaTab'
import AdminPartnersTab from '../components/AdminPartnersTab'
import AdminRegistrationsTab from '../components/AdminRegistrationsTab'

const TABS: {
    [key: string]: { label: string, component: React.ReactNode },
} = {
    'prev_events': {
        label: 'Eventos Anteriores',
        component: <AdminPreviousEventsTab />
    },
    'agenda': {
        label: 'Agenda',
        component: <AdminAgendaTab />
    },
    'partners': {
        label: 'Parceiros',
        component: <AdminPartnersTab />
    },
    'registrations': {
        label: 'Cadastros',
        component: <AdminRegistrationsTab />
    },
}

export default function Admin() {
    const [selectedTab, setSelectedTab] = useState(Object.keys(TABS)[0])
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className='flex-1 container mx-auto mt-5 flex flex-col gap-2'>
                <div className='bg-[#533F2C] rounded-lg text-white w-fit text-sm font-light'>
                    {
                        Object.entries(TABS).map(([key, tab]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedTab(key)}
                                className={clsx(`px-8 py-2 rounded-lg`, selectedTab === key && 'bg-own-brown')}
                            >
                                {tab.label}
                            </button>
                        ))
                    }
                </div>
                {TABS[selectedTab].component}
            </div>
        </div>
    )
}
