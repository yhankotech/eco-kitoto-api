declare namespace NodeJS {
    
    interface ProcessEnv {
        API_NODE_ENV: 'development' | 'production' | 'test'
        API_PORT: string
        DATABASE_URL: string
    }
}