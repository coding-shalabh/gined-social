import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const redirectRules = {
    "/": { condition: "isAuthenticated", redirectTo: "/login" },
    "/profile": { condition: "isAuthenticated", redirectTo: "/login" },
    "/settings": { condition: "isAuthenticated", redirectTo: "/login" },
    "/login": { condition: "!isAuthenticated", redirectTo: "/" },
    "/coming-soon": { condition: "!isAuthenticated", redirectTo: "/coming-soon" },
    "/404": { condition: "!isAuthenticated", redirectTo: "/404" },
    "/about": { condition: "!isAuthenticated", redirectTo: "/coming-soon" }
};

const useRedirect = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // ✅ Only use Redux state

    useEffect(() => {
        console.log("Auth Status:", isAuthenticated, "Current Path:", location.pathname);
    }, [isAuthenticated, location.pathname]);

    useEffect(() => {
        const currentPath = location.pathname;
        const rule = redirectRules[currentPath];

        if (rule) {
            const shouldRedirect = rule.condition === "isAuthenticated"
                ? !isAuthenticated  // If rule requires auth but user is not authenticated, redirect
                : isAuthenticated;  // If rule requires NOT authenticated but user is authenticated, redirect

            if (shouldRedirect) {
                console.log(`Redirecting from ${currentPath} to ${rule.redirectTo}`);
                navigate(rule.redirectTo, { replace: true });
            }
        }
    }, [location.pathname, isAuthenticated, navigate]); // ✅ Detects logout correctly
};

export default useRedirect;
