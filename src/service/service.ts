import http from "./config";

interface ServiceData {
  [key: string]: any;
}

// interface ServiceParams {
//   limit: number;
//   page: number;
// }

const service = {
  create: (data: ServiceData) => http.post("/service", data),
  get: (params) => http.get("/service/all", { params }),
  delete: (id: string | number) => http.delete("/service", { params: { id } }),
  update: (data: ServiceData) => http.put("/service", data),
};

export default service;
