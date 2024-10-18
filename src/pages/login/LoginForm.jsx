import { useState } from "react";
import { InputGroup } from "@/components/input-group";
import { Button } from "@/components/button";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const [userInfo, setUserInfo] = useState({});
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    // e.preventDefault();
    console.log(data);
    // e.target.reset();
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setUserInfo((prevState) => ({ ...prevState, [id]: value }));
  };

  return (
    <form action="" className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <InputGroup
        label="پست الکترونیک"
        id="email"
        placeholder="name@happy.com"
        onChange={handleChange}
      />
      <InputGroup
        label="رمز عبور "
        id="password"
        placeholder=""
        onChange={handleChange}
        type="password"
      />

      <Button label="ایجاد حساب" />
      <span className="text-[#6B7280] block">
        عضو نیستید ؟{" "}
        <a href="/" className="text-button">
          ایجاد حساب{" "}
        </a>
      </span>
    </form>
  );
}
