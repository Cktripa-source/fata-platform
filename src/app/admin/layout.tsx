'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    LayoutDashboard,
    Calendar,
    Newspaper,
    Users,
    MessageSquare,
    DollarSign,
    Settings,
    LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const menuItems = [
        { href: '/admin', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
        { href: '/admin/events', label: 'Events', icon: <Calendar className="w-5 h-5" /> },
        { href: '/admin/news', label: 'News', icon: <Newspaper className="w-5 h-5" /> },
        { href: '/admin/leadership', label: 'Leadership', icon: <Users className="w-5 h-5" /> },
        { href: '/admin/messages', label: 'Messages', icon: <MessageSquare className="w-5 h-5" /> },
        { href: '/admin/donations', label: 'Donations', icon: <DollarSign className="w-5 h-5" /> },
        { href: '/admin/settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full bg-soil-dark text-white w-64 transition-all duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-6">FATA Admin</h2>
                    <nav className="space-y-2">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-soil-primary transition-colors"
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Button
                        variant="outline"
                        className="w-full flex items-center gap-2 text-white border-white/20 hover:bg-soil-primary"
                    >
                        <LogOut className="w-5 h-5" />
                        <span>Logout</span>
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'
                }`}>
                <div className="p-8">
                    <ScrollArea className="h-[calc(100vh-4rem)]">
                        {children}
                    </ScrollArea>
                </div>
            </div>
        </div>
    );
}
