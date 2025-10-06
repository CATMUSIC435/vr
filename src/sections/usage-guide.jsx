import { steps } from "../constants/step";

export function UsageGuide() {

  return (
    <section className="max-w-3xl  text-white mx-auto p-6 space-y-8 overflow-y-scroll">
      <div className="h-full">
        <h2 className="text-lg ctext-2xl font-bold mb-4">
          Hướng dẫn sử dụng
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-2 md:gap-4 border-l-4 border-blue-500 pl-4 relative"
            >
              <div className="bg-blue-100 text-blue-600 rounded-full p-2">
                <step.icon className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-sm md:text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm mt-1 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <span className="absolute left-[11px] top-10 w-[2px] h-12 bg-blue-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

