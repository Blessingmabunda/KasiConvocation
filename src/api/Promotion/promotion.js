import httpService from "@/api/httpService.js";

const apiService = {
    requestLeave: (data) => {
        return httpService.post("/api/promotion", data);
    },
    getPromotionDetails: () => {
        return httpService.get("/api/promotion");
    },
    deletePromotion: (id) => {
        return httpService.delete(`/api/promotion/${id}`);
    }
};

export default apiService;
