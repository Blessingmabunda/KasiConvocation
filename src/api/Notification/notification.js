import httpService from "@/api/httpService.js";

const apiService = {
    requestLeave: (data) => {
        return httpService.post("/api/notifications", data);
    },
};

export default apiService;