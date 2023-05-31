export interface Vendors {
  officeLocation: String;
  imageProductShowCase: String;
  email: String;
  user: any;
  brandName: String;
  contactNumber: String;
  socialMediaHandles: String;
  category: String;
  brandDescription: String;
  priceRange: String;
  weeklyAvaliability: Boolean;
}
export interface UserReg {
  firstName: String;
  lastName: String;
  email: String;
  phoneNumber: String;
  contactAdress: String;
  password: String;
  confirmPassword: String;
}
export interface UserLogin {
  email: String;

  password: String;
}
export interface EvenTAddress {
  eventLocation: String;
  city: String;
  eventType: String;
  eventDate: String;
  eventTime: String;
  eventDuration: String;
}
export interface OrderItem {
  brandName: string;
  priceAgreed: number;
  image: string;
  product: string;
  // Add other fields if needed
}
// export const dummyEmployeList: IEmployee[] = [
//   {
//     id: new Date().toJSON().toString(),
//     firstName: "Dummy1",
//     lastName: "emeka",
//     email: "djnchrys@yahoo.com",
//   },
// ];

export enum PageEnum {
  list,
  add,
  edith,
}
