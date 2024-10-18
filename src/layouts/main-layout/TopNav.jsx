import symbolDefs from "@/assets/images/symbol-defs.svg";
import Avatar from "@/assets/images/avatar.jpg";
import { Button } from "@/components/button";
export default function TopNav(props) {
  const { setShowMenu,showMenu } = props;

  return (
    <div className="p-3 bg-form text-white flex items-center gap-3">
      <a href="#" className="p-2 block">
        <svg width="31" height="25" className="text-white">
          <use href={`${symbolDefs}#logo`}></use>
        </svg>
      </a>
      <button onClick={() => setShowMenu(!showMenu)} type="button">
        <svg width="31" height="25" className="text-white">
          <use href={`${symbolDefs}#bars`}></use>
        </svg>
      </button>
      <div className="flex ms-auto gap-7">
        <Button
          type="button"
          label="ساخت حساب جدید"
          icon={`${symbolDefs}#plus`}
        />
        <button>
          <svg width="18" height="20" className="text-white">
            <use href={`${symbolDefs}#bell`}></use>
          </svg>
        </button>
        <img className="size-[32px] rounded-full" src={Avatar} alt="avatar" />
      </div>
    </div>
  );
}
