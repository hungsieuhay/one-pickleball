/**
 * Type Definitions
 * Centralized type definitions for the application
 */

// User Types
export interface User {
    id: string;
    email: string;
    name: string;
    phone?: string;
    avatar?: string;
    role: 'player' | 'organizer' | 'admin';
    createdAt: string;
    updatedAt: string;
}

// Tournament Types
export interface Tournament {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
    registrationDeadline: string;
    maxParticipants: number;
    currentParticipants: number;
    entryFee: number;
    imageUrl?: string;
    organizerId: string;
    categories: TournamentCategory[];
}

export interface TournamentCategory {
    id: string;
    name: string;
    gender: 'male' | 'female' | 'mixed';
    ageGroup?: string;
    skillLevel?: string;
    maxTeams: number;
}

// Court Types
export interface Court {
    id: string;
    name: string;
    address: string;
    type: 'indoor' | 'outdoor';
    numberOfCourts: number;
    pricePerHour: number;
    amenities: string[];
    images: string[];
    rating: number;
    openingHours: {
        open: string;
        close: string;
    };
    location: {
        latitude: number;
        longitude: number;
    };
}

// Booking Types
export interface Booking {
    id: string;
    courtId: string;
    userId: string;
    date: string;
    startTime: string;
    endTime: string;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    totalPrice: number;
    paymentMethod?: string;
    notes?: string;
    createdAt: string;
}

// News Types
export interface News {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    category: 'tournament' | 'training' | 'player' | 'equipment';
    imageUrl?: string;
    author: string;
    publishedAt: string;
    views: number;
    tags: string[];
}

// API Response Types
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
}

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}

// Form Types
export interface LoginForm {
    email: string;
    password: string;
}

export interface RegisterForm {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    phone?: string;
}

export interface BookingForm {
    courtId: string;
    date: string;
    startTime: string;
    endTime: string;
    notes?: string;
}
