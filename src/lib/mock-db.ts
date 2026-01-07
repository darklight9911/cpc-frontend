// Basic in-memory mock DB
// In a real app, this would be a proper database connection (Postgres, MongoDB, etc.)

export interface User {
    id: string;
    name: string;
    uni_id: string;
    email: string;
    passwordHash: string;
    createdAt: Date;
    profilePictureUrl: string;
    status: 'active' | 'suspended';
}

export interface OTP {
    email: string;
    code: string;
    expiresAt: Date;
}

class MockDB {
    private users: User[] = [];
    private otps: OTP[] = [];

    // User Methods
    async findUserByEmail(email: string): Promise<User | undefined> {
        return this.users.find(u => u.email === email);
    }

    async findUserByUniId(uniId: string): Promise<User | undefined> {
        return this.users.find(u => u.uni_id === uniId);
    }

    async createUser(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }

    // OTP Methods
    async createOTP(email: string, code: string): Promise<void> {
        // Remove existing OTPs for this email
        this.otps = this.otps.filter(o => o.email !== email);
        // Add new OTP (expires in 5 minutes)
        this.otps.push({
            email,
            code,
            expiresAt: new Date(Date.now() + 5 * 60 * 1000),
        });
    }

    async verifyOTP(email: string, code: string): Promise<boolean> {
        const otp = this.otps.find(o => o.email === email && o.code === code);
        if (!otp) return false;

        if (new Date() > otp.expiresAt) {
            // OTP expired
            this.otps = this.otps.filter(o => o.email !== email); // Clean up
            return false;
        }

        // OTP valid
        this.otps = this.otps.filter(o => o.email !== email); // Consume OTP
        return true;
    }
}

// Singleton instance
export const db = new MockDB();
