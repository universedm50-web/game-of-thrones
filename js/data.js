// ============================================================
// BÌNH MINH EQUIPMENT — DATA LAYER
// ============================================================

const BM_DATA = {

  // ---- PRODUCTS ----
  products: [
    // KOBELCO — Cỡ nhỏ
    { id: 1, name: "Kobelco SK35SR", brand: "kobelco", segment: "small", status: "new",
      weight: "3.5 tấn", power: "22.4 kW", bucket: "0.10 m³", image: "images/cat_kobelco.jpg", priceRange: "1-3ty",
      tags: ["Mini Excavator", "Nhật Bản"],
      specs: { "Xuất xứ": "Nhật Bản", "Trọng lượng vận hành": "3.490 kg", "Công suất động cơ": "22.4 kW (30 HP)", "Dung tích gầu": "0.10 m³", "Chiều sâu đào tối đa": "2.690 mm", "Bán kính đào tối đa": "4.680 mm", "Sức nâng tối đa": "2.800 kg", "Hệ thống thủy lực": "Piston biến thể" },
      desc: "Máy xúc mini Kobelco SK35SR lý tưởng cho các công trình không gian hạn chế. Thiết kế đuôi quay siêu nhỏ, tiết kiệm nhiên liệu vượt trội, phù hợp xây dựng đô thị, cải tạo hạ tầng." },

    { id: 2, name: "Kobelco SK50", brand: "kobelco", segment: "small", status: "used",
      weight: "5.0 tấn", power: "33.0 kW", bucket: "0.20 m³", image: "images/cat_kobelco.jpg", priceRange: "1-3ty",
      tags: ["Mini Excavator", "Nhật Bản"],
      specs: { "Xuất xứ": "Nhật Bản", "Trọng lượng vận hành": "5.010 kg", "Công suất động cơ": "33.0 kW (44 HP)", "Dung tích gầu": "0.20 m³", "Chiều sâu đào tối đa": "3.430 mm", "Bán kính đào tối đa": "5.900 mm", "Sức nâng tối đa": "3.800 kg", "Hệ thống thủy lực": "Piston biến thể" },
      desc: "Kobelco SK50 — máy xúc 5 tấn mạnh mẽ, linh hoạt. Phù hợp với các dự án đào móng, đào kênh quy mô vừa tại đô thị." },

    // KOBELCO — Cỡ trung
    { id: 3, name: "Kobelco SK130", brand: "kobelco", segment: "medium", status: "new",
      weight: "13.2 tấn", power: "66.0 kW", bucket: "0.52 m³", image: "images/cat_kobelco.jpg", priceRange: "3-10ty",
      tags: ["Máy xúc", "Nhật Bản"],
      specs: { "Xuất xứ": "Nhật Bản", "Trọng lượng vận hành": "13.200 kg", "Công suất động cơ": "66.0 kW (89 HP)", "Dung tích gầu": "0.52 m³", "Chiều sâu đào tối đa": "5.740 mm", "Bán kính đào tối đa": "8.570 mm", "Sức nâng tối đa": "8.900 kg", "Hệ thống thủy lực": "Piston biến thể kép" },
      desc: "Kobelco SK130 nổi tiếng với sức mạnh ổn định và độ bền cao. Lý tưởng cho các dự án xây dựng dân dụng, hạ tầng giao thông." },

    { id: 4, name: "Kobelco SK200", brand: "kobelco", segment: "medium", status: "new",
      weight: "20.5 tấn", power: "110.0 kW", bucket: "0.90 m³", image: "images/cat_kobelco.jpg", priceRange: "3-10ty",
      tags: ["Máy xúc", "Nhật Bản"],
      specs: { "Xuất xứ": "Nhật Bản", "Trọng lượng vận hành": "20.500 kg", "Công suất động cơ": "110.0 kW (148 HP)", "Dung tích gầu": "0.90 m³", "Chiều sâu đào tối đa": "6.490 mm", "Bán kính đào tối đa": "9.730 mm", "Sức nâng tối đa": "13.200 kg", "Hệ thống thủy lực": "Piston biến thể kép CLSS" },
      desc: "Kobelco SK200 — dòng máy xúc bán chạy nhất Việt Nam. Tích hợp hệ thống thủy lực CLSS tiên tiến, tiêu hao nhiên liệu thấp, năng suất cao." },

    // KOBELCO — Cỡ lớn
    { id: 5, name: "Kobelco SK330", brand: "kobelco", segment: "large", status: "new",
      weight: "32.0 tấn", power: "193.0 kW", bucket: "1.40 m³", image: "images/cat_kobelco.jpg", priceRange: "tren10ty",
      tags: ["Máy xúc lớn", "Nhật Bản"],
      specs: { "Xuất xứ": "Nhật Bản", "Trọng lượng vận hành": "32.000 kg", "Công suất động cơ": "193.0 kW (259 HP)", "Dung tích gầu": "1.40 m³", "Chiều sâu đào tối đa": "7.470 mm", "Bán kính đào tối đa": "11.710 mm", "Sức nâng tối đa": "27.000 kg", "Hệ thống thủy lực": "Piston biến thể kép CLSS" },
      desc: "Kobelco SK330 — lựa chọn hàng đầu cho khai thác mỏ, xây dựng cảng biển, hạ tầng quy mô lớn. Sức mạnh vượt trội, độ bền khắc nghiệt." },

    { id: 6, name: "Kobelco SK850", brand: "kobelco", segment: "large", status: "new",
      weight: "84.0 tấn", power: "447.0 kW", bucket: "4.50 m³", image: "images/cat_kobelco.jpg", priceRange: "tren10ty",
      tags: ["Siêu máy xúc", "Nhật Bản"],
      specs: { "Xuất xứ": "Nhật Bản", "Trọng lượng vận hành": "84.000 kg", "Công suất động cơ": "447.0 kW (600 HP)", "Dung tích gầu": "4.50 m³", "Chiều sâu đào tối đa": "9.480 mm", "Bán kính đào tối đa": "14.800 mm", "Sức nâng tối đa": "82.000 kg", "Hệ thống thủy lực": "Dual pump CLSS" },
      desc: "Kobelco SK850 — siêu máy xúc mạnh nhất trong dòng Kobelco. Chuyên dùng cho khai thác mỏ, cảng biển, dự án trọng điểm quốc gia." },

    // HAMM
    { id: 7, name: "Hamm HD12", brand: "hamm", segment: "roller_light", status: "new",
      weight: "1.5 tấn", power: "10.5 kW", bucket: "—", image: "images/cat_hamm.jpg", priceRange: "duoi1ty",
      tags: ["Xe lu", "Đức"],
      specs: { "Xuất xứ": "Đức (WIRTGEN GROUP)", "Trọng lượng vận hành": "1.500 kg", "Công suất động cơ": "10.5 kW", "Bề rộng lu": "1.000 mm", "Tần số rung": "58/68 Hz", "Biên độ rung": "0.50/0.35 mm", "Tốc độ di chuyển": "0–9 km/h", "Hệ thống rung": "Exciter Hamm" },
      desc: "Hamm HD12 — xe lu rung nhỏ gọn, lý tưởng cho lu lề đường, hè phố, sân bãi hẹp. Vận hành đơn giản, tiết kiệm." },

    { id: 8, name: "Hamm HD14", brand: "hamm", segment: "roller_light", status: "used",
      weight: "1.8 tấn", power: "13.0 kW", bucket: "—", image: "images/cat_hamm.jpg", priceRange: "1-3ty",
      tags: ["Xe lu", "Đức"],
      specs: { "Xuất xứ": "Đức", "Trọng lượng vận hành": "1.800 kg", "Công suất động cơ": "13.0 kW", "Bề rộng lu": "1.100 mm", "Tần số rung": "60/72 Hz", "Biên độ rung": "0.55/0.38 mm", "Tốc độ di chuyển": "0–10 km/h", "Hệ thống rung": "Exciter Hamm" },
      desc: "Hamm HD14 — nâng cấp từ HD12, tăng tải trọng và bề rộng lu. Hiệu quả cao cho các dự án hạ tầng đô thị vừa và nhỏ." },

    { id: 9, name: "Hamm HD120", brand: "hamm", segment: "roller_heavy", status: "new",
      weight: "12.0 tấn", power: "108.0 kW", bucket: "—", image: "images/cat_hamm.jpg", priceRange: "3-10ty",
      tags: ["Xe lu hạng nặng", "Đức"],
      specs: { "Xuất xứ": "Đức (WIRTGEN GROUP)", "Trọng lượng vận hành": "12.000 kg", "Công suất động cơ": "108.0 kW (145 HP)", "Bề rộng lu": "2.130 mm", "Tần số rung": "30/42 Hz", "Biên độ rung": "1.80/0.90 mm", "Tốc độ di chuyển": "0–10 km/h", "Hệ thống rung": "Oscillation Hamm" },
      desc: "Hamm HD120 — xe lu hạng nặng tiêu chuẩn quốc tế. Tích hợp công nghệ Oscillation độc đáo, lu mặt đường nhựa chất lượng cao, bề mặt phẳng tuyệt đối." },

    { id: 10, name: "Hamm HD120VV", brand: "hamm", segment: "roller_heavy", status: "new",
      weight: "12.2 tấn", power: "112.0 kW", bucket: "—", image: "images/cat_hamm.jpg", priceRange: "3-10ty",
      tags: ["Xe lu 2 bánh thép", "Đức"],
      specs: { "Xuất xứ": "Đức (WIRTGEN GROUP)", "Trọng lượng vận hành": "12.200 kg", "Công suất động cơ": "112.0 kW (150 HP)", "Bề rộng lu": "2.100 mm", "Tần số rung": "28/40 Hz", "Biên độ rung": "1.95/0.95 mm", "Tốc độ di chuyển": "0–10 km/h", "Hệ thống rung": "Dual Oscillation" },
      desc: "Hamm HD120VV — xe lu 2 bánh thép hạng nặng, phù hợp lu nền đường, lu mặt đường nhựa cho các dự án đường cao tốc." },

    // EUROCRANE
    { id: 11, name: "Eurocrane Cầu Trục 5T", brand: "eurocrane", segment: "crane_light", status: "new",
      weight: "5 tấn", power: "—", bucket: "—", image: "images/cat_crane.jpg", priceRange: "1-3ty",
      tags: ["Cầu trục", "EU"],
      specs: { "Xuất xứ": "Châu Âu", "Tải trọng nâng": "5.000 kg", "Khẩu độ dầm": "8–28 m", "Chiều cao nâng": "6–12 m", "Tốc độ nâng": "5–10 m/phút", "Tốc độ xe con": "20 m/phút", "Tốc độ cầu trục": "30 m/phút", "Cấp bảo vệ": "IP54" },
      desc: "Cầu trục Eurocrane 5 tấn — giải pháp nâng hạ tin cậy cho nhà máy, kho xưởng. Thiết kế châu Âu, độ bền cao, vận hành êm ái." },

    { id: 12, name: "Eurocrane Cầu Trục 10T", brand: "eurocrane", segment: "crane_heavy", status: "new",
      weight: "10 tấn", power: "—", bucket: "—", image: "images/cat_crane.jpg", priceRange: "3-10ty",
      tags: ["Cầu trục hạng nặng", "EU"],
      specs: { "Xuất xứ": "Châu Âu", "Tải trọng nâng": "10.000 kg", "Khẩu độ dầm": "10–32 m", "Chiều cao nâng": "8–16 m", "Tốc độ nâng": "3–8 m/phút", "Tốc độ xe con": "20 m/phút", "Tốc độ cầu trục": "25 m/phút", "Cấp bảo vệ": "IP54" },
      desc: "Cầu trục Eurocrane 10 tấn — phù hợp cho sản xuất công nghiệp nặng, cảng biển, luyện kim. Hệ thống an toàn đa lớp tiêu chuẩn CE." },

    // XE NÂNG
    { id: 13, name: "Xe Nâng Diesel 3T", brand: "forklift", segment: "forklift_light", status: "new",
      weight: "3 tấn", power: "—", bucket: "—", image: "images/cat_forklift.jpg", priceRange: "duoi1ty",
      tags: ["Xe nâng", "Nhật Bản"],
      specs: { "Xuất xứ": "Nhật Bản", "Tải trọng nâng": "3.000 kg", "Chiều cao nâng": "3.000 mm", "Động cơ": "Diesel 4 xilanh", "Mast tiêu chuẩn": "Duplex", "Lốp xe": "Pneumatic", "Bán kính quay vòng": "2.200 mm", "Tốc độ nâng": "400 mm/s" },
      desc: "Xe nâng Diesel 3 tấn — lý tưởng cho kho hàng, cảng biển, nhà máy. Động cơ mạnh mẽ, tiêu hao nhiên liệu thấp, chi phí vận hành tối ưu." },

    { id: 14, name: "Xe Nâng Điện 2T", brand: "forklift", segment: "forklift_light", status: "new",
      weight: "2 tấn", power: "—", bucket: "—", image: "images/cat_forklift.jpg", priceRange: "duoi1ty",
      tags: ["Xe nâng điện", "Nhật Bản"],
      specs: { "Xuất xứ": "Nhật Bản", "Tải trọng nâng": "2.000 kg", "Chiều cao nâng": "3.000 mm", "Động cơ": "Motor điện AC", "Pin": "48V/500Ah", "Mast tiêu chuẩn": "Triplex", "Thời gian sạc": "8 giờ", "Tốc độ nâng": "450 mm/s" },
      desc: "Xe nâng điện 2 tấn thân thiện môi trường. Không phát thải, vận hành yên tĩnh, phù hợp kho lạnh, siêu thị, nhà máy thực phẩm." },
  ],

  // ---- NEWS ---- 
  news: [
    { id: 1, cat: "Lễ Bàn Giao", title: "Lễ bàn giao 5 máy xúc Kobelco SK200 cho Tập đoàn Xây dựng Phú Thịnh", date: "10/08/2026", author: "Bình Minh Equipment", image: "images/news_handover.jpg",
      excerpt: "Trong không khí trang trọng, Bình Minh Equipment đã tổ chức lễ bàn giao 5 chiếc máy xúc Kobelco SK200 mới 100% cho đối tác chiến lược Tập đoàn Xây dựng Phú Thịnh, phục vụ dự án hạ tầng trọng điểm tại Đà Nẵng.",
      content: "Đây là lần bàn giao lớn thứ 3 trong năm 2026..." },
    { id: 2, cat: "Triển Lãm", title: "Bình Minh Equipment tham dự triển lãm thiết bị xây dựng quốc tế BAUMA CONEXPO 2026", date: "05/08/2026", author: "Bình Minh Equipment", image: "images/news_exhibition.jpg",
      excerpt: "Với gian hàng rộng 200m², Bình Minh Equipment đã trưng bày toàn bộ dải sản phẩm máy xúc Kobelco, xe lu Hamm và cầu trục Eurocrane tại triển lãm quốc tế BAUMA CONEXPO 2026.",
      content: "Triển lãm BAUMA CONEXPO 2026 quy tụ hơn 500 thương hiệu..." },
    { id: 3, cat: "Kỹ Thuật", title: "Hướng dẫn bảo dưỡng máy xúc Kobelco đúng chuẩn nhà máy — tăng tuổi thọ 30%", date: "28/07/2026", author: "KS. Nguyễn Văn Hùng", image: "images/news_maintenance.jpg",
      excerpt: "Bảo dưỡng đúng chuẩn là yếu tố quyết định tuổi thọ máy. Bài viết tổng hợp quy trình bảo dưỡng theo khuyến nghị chính hãng Kobelco cho dòng máy SK130, SK200, SK330.",
      content: "Dầu thủy lực cần thay định kỳ 1000 giờ vận hành..." },
    { id: 4, cat: "Ký Kết", title: "Ký kết hợp tác chiến lược với nhà thầu thi công sân bay Long Thành giai đoạn 2", date: "20/07/2026", author: "Bình Minh Equipment", image: "images/news_handover.jpg",
      excerpt: "Bình Minh Equipment chính thức ký kết hợp đồng cung cấp thiết bị máy xúc và xe lu cho dự án mở rộng sân bay Long Thành giai đoạn 2, tổng giá trị hợp đồng trên 50 tỷ đồng.",
      content: "Hợp đồng bao gồm 8 máy xúc Kobelco SK330..." },
  ],

  // ---- JOBS ----
  jobs: [
    { id: 1, title: "Kỹ Sư Kỹ Thuật Máy Xây Dựng", location: "Hồ Chí Minh", type: "Toàn thời gian", salary: "Thỏa thuận", deadline: "30/09/2026",
      desc: "Chịu trách nhiệm tư vấn kỹ thuật, hỗ trợ khách hàng sau bán hàng, kiểm tra và bảo dưỡng máy xúc Kobelco, xe lu Hamm. Yêu cầu kinh nghiệm ≥2 năm về thiết bị công trình." },
    { id: 2, title: "Chuyên Viên Kinh Doanh Thiết Bị", location: "Hà Nội / Đà Nẵng", type: "Toàn thời gian", salary: "8–20 triệu + Hoa hồng", deadline: "15/09/2026",
      desc: "Khai thác và phát triển khách hàng B2B trong ngành xây dựng, hạ tầng. Tư vấn và thương lượng hợp đồng cung cấp máy móc thiết bị." },
    { id: 3, title: "Kỹ Thuật Viên Bảo Dưỡng", location: "Đồng Nai", type: "Toàn thời gian", salary: "10–18 triệu", deadline: "20/09/2026",
      desc: "Thực hiện bảo dưỡng định kỳ và sửa chữa máy xúc, xe lu tại xưởng và tại công trình của khách hàng. Yêu cầu có chứng chỉ nghề kỹ thuật cơ điện." },
    { id: 4, title: "Nhân Viên Kế Toán Tổng Hợp", location: "Hồ Chí Minh", type: "Toàn thời gian", salary: "12–18 triệu", deadline: "25/09/2026",
      desc: "Quản lý sổ sách kế toán, hóa đơn, thuế, báo cáo tài chính. Làm việc trong môi trường chuyên nghiệp, có cơ hội thăng tiến rõ ràng." },
  ],

};
