export default class RouterConstants {
  // Customer router paths
  static CUSTOMER_ROOT_PATH = "/customer";
  static BOOKING_ROUTER_PATH = `${this.CUSTOMER_ROOT_PATH}/bookings`;
  static BOOKING_MENU_ROUTER_PATH = `${this.BOOKING_ROUTER_PATH}/menus`;
  static BOOKING_OPTION_ROUTER_PATH = `${this.BOOKING_ROUTER_PATH}/options`;
  static BOOKING_CALENDAR_ROUTER_PATH = `${this.BOOKING_ROUTER_PATH}/calendar`;
  static PERSONAL_INFO_ROUTER_PATH = `${this.BOOKING_ROUTER_PATH}/personal-info`;
  static CONTENT_CONFIRMATION_ROUTER_PATH = `${this.BOOKING_ROUTER_PATH}/content-confirmation`;
  static BOOKING_SUCCESS_ROUTER_PATH = `${this.BOOKING_ROUTER_PATH}/booking-success`;
  static BOOKING_HISTORY_ROUTER_PATH = `${this.CUSTOMER_ROOT_PATH}/booking-history`;

  // Customer router names
  static CUSTOMER_ROUTER_NAME = "Customer";
  static BOOKING_ROUTER_NAME = "Customer Bookings";
  static BOOKING_MENU_ROUTER_NAME = "Customer Menu Bookings";
  static BOOKING_OPTION_ROUTER_NAME = "Customer Option Bookings";
  static BOOKING_CALENDAR_ROUTER_NAME = "Customer Calendar Bookings";
  static PERSONAL_INFO_ROUTER_NAME = "Personal Information";
  static CONTENT_CONFIRMATION_ROUTER_NAME = "Content Confirmation";
  static BOOKING_SUCCESS_ROUTER_NAME = "Booking Success";
  static BOOKING_HISTORY_ROUTER_NAME = "Booking History";
}
