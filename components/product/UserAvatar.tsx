import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function UserAvatar() {
  return (
    <div>
      <Avatar className="w-12 h-12 border-3 border-transparent transition-all  hover:border-orange-500 duration-400 cursor-pointer">
        <AvatarImage
          src="https://github.com/kaynanoliveira.png"
          alt="User Avatar"
        />
        <AvatarFallback>KN</AvatarFallback>
      </Avatar>
    </div>
  );
}
