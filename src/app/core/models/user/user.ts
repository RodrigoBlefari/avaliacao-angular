export interface User {
  id?: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  gender?: string;
  email?: string;
  dateOfBirth?: string;
  phone?: string;
  location?: Location;
  registerDate?: string;
  updatedDate?: string;
  active?: boolean;
}
export interface Location {
  street: string;
  city: string;
  state: string;
  country: string;
  timezone: string;
}
