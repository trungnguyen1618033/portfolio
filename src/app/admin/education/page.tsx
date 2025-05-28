'use client';

import { useState, useEffect } from 'react';
import { DataManager } from '../../../lib/data-manager';
import { Education } from '../../../lib/types';

export default function EducationManager() {
  const [educations, setEducations] = useState<Education[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState<Education | null>(null);
  const [formData, setFormData] = useState({
    institution: '',
    degree: '',
    year: '',
    description: ''
  });

  useEffect(() => {
    loadEducations();
  }, []);

  const loadEducations = () => {
    const data = DataManager.getDataByType<Education>('education');
    setEducations(data.sort((a, b) => (a.order || 0) - (b.order || 0)));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingItem) {
      // Update existing
      DataManager.updateItem('education', editingItem.id, formData as any);
    } else {
      // Add new
      DataManager.addItem('education', formData as any);
    }

    resetForm();
    loadEducations();
  };

  const handleEdit = (item: Education) => {
    setEditingItem(item);
    setFormData({
      institution: item.institution,
      degree: item.degree,
      year: item.year,
      description: item.description || ''
    });
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Bạn có chắc muốn xóa bằng cấp này?')) {
      DataManager.deleteItem('education', id);
      loadEducations();
    }
  };

  const resetForm = () => {
    setFormData({
      institution: '',
      degree: '',
      year: '',
      description: ''
    });
    setEditingItem(null);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Quản lý Bằng cấp
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Thêm, sửa, xóa thông tin bằng cấp và chứng chỉ
          </p>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button
            onClick={() => setIsEditing(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-navy-600 hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500"
          >
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Thêm bằng cấp
          </button>
        </div>
      </div>

      {/* Form Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {editingItem ? 'Sửa bằng cấp' : 'Thêm bằng cấp mới'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Trường / Tổ chức
                  </label>
                  <input
                    type="text"
                    name="institution"
                    required
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy-500 focus:border-navy-500"
                    placeholder="VD: Đại học Luật Hà Nội"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bằng cấp / Chứng chỉ
                  </label>
                  <input
                    type="text"
                    name="degree"
                    required
                    value={formData.degree}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy-500 focus:border-navy-500"
                    placeholder="VD: Cử nhân Luật"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Năm
                  </label>
                  <input
                    type="text"
                    name="year"
                    required
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy-500 focus:border-navy-500"
                    placeholder="VD: 2018-2022"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mô tả (tùy chọn)
                  </label>
                  <textarea
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-navy-500 focus:border-navy-500"
                    placeholder="Thêm mô tả về bằng cấp..."
                  />
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-navy-600 hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500"
                  >
                    {editingItem ? 'Cập nhật' : 'Thêm'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Education List */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Danh sách bằng cấp ({educations.length})
          </h3>
          
          {educations.length > 0 ? (
            <div className="space-y-4">
              {educations.map((education) => (
                <div key={education.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900">
                        {education.degree}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {education.institution} • {education.year}
                      </p>
                      {education.description && (
                        <p className="text-sm text-gray-500 mt-2">
                          {education.description}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => handleEdit(education)}
                        className="inline-flex items-center p-2 border border-transparent rounded-md text-sm text-navy-600 hover:bg-navy-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDelete(education.id)}
                        className="inline-flex items-center p-2 border border-transparent rounded-md text-sm text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">Chưa có bằng cấp nào</h3>
              <p className="mt-1 text-sm text-gray-500">
                Bắt đầu bằng cách thêm bằng cấp đầu tiên của bạn.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-navy-600 hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500"
                >
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Thêm bằng cấp
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 