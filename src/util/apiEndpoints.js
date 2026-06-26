const BASE_URL = "https://cloudshareapi-sdb8.onrender.com/api/v1.0";    //  mera render ka link backend

export const apiEndpoints = {
    FETCH_FILES: `${BASE_URL}/files/my`,
    TOGGLE_FILE: (id) => `${BASE_URL}/files/${id}/toggle-public`,
    DOWNLOAD_FILE: (id) => `${BASE_URL}/files/download/${id}`,
    DELETE_FILE: (id) => `${BASE_URL}/files/${id}`,
    UPLOAD_FILE: `${BASE_URL}/files/upload`,
    PUBLIC_FILE_VIEW: (fileId) => `${BASE_URL}/files/public/${fileId}`
}