import useExpander from "@/hooks/useExpander";
import { Plus } from "@/icons";

export default function Expander({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const { ref, isExpanded, handleToggle } = useExpander<HTMLDivElement>();
  return (
    <div className="border-y border-tertiary-text py-9">
      <button
        type="button"
        onClick={handleToggle}
        className={`flex items-center w-full transition-all duration-500 ${isExpanded && "mb-7"}`}
      >
        <Plus
          className={`${
            isExpanded ? " rotate-45" : ""
          }  cursor-pointer transition-all duration-200 w-10 h-10 mr-6 fill-offBlack`}
        />
        {title}
      </button>
      <div ref={ref} className="overflow-hidden transition-all duration-500">
        {children}
      </div>
    </div>
  );
}
