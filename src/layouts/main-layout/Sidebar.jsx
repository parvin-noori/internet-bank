import symbolDefs from "@/assets/images/symbol-defs.svg";

export default function Sidebar(props) {
  const { showMenu } = props;
  return (
    <ul
      className={`flex flex-col text-white py-2 transition-all duration-700 ease-in-out  bg-form  h-full ${
        showMenu ? "max-w-full" : "max-w-max"
      }`}
    >
      <li>
        <a href="#" className="flex items-center gap-4 p-2">
          <svg width="16" height="20" className="text-white">
            <use href={`${symbolDefs}#home`}></use>
          </svg>
          <span>خانه</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center gap-4 p-2">
          <svg width="20" height="20" className="text-white">
            <use href={`${symbolDefs}#report`}></use>
          </svg>
          <span> گزارش</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center gap-4 p-2">
          <svg width="24" height="24" className="text-white">
            <use href={`${symbolDefs}#transfer`}></use>
          </svg>
          <span> انتقال وجه</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center gap-4 p-2">
          <svg width="18" height="20" className="text-white">
            <use href={`${symbolDefs}#setting`}></use>
          </svg>
          <span> تنظیمات</span>
        </a>
      </li>
    </ul>
  );
}
