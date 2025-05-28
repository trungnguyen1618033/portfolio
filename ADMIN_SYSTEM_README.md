# 📝 Admin System - Portfolio Management

## 🎯 Tổng quan

Hệ thống admin này cho phép bạn quản lý nội dung portfolio một cách dễ dàng thông qua giao diện web. Dữ liệu được lưu trữ dưới dạng JSON trong localStorage của trình duyệt.

## 🔐 Đăng nhập

### Thông tin đăng nhập mặc định:
- **Username:** `admin`
- **Password:** `portfolio2024`

### Cách truy cập:
1. Vào portfolio chính
2. Scroll xuống footer, click link "Admin"
3. Hoặc truy cập trực tiếp: `/admin/login`

## 🏗️ Cấu trúc hệ thống

```
/admin/
├── login/          # Trang đăng nhập
├── dashboard/      # Trang tổng quan
├── education/      # Quản lý bằng cấp
├── interests/      # Quản lý sở thích  
├── diary/          # Quản lý nhật ký
└── blog/           # Quản lý blog
```

## 📊 Dashboard Features

### Thống kê nhanh:
- ✅ Số lượng bằng cấp, sở thích, nhật ký, blog
- ✅ Bài đã xuất bản vs chưa xuất bản
- ✅ Bài nổi bật và nhật ký riêng tư
- ✅ Hoạt động gần đây

### Chức năng chính:
- 📤 **Export Data:** Tải xuống toàn bộ dữ liệu dưới dạng JSON
- 📥 **Import Data:** Khôi phục dữ liệu từ file JSON

## 📚 Quản lý Bằng cấp

### Hiện tại hỗ trợ:
- ✅ Thêm, sửa, xóa bằng cấp
- ✅ Tên trường/tổ chức
- ✅ Bằng cấp/chứng chỉ  
- ✅ Năm học/thời gian
- ✅ Mô tả chi tiết
- ✅ Thứ tự hiển thị tự động

### Ví dụ dữ liệu:
```json
{
  "institution": "Đại học Luật Hà Nội",
  "degree": "Cử nhân Luật", 
  "year": "2018-2022",
  "description": "Chuyên ngành Luật Quốc tế, tốt nghiệp loại Giỏi"
}
```

## 🎯 Quản lý Sở thích (Đang phát triển)

### Sẽ hỗ trợ:
- Categories: hobby, activity, skill, other
- Hình ảnh đại diện
- Mô tả chi tiết
- Sắp xếp thứ tự

## 📔 Quản lý Nhật ký (Đang phát triển)

### Sẽ hỗ trợ:
- Rich text editor
- Mood tracking (happy, excited, neutral, thoughtful, challenging)
- Tags system
- Private/Public status
- Tìm kiếm theo ngày, mood, tags

## 📝 Quản lý Blog (Đang phát triển)

### Sẽ hỗ trợ:
- Markdown editor với preview
- SEO-friendly slugs
- Featured posts
- Published/Draft status
- Tags và categories
- Excerpt tự động/thủ công

## 💾 Quản lý Dữ liệu

### Lưu trữ:
- **Primary:** localStorage của trình duyệt
- **Backup:** Export/Import JSON files
- **Auto-save:** Mọi thay đổi được lưu ngay lập tức

### Backup & Restore:
```javascript
// Export tự động tạo file với format:
portfolio-data-YYYY-MM-DD.json

// Import chấp nhận format:
{
  "education": [...],
  "interests": [...], 
  "diary": [...],
  "blog": [...],
  "lastUpdated": "2024-01-20T10:00:00Z"
}
```

### An toàn dữ liệu:
⚠️ **Lưu ý quan trọng:**
- Dữ liệu lưu trong localStorage có thể bị mất khi xóa cache
- **Khuyến nghị:** Export dữ liệu thường xuyên để backup
- Sử dụng `localStorage.setItem('portfolio_data_backup', JSON.stringify(data))` để tạo backup thủ công

## 🔧 Tùy chỉnh

### Thay đổi thông tin đăng nhập:
```env
# .env.local
NEXT_PUBLIC_ADMIN_USERNAME=your_username
NEXT_PUBLIC_ADMIN_PASSWORD=your_password
NEXT_PUBLIC_TOKEN_SECRET=your_secret_key
```

### Tùy chỉnh giao diện:
- Colors defined in `src/app/globals.css`
- Admin theme sử dụng navy-gray palette
- Portfolio theme sử dụng navy-gold palette

## 🚀 Deployment

### Vercel (Recommended):
```bash
npm run build
vercel --prod
```

### Static Export:
```bash
npm run build
npm run export
```

### Environment Variables:
```env
NEXT_PUBLIC_ADMIN_USERNAME=admin
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password
NEXT_PUBLIC_TOKEN_SECRET=your_jwt_secret
```

## 🔒 Security

### Hiện tại:
- Simple client-side authentication
- Session timeout (24 hours)
- localStorage-based storage

### Khuyến nghị cho Production:
- [ ] Implement proper JWT authentication
- [ ] Add server-side API routes
- [ ] Use proper database (MongoDB, PostgreSQL)
- [ ] Add rate limiting
- [ ] Implement CSRF protection
- [ ] Add role-based permissions

## 🐛 Troubleshooting

### Lỗi thường gặp:

**1. Không thể đăng nhập:**
- Kiểm tra username/password
- Clear localStorage: `localStorage.clear()`
- Hard refresh: Ctrl+F5

**2. Dữ liệu bị mất:**
- Kiểm tra localStorage: `localStorage.getItem('portfolio_data')`
- Import từ backup file
- Reset về dữ liệu mặc định

**3. Lỗi UI/Styling:**
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`

### Reset hoàn toàn:
```javascript
// Trong browser console:
localStorage.clear();
sessionStorage.clear();
location.reload();
```

## 📈 Future Enhancements

### Ưu tiên cao:
- [ ] Complete CRUD for Interests, Diary, Blog
- [ ] Rich text editor với markdown
- [ ] Image upload và management
- [ ] Search và filtering
- [ ] Bulk operations

### Ưu tiên trung bình:
- [ ] Real-time preview
- [ ] Multiple admin users
- [ ] Content versioning
- [ ] Analytics dashboard
- [ ] SEO optimization tools

### Ưu tiên thấp:
- [ ] Multi-language support
- [ ] Theme customization
- [ ] Plugin system
- [ ] API documentation
- [ ] Mobile app

## 📞 Support

Nếu gặp vấn đề hoặc cần hỗ trợ:
1. Kiểm tra file README này
2. Xem console log trong DevTools
3. Export dữ liệu trước khi thử fix
4. Contact developer với chi tiết lỗi

---

**Version:** 1.0.0  
**Last Updated:** January 2024  
**Compatible with:** Next.js 15, React 19, TypeScript 5 