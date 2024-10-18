import symbolDefs from "@/assets/images/symbol-defs.svg";
export default function Button(props) {
  const {
    label,
    type = "submit",
    variant = "primary",
    fullWidth = true,
    onClick,
    icon,
  } = props;

  const primaryClass = "bg-button ";
  const outlinedClass =
    "border-button border text-button hover:border-transparent hover:bg-button hover:text-white duration-100";
  const fullWidthClass = "w-full";
  const iconClass = "flex items-center gap-3";

  return (
    <button
      className={`${
        variant === "primary" ? primaryClass : outlinedClass
      } rounded-[8px] py-2 px-4  ${fullWidth ? fullWidthClass : ""} ${
        icon ? iconClass : ""
      }`}
      type={type}
      onClick={type === "button" ? onClick : undefined}
    >
      {label}
      {icon && (
        <svg className="text-white size-2">
          <use href={`${symbolDefs}#plus`}></use>
        </svg>
      )}
    </button>
  );
}
