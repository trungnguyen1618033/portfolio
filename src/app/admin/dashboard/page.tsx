'use client';

import { useState, useEffect } from 'react';
import { DataManager } from '../../../lib/data-manager';

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [recentActivity, setRecentActivity] = useState<any[]>([]);

  useEffect(() => {
    // Load statistics
    const statsData = DataManager.getStats();
    setStats(statsData);

    // Get recent activity (last 5 items from each category)
    const recentBlog = DataManager.getDataByType('blog')?.slice(-2) || [];
    const recentDiary = DataManager.getDataByType('diary')?.slice(-2) || [];
    
    const activity = [
      ...recentBlog.map((item: any) => ({ ...item, type: 'blog', icon: '📝' })),
      ...recentDiary.map((item: any) => ({ ...item, type: 'diary', icon: '📔' }))
    ].sort((a: any, b: any) => new Date(b.publishDate || b.date).getTime() - new Date(a.publishDate || a.date).getTime());

    setRecentActivity(activity);
  }, []);

  const handleExportData = () => {
    const data = DataManager.exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const success = DataManager.importData(content);
        if (success) {
          alert('Import thành công!');
          window.location.reload();
        } else {
          alert('Lỗi import dữ liệu!');
        }
      } catch (error) {
        alert('File không hợp lệ!');
      }
    };
    reader.readAsText(file);
  };

  if (!stats) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <svg className="animate-spin h-8 w-8 text-navy-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="mt-2 text-gray-600">Đang tải...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Dashboard
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Tổng quan về portfolio của bạn
          </p>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4 space-x-3">
          <button
            onClick={handleExportData}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500"
          >
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Export Data
          </button>
          <label className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-navy-600 hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 cursor-pointer">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            Import Data
            <input
              type="file"
              accept=".json"
              onChange={handleImportData}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Bằng cấp"
          value={stats.education}
          icon="🎓"
          color="bg-blue-500"
          href="/admin/education"
        />
        <StatCard
          title="Sở thích"
          value={stats.interests}
          icon="❤️"
          color="bg-green-500"
          href="/admin/interests"
        />
        <StatCard
          title="Nhật ký"
          value={stats.diary}
          icon="📔"
          color="bg-purple-500"
          href="/admin/diary"
        />
        <StatCard
          title="Blog Posts"
          value={stats.blog}
          icon="📝"
          color="bg-yellow-500"
          href="/admin/blog"
        />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Bài đã xuất bản
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {stats.totalPosts}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-100 rounded-md flex items-center justify-center">
                  <span className="text-yellow-600 text-sm">⭐</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Bài nổi bật
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {stats.featuredPosts}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-red-100 rounded-md flex items-center justify-center">
                  <span className="text-red-600 text-sm">🔒</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Nhật ký riêng tư
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {stats.privateDiary}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Hoạt động gần đây
          </h3>
          {recentActivity.length > 0 ? (
            <div className="space-y-3">
              {recentActivity.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.type === 'blog' ? 'Blog post' : 'Nhật ký'} • {
                          new Date(item.publishDate || item.date).toLocaleDateString('vi-VN')
                        }
                      </p>
                    </div>
                  </div>
                  <a
                    href={`/admin/${item.type}`}
                    className="text-navy-600 hover:text-navy-800 text-sm font-medium"
                  >
                    Xem
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">Chưa có hoạt động nào.</p>
          )}
        </div>
      </div>

      {/* Last Updated */}
      <div className="text-center text-sm text-gray-500">
        Cập nhật lần cuối: {new Date(stats.lastUpdated).toLocaleString('vi-VN')}
      </div>
    </div>
  );
}

// Stat Card Component
interface StatCardProps {
  title: string;
  value: number;
  icon: string;
  color: string;
  href: string;
}

function StatCard({ title, value, icon, color, href }: StatCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className={`w-8 h-8 ${color} rounded-md flex items-center justify-center`}>
              <span className="text-white text-lg">{icon}</span>
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
              <dd className="text-lg font-medium text-gray-900">
                {value}
              </dd>
            </dl>
          </div>
        </div>
        <div className="mt-3">
          <a
            href={href}
            className="text-sm font-medium text-navy-600 hover:text-navy-800"
          >
            Quản lý →
          </a>
        </div>
      </div>
    </div>
  );
} 