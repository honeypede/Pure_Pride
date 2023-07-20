import { topDealUsers } from "@/utils/contentExports";
import Image from "next/image";
export default function Topbox() {
  return (
    <div className="topBox">
      <h1 className="mb-7 text-2xl font-semibold">Top dealers</h1>
      <div className="list">
        {topDealUsers.map((users) => (
          <div
            className="listitems flex justify-between items-center mb-7"
            key={users.id}
          >
            <div className="users flex gap-5">
              <Image
                className="rounded-full w-[40px] h-[40px] object-cover"
                src="/yash.jpg"
                alt="Logo"
                width={40}
                height={40}
              />
              <div className="userText flex flex-col gap-1">
                <span className="username text-sm font-medium">
                  {users.username}
                </span>
                <span className="email text-xs">{users.email}</span>
              </div>
              <span className="amount  font-medium">${users.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
