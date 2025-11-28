/**
 * API Client
 * Base HTTP client for making API requests
 */

import AppConfig from '@/config/app.config';
import { ApiResponse } from '@/types';

class ApiClient {
    private baseUrl: string;
    private timeout: number;

    constructor() {
        this.baseUrl = AppConfig.api.baseUrl;
        this.timeout = AppConfig.api.timeout;
    }

    /**
     * Get authentication token from storage
     */
    private async getAuthToken(): Promise<string | null> {
        // TODO: Implement token retrieval from AsyncStorage
        return null;
    }

    /**
     * Build headers for API requests
     */
    private async buildHeaders(): Promise<HeadersInit> {
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
        };

        const token = await this.getAuthToken();
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        return headers;
    }

    /**
     * Make a GET request
     */
    async get<T>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
        try {
            const url = new URL(`${this.baseUrl}${endpoint}`);
            if (params) {
                Object.keys(params).forEach(key =>
                    url.searchParams.append(key, params[key])
                );
            }

            const response = await fetch(url.toString(), {
                method: 'GET',
                headers: await this.buildHeaders(),
            });

            return await this.handleResponse<T>(response);
        } catch (error) {
            return this.handleError(error);
        }
    }

    /**
     * Make a POST request
     */
    async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                method: 'POST',
                headers: await this.buildHeaders(),
                body: JSON.stringify(data),
            });

            return await this.handleResponse<T>(response);
        } catch (error) {
            return this.handleError(error);
        }
    }

    /**
     * Make a PUT request
     */
    async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                method: 'PUT',
                headers: await this.buildHeaders(),
                body: JSON.stringify(data),
            });

            return await this.handleResponse<T>(response);
        } catch (error) {
            return this.handleError(error);
        }
    }

    /**
     * Make a DELETE request
     */
    async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                method: 'DELETE',
                headers: await this.buildHeaders(),
            });

            return await this.handleResponse<T>(response);
        } catch (error) {
            return this.handleError(error);
        }
    }

    /**
     * Handle API response
     */
    private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
        const data = await response.json();

        if (response.ok) {
            return {
                success: true,
                data: data,
            };
        } else {
            return {
                success: false,
                error: data.message || 'An error occurred',
            };
        }
    }

    /**
     * Handle errors
     */
    private handleError(error: any): ApiResponse<any> {
        console.error('API Error:', error);
        return {
            success: false,
            error: error.message || 'Network error occurred',
        };
    }
}

export default new ApiClient();
