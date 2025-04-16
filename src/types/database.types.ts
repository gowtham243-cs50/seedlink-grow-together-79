export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at?: string
          // Add other profile fields here
        }
        Insert: {
          id: string
          // Add other insert fields
        }
        Update: {
          id?: string
          // Add other update fields
        }
      }
      investments: {
        // ... existing investment type definitions
      }
      spvs: {
        // ... existing spv type definitions
      }
    }
  }
}