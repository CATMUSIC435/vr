import { Upload, Edit, Share2, CheckCircle2 } from "lucide-react";

export function UsageGuide() {
  const steps = [
    {
      icon: Upload,
      title: "Bước 1: Tải nội dung lên",
      description:
        "Nhấn nút 'Tải lên' để chọn ảnh, video hoặc tài liệu bạn muốn chia sẻ. Bạn có thể kéo thả trực tiếp vào khu vực tải lên để thao tác nhanh hơn.",
    },
    {
      icon: Edit,
      title: "Bước 2: Chỉnh sửa thông tin",
      description:
        "Điền tiêu đề, mô tả và chọn danh mục phù hợp. Hệ thống sẽ giúp bạn tự động gợi ý thẻ tag để tối ưu hiển thị.",
    },
    {
      icon: Share2,
      title: "Bước 3: Chia sẻ hoặc xuất bản",
      description:
        "Sau khi hoàn tất, nhấn 'Xuất bản' để chia sẻ công khai hoặc 'Lưu nháp' nếu bạn muốn quay lại chỉnh sửa sau.",
    },
    {
      icon: CheckCircle2,
      title: "Bước 4: Hoàn tất & theo dõi",
      description:
        "Bạn có thể xem thống kê lượt xem, bình luận hoặc chỉnh sửa lại nội dung bất kỳ lúc nào trong trang quản lý.",
    },
  ];

  return (
    <section className="max-w-3xl  text-white mx-auto p-6 space-y-8">
      <h2 className="text-2xl font-bold mb-4">
        Hướng dẫn sử dụng
      </h2>

      <div className="space-y-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-4 border-l-4 border-blue-500 pl-4 relative"
          >
            <div className="bg-blue-100 text-blue-600 rounded-full p-2">
              <step.icon className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                {step.title}
              </h3>
              <p className="text-sm mt-1 leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Vẽ đường nối các bước (trừ bước cuối) */}
            {index < steps.length - 1 && (
              <span className="absolute left-[11px] top-10 w-[2px] h-12 bg-blue-300" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
