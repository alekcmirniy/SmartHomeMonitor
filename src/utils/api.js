import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://your-smart-home-backend.example.com/api',
    timeout: 5000
});

export function fetchSensors() {
    return apiClient.get('/sensors');
}
export function toggleDevice(id, newState) {
    return apiClient.post(`/devices/${id}`, {state: newState});
}