export const API_KEY = "5d667f8e8d8c4b9c976ca8fa200e4498";

export const parseCurrentDate = new Date().toISOString().split("T")[0];
export const parsePreviusDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  .toISOString()
  .split("T")[0];

export const BASE_URL = "http://localhost:3000";
