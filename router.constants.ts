export default class RouterConstants {
  // Common routers path
  static LOGIN_ROUTER_PATH = "/login";
  static CLINIC_ROOT_ROUTER_PATH = "/clinic";
  static DASHBOARD_ROUTER_PATH = `${this.CLINIC_ROOT_ROUTER_PATH}/dashboard`;
  static CAMPAIGN_ROUTER_PATH = `${this.CLINIC_ROOT_ROUTER_PATH}/campaigns`;
  static CAMPAIGN_RESULT_ROUTER_PATH = `${this.CLINIC_ROOT_ROUTER_PATH}/campaigns/123`;
  static BOOKING_ROUTER_ROUTER_PATH = `${this.CLINIC_ROOT_ROUTER_PATH}/bookings`;
  static CUSTOMER_ROUTER_ROUTER_PATH = `${this.CLINIC_ROOT_ROUTER_PATH}/customers`;
  static CUSTOMER_CREATE_ROUTER_PATH = `${this.CLINIC_ROOT_ROUTER_PATH}/customers/new`;
  static CUSTOMER_DETAIL_ROUTER_PATH = `${this.CLINIC_ROOT_ROUTER_PATH}/customers/:id`;
  static SETTING_ROUTER_ROUTER_PATH = `${this.CLINIC_ROOT_ROUTER_PATH}/settings`;
  static SEGMENT_WORKFLOW_ROUTER_PATH = `${this.CLINIC_ROOT_ROUTER_PATH}/segment-workflows`;
  static RICH_MENU_ROUTER_PATH = `${this.CLINIC_ROOT_ROUTER_PATH}/rich-menu`;
  static RICH_MENU_REGISTRATION_ROUTER_PATH = `${this.CLINIC_ROOT_ROUTER_PATH}/rich-menu/new`;
  static MESSAGE_NEW_ROUTER_PATH = `${this.CLINIC_ROOT_ROUTER_PATH}/messages/new`;
  static MESSAGE_ROUTER_PATH = `${this.CLINIC_ROOT_ROUTER_PATH}/messages`;
  static DIRECT_MESSAGE_ROUTER_PATH = `${this.CLINIC_ROOT_ROUTER_PATH}/direct_messages`;

  // Router name
  static LOGIN_ROUTER_NAME = "Login";
  static DASHBOARD_ROUTER_NAME = "Dashboard";
  static BOOKING_ROUTER_NAME = "Bookings";
  static CAMPAIGN_ROUTER_NAME = "Campaigns";
  static CAMPAIGN_RESULT_ROUTER_NAME = "Campaign Result";
  static CUSTOMER_ROUTER_NAME = "Customers";
  static CUSTOMER_DETAIL_ROUTER_NAME = "Customer Detail";
  static SETTING_ROUTER_NAME = "Settings";
  static SEGMENT_WORKFLOW_ROUTER_NAME = "Segment Workflow";
  static RICH_MENU_ROUTER_NAME = "Rich Menu";
  static RICH_MENU_REGISTRATION_ROUTER_NAME = "Rich Menu Registration";
  static MESSAGE_NEW_ROUTER_NAME = "Message New";
  static MESSAGE_ROUTER_NAME = "Message";
  static DIRECT_MESSAGE_ROUTER_NAME = "Direct Message";
}
