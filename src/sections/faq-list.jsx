import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { faqs } from "../constants/faqs";

export function FAQList() {
    return (
        <div className="flex flex-wrap w-full mx-auto space-y-3 p-4">
            {faqs.map((faq, index) => (
                <div className="w-1/2" key={index}>
                    <FAQItem key={index} {...faq} />
                </div>
            ))}
        </div>
    );
}

export function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="overflow-hidden transition-all shadow-sm">
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
