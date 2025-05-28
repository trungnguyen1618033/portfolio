export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-dark border-t border-gold-accent/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="font-primary text-xl font-bold text-gold-accent mb-4">
              Thông tin liên hệ
            </h3>
            <div className="space-y-3">
              <p className="flex items-center justify-center md:justify-start text-gold">
                <span className="text-gold-accent mr-3">📧</span>
                servicecenter@vigorouscg.com
              </p>
              <p className="flex items-center justify-center md:justify-start text-gold">
                <span className="text-gold-accent mr-3">📞</span>
                0968 813 066
              </p>
              <p className="flex items-center justify-center md:justify-start text-gold">
                <span className="text-gold-accent mr-3">🌐</span>
                www.orientallawpro.com
              </p>
            </div>
          </div>

          {/* Professional Info */}
          <div className="text-center">
            <h3 className="font-primary text-xl font-bold text-gold-accent mb-4">
              Nguyen Phi Huyen
            </h3>
            <div className="text-gold space-y-2">
              <p>Senior Associate</p>
              <p>Oriental International Law Firm</p>
              <div className="font-chinese text-lg text-gold-accent mt-3">
                阮 非 玄
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="font-primary text-xl font-bold text-gold-accent mb-4">
              Kết nối
            </h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-navy-light rounded-full flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-navy-dark transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="mailto:servicecenter@vigorouscg.com" 
                className="w-10 h-10 bg-navy-light rounded-full flex items-center justify-center text-gold-accent hover:bg-gold-accent hover:text-navy-dark transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
            <div className="text-xs">
              <a 
                href="/admin/login" 
                className="text-gold-accent/60 hover:text-gold-accent transition-colors duration-200"
              >
                Admin Panel
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold-accent/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gold text-sm">
              © {currentYear} Nguyen Phi Huyen. All rights reserved.
            </p>
            <p className="text-gold-accent/60 text-xs">
              Professional Legal Services • Dịch vụ Pháp lý Chuyên nghiệp
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-accent via-gold to-gold-accent opacity-50"></div>
    </footer>
  );
} 