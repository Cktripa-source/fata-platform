'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Calendar,
    Newspaper,
    Users,
    MessageSquare,
    DollarSign,
    TrendingUp
} from 'lucide-react';

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        events: 0,
        news: 0,
        leaders: 0,
        messages: 0,
        donations: 0,
        totalAmount: 0,
    });

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch dashboard stats
        const fetchStats = async () => {
            try {
                const [
                    eventsRes,
                    newsRes,
                    leadersRes,
                    messagesRes,
                    donationsRes
                ] = await Promise.all([
                    fetch('http://localhost:5000/api/events').then(res => res.json()),
                    fetch('http://localhost:5000/api/news').then(res => res.json()),
                    fetch('http://localhost:5000/api/leadership').then(res => res.json()),
                    fetch('http://localhost:5000/api/contact').then(res => res.json()),
                    fetch('http://localhost:5000/api/donations/stats/summary').then(res => res.json())
                ]);

                setStats({
                    events: eventsRes.length,
                    news: newsRes.length,
                    leaders: leadersRes.length,
                    messages: messagesRes.length,
                    donations: donationsRes.monthlyDonations?.reduce((acc, curr) => acc + curr.count, 0) || 0,
                    totalAmount: donationsRes.totalAmount || 0,
                });
            } catch (error) {
                console.error('Error fetching dashboard stats:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStats();
    }, []);

    const statCards = [
        { title: 'Total Events', value: stats.events, icon: Calendar, color: 'text-blue-600' },
        { title: 'News Articles', value: stats.news, icon: Newspaper, color: 'text-green-600' },
        { title: 'Leadership Members', value: stats.leaders, icon: Users, color: 'text-purple-600' },
        { title: 'Unread Messages', value: stats.messages, icon: MessageSquare, color: 'text-yellow-600' },
        { title: 'Total Donations', value: stats.donations, icon: DollarSign, color: 'text-red-600' },
        {
            title: 'Total Amount',
            value: `$${stats.totalAmount.toLocaleString()}`,
            icon: TrendingUp,
            color: 'text-emerald-600'
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-soil-dark">Dashboard Overview</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {statCards.map((stat, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className={`h-5 w-5 ${stat.color}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {isLoading ? (
                                    <div className="h-8 w-24 animate-pulse bg-gray-200 rounded" />
                                ) : (
                                    stat.value
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* Add recent activity list here */}
                    </CardContent>
                </Card>

                {/* Donation Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle>Donation Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* Add donation chart here */}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
