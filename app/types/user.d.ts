export interface UserAttributes {
    id: bigint;
    name: string;
    created_at: Date;
    updated_at: Date;
  }
  
  export type UserCreationAttributes = Pick<
  UserAttributes, 
  'name'
  >;
  