export type Language = 'en' | 'vi';

export interface TranslationDictionary {
  nav: {
    workspace: string;
    projects: string;
    lab: string;
    gaming: string;
    about: string;
    contact: string;
    terminal: string;
  };
  hero: {
    status: string;
    role: string;
    tagline: string;
    bio: string;
    enter3d: string;
    exploreProjects: string;
    viewCv: string;
    telemetryTitle: string;
    archTitle: string;
    education: string;
    graduation: string;
    motto: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    inspectSpec: string;
    all: string;
  };
  lab: {
    badge: string;
    title: string;
    subtitle: string;
  };
  gaming: {
    badge: string;
    title: string;
    subtitle: string;
    favorites: string;
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    coreTech: string;
  };
  experience: {
    badge: string;
    title: string;
    subtitle: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    copyEmail: string;
    copied: string;
    sendEmail: string;
    footerRights: string;
  };
  terminal: {
    welcome: string;
    helpHint: string;
    prompt: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      workspace: 'WORKSPACE',
      projects: 'PROJECTS',
      lab: 'LAB',
      gaming: 'GAMING',
      about: 'ABOUT',
      contact: 'CONTACT',
      terminal: 'TERMINAL'
    },
    hero: {
      status: 'ONLINE • READY TO COLLABORATE',
      role: 'FULLSTACK DEVELOPER',
      tagline: 'BUILDER • DEVELOPER • CREATOR',
      bio: 'Building reliable systems, useful products, and interactive digital experiences with modern web technologies and AI architecture.',
      enter3d: 'ENTER 3D STUDIO',
      exploreProjects: 'EXPLORE PROJECTS',
      viewCv: 'VIEW CV',
      telemetryTitle: 'khang.os ~ telemetry',
      archTitle: 'OPERATING ARCHITECTURE:',
      education: 'FPT POLYTECHNIC',
      graduation: 'GRADUATED 12/2023',
      motto: 'Building systems, products and digital experiences with clarity, restraint and purpose.'
    },
    projects: {
      badge: 'PROJECT SHOWCASE',
      title: 'Selected Works & Systems',
      subtitle: 'Real-world systems, enterprise ERP dashboards, AI architectures, and interactive 3D WebGL applications.',
      inspectSpec: 'INSPECT SPEC & DEMO',
      all: 'ALL'
    },
    lab: {
      badge: 'THE LAB // EXPERIMENTS & PROTOTYPES',
      title: 'Explorations & Technical R&D',
      subtitle: 'Active research in AI protocols, Model Context Protocol (MCP), quantized local LLMs, WebGL graphics, and realtime networking.'
    },
    gaming: {
      badge: 'BATTLESTATION & GAMING',
      title: 'Competitive Instincts & Focus',
      subtitle: 'Tactical focus, competitive strategy, and high-intensity reflexes.',
      favorites: 'FAVORITES:'
    },
    skills: {
      badge: 'TECHNICAL CAPABILITIES',
      title: 'Architecture & Skills Matrix',
      subtitle: 'Clean categorization of verified frameworks, protocols, databases, and tooling without fabricated proficiency percentages.',
      coreTech: 'CORE TECHNOLOGIES'
    },
    experience: {
      badge: 'BACKGROUND & TIMELINE',
      title: 'Experience & Education',
      subtitle: 'A chronological timeline of software development milestones, project engineering, and academic background.'
    },
    contact: {
      badge: 'COMMUNICATION CHANNEL',
      title: "Let's build something exceptional.",
      subtitle: 'Have an architectural idea, a product vision, or want to collaborate on reliable software systems? Reach out directly.',
      copyEmail: 'COPY EMAIL',
      copied: 'EMAIL COPIED!',
      sendEmail: 'SEND EMAIL',
      footerRights: 'All rights reserved.'
    },
    terminal: {
      welcome: 'KHANG.OS Interactive CLI System v2.4. Type "help" for commands.',
      helpHint: 'Press ` (backtick) or click Close to exit.',
      prompt: 'khang@os:~$ '
    }
  },
  vi: {
    nav: {
      workspace: 'KHÔNG GIAN',
      projects: 'DỰ ÁN',
      lab: 'PHÒNG LAB',
      gaming: 'GAMING',
      about: 'GIỚI THIỆU',
      contact: 'LIÊN HỆ',
      terminal: 'TERMINAL'
    },
    hero: {
      status: 'TRỰC TUYẾN • SẴN SÀNG HỢP TÁC',
      role: 'LẬP TRÌNH VIÊN FULLSTACK',
      tagline: 'XÂY DỰNG • PHÁT TRIỂN • SÁNG TẠO',
      bio: 'Phát triển các hệ thống phần mềm tin cậy, sản phẩm hữu ích và trải nghiệm kỹ thuật số tương tác với công nghệ web hiện đại và kiến trúc AI.',
      enter3d: 'VÀO STUDIO 3D',
      exploreProjects: 'XEM DỰ ÁN',
      viewCv: 'XEM HỒ SƠ',
      telemetryTitle: 'khang.os ~ hệ thống',
      archTitle: 'KIẾN TRÚC VẬN HÀNH:',
      education: 'FPT POLYTECHNIC',
      graduation: 'TỐT NGHIỆP 12/2023',
      motto: 'Kiến tạo hệ thống, sản phẩm và trải nghiệm kỹ thuật số với sự rõ ràng, tinh gọn và chuẩn xác.'
    },
    projects: {
      badge: 'DỰ ÁN TIÊU BIỂU',
      title: 'Hệ Thống & Sản Phẩm Đã Xây Dựng',
      subtitle: 'Các hệ thống thực tế: bảng điều khiển ERP doanh nghiệp, kiến trúc AI và ứng dụng 3D WebGL tương tác.',
      inspectSpec: 'XEM CHI TIẾT & DEMO',
      all: 'TẤT CẢ'
    },
    lab: {
      badge: 'PHÒNG LAB // THỬ NGHIỆM & NGUYÊN MẪU',
      title: 'Nghiên Cứu & Thử Nghiệm Công Nghệ',
      subtitle: 'Nghiên cứu ứng dụng giao thức AI, Model Context Protocol (MCP), mô hình LLM cục bộ, WebGL và mạng realtime tốc độ cao.'
    },
    gaming: {
      badge: 'GÓC CHIẾN GAME & GIẢI TRÍ',
      title: 'Bản Lĩnh Chiến Thuật & Phản Xạ',
      subtitle: 'Tập trung cao độ, tư duy chiến thuật và tốc độ xử lý tình huống.',
      favorites: 'TƯỚNG YÊU THÍCH:'
    },
    skills: {
      badge: 'NĂNG LỰC KỸ THUẬT',
      title: 'Bản Đồ Kỹ Năng & Công Nghệ',
      subtitle: 'Phân loại minh bạch các framework, cơ sở dữ liệu, giao thức và công cụ chuẩn xác, không dùng phần trăm ảo.',
      coreTech: 'CÔNG NGHỆ CỐT LÕI'
    },
    experience: {
      badge: 'LỊCH TRÌNH & HỌC VẤN',
      title: 'Kinh Nghiệm & Học Vấn',
      subtitle: 'Dòng thời gian các cột mốc phát triển phần mềm, kiến trúc dự án và quá trình đào tạo chính quy.'
    },
    contact: {
      badge: 'KÊNH KẾT NỐI TRỰC TIẾP',
      title: 'Cùng nhau xây dựng sản phẩm chất lượng.',
      subtitle: 'Bạn có ý tưởng kiến trúc, bài toán sản phẩm hoặc cần lập trình viên đồng hành? Hãy kết nối ngay.',
      copyEmail: 'SAO CHÉP EMAIL',
      copied: 'ĐÃ SAO CHÉP!',
      sendEmail: 'GỬI EMAIL',
      footerRights: 'Bảo lưu mọi quyền.'
    },
    terminal: {
      welcome: 'Hệ thống dòng lệnh KHANG.OS v2.4. Gõ "help" để xem danh sách lệnh.',
      helpHint: 'Nhấn phím ` (backtick) hoặc bấm Đóng để thoát.',
      prompt: 'khang@os:~$ '
    }
  }
};
