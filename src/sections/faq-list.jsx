import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

export function FAQList() {
    const faqs = [
        {
            question: "Làm sao để đăng tin bất động sản?",
            answer:
                "Bạn cần đăng nhập tài khoản, sau đó vào mục 'Đăng tin' và điền đầy đủ thông tin về căn hộ, giá, vị trí, hình ảnh...",
        },
        {
            question: "Phí đăng tin là bao nhiêu?",
            answer:
                "Hệ thống cung cấp gói miễn phí 7 ngày. Sau đó, bạn có thể chọn gói Premium để tăng hiển thị và ưu tiên tìm kiếm.",
        },
        {
            question: "Tôi có thể chỉnh sửa tin đã đăng không?",
            answer:
                "Có. Vào trang 'Quản lý tin đăng', chọn tin bạn muốn chỉnh sửa, cập nhật thông tin và lưu lại.",
        },
    ];

    return (
        <div className="flex flex-wrap w-full mx-auto space-y-3 p-4">
            {faqs.map((faq, index) => (
                <div className="w-1/2">
                    <FAQItem key={index} {...faq} />
                </div>
            ))}
        </div>
    );
}

export function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);

    return (
        <div className=" rounded-xl overflow-hidden transition-all shadow-sm">
            {/* Header */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center px-4 py-3 text-left"
            >
                <div className="flex items-center gap-2 text-white font-medium">
                    <MessageCircle className="w-5 h-5 text-blue-500" />
                    <span>{question}</span>
                </div>

                <ChevronDown
                    className={`w-5 h-5 text-white transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* Collapse nội dung */}
            <div
                className={`transition-all duration-500 overflow-hidden ${open ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-4 pb-4 text-white text-sm leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
}
