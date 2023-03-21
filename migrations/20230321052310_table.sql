-- Add migration script here
CREATE TABLE IF NOT EXISTS "table" (
    id UUID PRIMARY KEY,
    name VARCHAR NOT NULL UNIQUE,
    location VARCHAR NOT NULL,
    created_by UUID NOT NULL REFERENCES account(id),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL default CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL default CURRENT_TIMESTAMP
);
