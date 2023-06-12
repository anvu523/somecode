import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@/clinic/views/Login.vue";
import Dashboard from "@/clinic/views/Dashboard.vue";
import Campaign from "@/clinic/views/Campaign.vue";
import MainContent from "@/clinic/views/MainContent.vue";
import ClinicRouterConstants from "@/clinic/constants/router.constants";
import Booking from "@/clinic/views/BookingList.vue";
import CampaignResult from "@/clinic/views/CampaignResult.vue";
import Customer from "@/clinic/views/CustomerList.vue";
import CustomerDetail from "@/clinic/views/CustomerDetail.vue";
import Setting from "@/clinic/views/Setting.vue";
import SegmentWorkflow from "@/clinic/views/SegmentWorkflow.vue";
import RichMenu from "@/clinic/views/RichMenu.vue";
import RichMenuRegistration from "@/clinic/views/RichMenuRegistration.vue";
import MessageNew from "@/clinic/views/MessageNew.vue";
import MessageList from "@/clinic/views/MessageList.vue";
import DirectMessage from "@/clinic/views/DirectMessage.vue";
// Customer imports
import CustomerRouterConstants from "@/customer/constants/router.constants";
import CustomerMainContent from "@/customer/views/MainContent.vue";
import CustomerBookingWrapper from "@/customer/views/BookingWrapper.vue";
import CustomerBooking from "@/customer/components/Booking.vue";
import CustomerBookingMenu from "@/customer/components/BookingMenu.vue";
import CustomerBookingOption from "@/customer/components/BookingOption.vue";
import CustomerBookingCalendar from "@/customer/components/BookingCalendar.vue";
import PersonalInfo from "@/customer/components/PersonalInfo.vue";
import ContentConfirmation from "@/customer/components/ContentConfirmation.vue";
import BookingSuccess from "@/customer/components/BookingSuccess.vue";
import BookingHistory from "@/customer/components/BookingHistory.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: ClinicRouterConstants.LOGIN_ROUTER_PATH },
  {
    path: ClinicRouterConstants.LOGIN_ROUTER_PATH,
    name: ClinicRouterConstants.LOGIN_ROUTER_NAME,
    component: Login,
  },
  {
    path: ClinicRouterConstants.CLINIC_ROOT_ROUTER_PATH,
    component: MainContent,
    children: [
      {
        path: ClinicRouterConstants.DASHBOARD_ROUTER_PATH,
        name: ClinicRouterConstants.DASHBOARD_ROUTER_NAME,
        component: Dashboard,
      },
      {
        path: ClinicRouterConstants.BOOKING_ROUTER_ROUTER_PATH,
        name: ClinicRouterConstants.BOOKING_ROUTER_NAME,
        component: Booking,
      },
      {
        path: ClinicRouterConstants.CAMPAIGN_ROUTER_PATH,
        name: ClinicRouterConstants.CAMPAIGN_ROUTER_NAME,
        component: Campaign,
      },
      {
        path: ClinicRouterConstants.CAMPAIGN_RESULT_ROUTER_PATH,
        name: ClinicRouterConstants.CAMPAIGN_RESULT_ROUTER_NAME,
        component: CampaignResult,
      },
      {
        path: ClinicRouterConstants.CUSTOMER_ROUTER_ROUTER_PATH,
        name: ClinicRouterConstants.CUSTOMER_ROUTER_NAME,
        component: Customer,
      },
      {
        path: ClinicRouterConstants.CUSTOMER_DETAIL_ROUTER_PATH,
        name: ClinicRouterConstants.CUSTOMER_DETAIL_ROUTER_NAME,
        component: CustomerDetail,
      },
      {
        path: ClinicRouterConstants.SETTING_ROUTER_ROUTER_PATH,
        name: ClinicRouterConstants.SETTING_ROUTER_NAME,
        component: Setting,
      },
      {
        path: ClinicRouterConstants.SEGMENT_WORKFLOW_ROUTER_PATH,
        name: ClinicRouterConstants.SEGMENT_WORKFLOW_ROUTER_NAME,
        component: SegmentWorkflow,
      },
      {
        path: ClinicRouterConstants.RICH_MENU_ROUTER_PATH,
        name: ClinicRouterConstants.RICH_MENU_ROUTER_NAME,
        component: RichMenu,
      },
      {
        path: ClinicRouterConstants.RICH_MENU_REGISTRATION_ROUTER_PATH,
        name: ClinicRouterConstants.RICH_MENU_REGISTRATION_ROUTER_NAME,
        component: RichMenuRegistration,
      },
      {
        path: ClinicRouterConstants.MESSAGE_NEW_ROUTER_PATH,
        name: ClinicRouterConstants.MESSAGE_NEW_ROUTER_NAME,
        component: MessageNew,
      },
      {
        path: ClinicRouterConstants.MESSAGE_ROUTER_PATH,
        name: ClinicRouterConstants.MESSAGE_ROUTER_NAME,
        component: MessageList,
      },
      {
        path: ClinicRouterConstants.DIRECT_MESSAGE_ROUTER_PATH,
        name: ClinicRouterConstants.DIRECT_MESSAGE_ROUTER_NAME,
        component: DirectMessage,
      },
    ],
  },
  {
    path: CustomerRouterConstants.CUSTOMER_ROOT_PATH,
    name: CustomerRouterConstants.CUSTOMER_ROUTER_NAME,
    component: CustomerMainContent,
    redirect: CustomerRouterConstants.BOOKING_ROUTER_PATH,
    children: [
      {
        path: CustomerRouterConstants.BOOKING_HISTORY_ROUTER_PATH,
        name: CustomerRouterConstants.BOOKING_HISTORY_ROUTER_NAME,
        component: BookingHistory,
      },
      {
        path: CustomerRouterConstants.BOOKING_ROUTER_PATH,
        component: CustomerBookingWrapper,
        children: [
          {
            path: CustomerRouterConstants.BOOKING_ROUTER_PATH,
            name: CustomerRouterConstants.BOOKING_ROUTER_NAME,
            component: CustomerBooking,
          },
          {
            path: CustomerRouterConstants.BOOKING_MENU_ROUTER_PATH,
            name: CustomerRouterConstants.BOOKING_MENU_ROUTER_NAME,
            component: CustomerBookingMenu,
          },
          {
            path: CustomerRouterConstants.BOOKING_OPTION_ROUTER_PATH,
            name: CustomerRouterConstants.BOOKING_OPTION_ROUTER_NAME,
            component: CustomerBookingOption,
          },
          {
            path: CustomerRouterConstants.BOOKING_CALENDAR_ROUTER_PATH,
            name: CustomerRouterConstants.BOOKING_CALENDAR_ROUTER_NAME,
            component: CustomerBookingCalendar,
          },
          {
            path: CustomerRouterConstants.PERSONAL_INFO_ROUTER_PATH,
            name: CustomerRouterConstants.PERSONAL_INFO_ROUTER_NAME,
            component: PersonalInfo,
          },
          {
            path: CustomerRouterConstants.CONTENT_CONFIRMATION_ROUTER_PATH,
            name: CustomerRouterConstants.CONTENT_CONFIRMATION_ROUTER_NAME,
            component: ContentConfirmation,
          },
          {
            path: CustomerRouterConstants.BOOKING_SUCCESS_ROUTER_PATH,
            name: CustomerRouterConstants.BOOKING_SUCCESS_ROUTER_NAME,
            component: BookingSuccess,
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
