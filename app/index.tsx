import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Index() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace("/intro");
        }, 0); // 延迟0毫秒，确保 Root Layout 加载

        return () => clearTimeout(timer);
    }, [router]);

    return null;
}
