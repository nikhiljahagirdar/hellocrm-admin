

import SpkBadge from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge";
import * as Svgicons from "./menusvg-icons";

const badgePrimary = <SpkBadge variant="" Customclass="bg-primary-transparent ms-2">9</SpkBadge>
const badgeSucccess = <SpkBadge variant="" Customclass="bg-success-transparent ms-2">6</SpkBadge>
const badgeWarning = <SpkBadge variant="" Customclass="bg-warning-transparent ms-2">5</SpkBadge>
const badgeInfo = <SpkBadge variant="" Customclass="bg-info-transparent ms-2">4</SpkBadge>
const badgedanger = <SpkBadge variant="" Customclass="bg-danger-transparent ms-2">6</SpkBadge>
const badgeSuccess = <SpkBadge variant="" Customclass="bg-success-transparent ms-2">8</SpkBadge>

export const MENUITEMS: any = [

  {
     menutitle:'SUPER ADMIN NAVIGATION MENU'
  },
  {
    title: "Dashboard", icon: Svgicons.Dashboardicon, path: "/dashboards/crm/dashboard", type: "link", active: false, selected: false, dirchange: false
  },
  {
    title: "Businesses", icon: Svgicons.Applicationicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/businesses", type: "link", active: false, selected: false, dirchange: false, title: "Manage Businesses", icon: Svgicons.Crmicon },
      { path: "/business-users", type: "link", active: false, selected: false, dirchange: false, title: "Business Users", icon: Svgicons.Hrmicon },
      { path: "/impersonation-logs", type: "link", active: false, selected: false, dirchange: false, title: "Impersonation Logs", icon: Svgicons.Timelineicon }
    ]
  },
  {
    title: "Plans", icon: Svgicons.Pagesicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/plans", type: "link", active: false, selected: false, dirchange: false, title: "Plans", icon: Svgicons.Pricingicon },
      { path: "/plan-features", type: "link", active: false, selected: false, dirchange: false, title: "Plan Features", icon: Svgicons.Elementsicon },
      { path: "/plan-addons", type: "link", active: false, selected: false, dirchange: false, title: "Plan Addons", icon: Svgicons.Utilitiesicon }
    ]
  },
  {
    title: "Credits", icon: Svgicons.Generalicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      {
        title: "Storage Credits", type: "sub", active: false, selected: false, dirchange: false, icon: Svgicons.Stockicon, children: [
          { path: "/storage-credits/purchases", type: "link", active: false, selected: false, dirchange: false, title: "Purchases"},
          { path: "/storage-credits/balance", type: "link", active: false, selected: false, dirchange: false, title: "Balance"},
          { path: "/storage-credits/logs", type: "link", active: false, selected: false, dirchange: false, title: "Usage Logs" }
        ]
      },
      {
        title: "Message Credits", type: "sub", active: false, selected: false, dirchange: false, icon: Svgicons.Chaticon, children: [
          { path: "/message-credits/types", type: "link", active: false, selected: false, dirchange: false, title: "Credit Types" },
          { path: "/message-credits/pricing", type: "link", active: false, selected: false, dirchange: false, title: "Pricing" },
          { path: "/message-credits/purchases", type: "link", active: false, selected: false, dirchange: false, title: "Purchases"},
          { path: "/message-credits/balance", type: "link", active: false, selected: false, dirchange: false, title: "Balance" },
          { path: "/message-credits/logs", type: "link", active: false, selected: false, dirchange: false, title: "Usage Logs" }
        ]
      }
    ]
  },
  {
    title: "Announcements", icon: Svgicons.Blogicon, path: "/announcements", type: "link", active: false, selected: false, dirchange: false
  },
  {
    title: "Support", icon: Svgicons.Sweeticon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/support-tickets", type: "link", active: false, selected: false, dirchange: false, title: "Support Tickets", icon: Svgicons.Taskicon }
    ]
  },
  {
    title: "Masters", icon: Svgicons.Tablesicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      {
        title: "Property & Project", type: "sub", active: false, selected: false, dirchange: false, icon: Svgicons.Projectsicon, children: [
          { path: "/masters/project-types", type: "link", active: false, selected: false, dirchange: false, title: "Project Types" },
          { path: "/masters/building-types", type: "link", active: false, selected: false, dirchange: false, title: "Building Types" },
          { path: "/masters/project-highlights", type: "link", active: false, selected: false, dirchange: false, title: "Project Highlights" },
          { path: "/masters/project-authorities", type: "link", active: false, selected: false, dirchange: false, title: "Project Authorities"},
          { path: "/masters/property-configurations", type: "link", active: false, selected: false, dirchange: false, title: "Property Configurations" },
          { path: "/masters/property-transactions", type: "link", active: false, selected: false, dirchange: false, title: "Property Transactions" },
          { path: "/masters/property-deposits", type: "link", active: false, selected: false, dirchange: false, title: "Property Deposits" },
          { path: "/masters/furnishing-types", type: "link", active: false, selected: false, dirchange: false, title: "Furnishing Types" },
          { path: "/masters/measurement-units", type: "link", active: false, selected: false, dirchange: false, title: "Measurement Units" }
        ]
      },
      {
        title: "CRM & Leads", type: "sub", active: false, selected: false, dirchange: false, icon: Svgicons.Crmicon, children: [
          { path: "/masters/lead-status", type: "link", active: false, selected: false, dirchange: false, title: "Lead Status" },
          { path: "/masters/lead-sources", type: "link", active: false, selected: false, dirchange: false, title: "Lead Sources" },
          { path: "/masters/lead-tags", type: "link", active: false, selected: false, dirchange: false, title: "Lead Tags" },
          { path: "/masters/task-types", type: "link", active: false, selected: false, dirchange: false, title: "Task Types" },
          { path: "/masters/priorities", type: "link", active: false, selected: false, dirchange: false, title: "Priorities" },
          { path: "/masters/note-types", type: "link", active: false, selected: false, dirchange: false, title: "Note Types"},
          { path: "/masters/offer-tags", type: "link", active: false, selected: false, dirchange: false, title: "Offer Tags"}
        ]
      },
      {
        title: "Media & User", type: "sub", active: false, selected: false, dirchange: false, icon: Svgicons.Galleryicon, children: [
          { path: "/masters/media-types", type: "link", active: false, selected: false, dirchange: false, title: "Media Types" },
          { path: "/masters/amenities", type: "link", active: false, selected: false, dirchange: false, title: "Amenities" },
          { path: "/masters/user-roles", type: "link", active: false, selected: false, dirchange: false, title: "User Roles" }
        ]
      },
      {
        title: "System & Credits", type: "sub", active: false, selected: false, dirchange: false, icon: Svgicons.Advancedicon, children: [
          { path: "/masters/settings", type: "link", active: false, selected: false, dirchange: false, title: "Settings"},
          { path: "/masters/db-backups", type: "link", active: false, selected: false, dirchange: false, title: "DB Backups" },
          { path: "/masters/holidays", type: "link", active: false, selected: false, dirchange: false, title: "Holidays"},
          { path: "/masters/message-credit-types", type: "link", active: false, selected: false, dirchange: false, title: "Message Credit Types" },
          { path: "/masters/message-credit-pricing", type: "link", active: false, selected: false, dirchange: false, title: "Message Credit Pricing" },
          { path: "/masters/storage-credit-plans", type: "link", active: false, selected: false, dirchange: false, title: "Storage Credit Plans"},
          { path: "/masters/plan-features", type: "link", active: false, selected: false, dirchange: false, title: "Plan Features Master"},
          { path: "/masters/plan-addons", type: "link", active: false, selected: false, dirchange: false, title: "Plan Addons Master" }
        ]
      }
    ]
  },
  {
    title: "Logs & Monitoring", icon: Svgicons.Chartsicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/logs/legal-documents", type: "link", active: false, selected: false, dirchange: false, title: "Legal Documents", icon: Svgicons.Termsicon },
      { path: "/logs/legal-acceptance", type: "link", active: false, selected: false, dirchange: false, title: "Legal Acceptance Logs", icon: Svgicons.Timelineicon },
      { path: "/logs/audit", type: "link", active: false, selected: false, dirchange: false, title: "Audit Logs", icon: Svgicons.Timelineicon },
      { path: "/logs/attendance", type: "link", active: false, selected: false, dirchange: false, title: "Attendance", icon: Svgicons.Hrmicon },
      { path: "/logs/attendance-settings", type: "link", active: false, selected: false, dirchange: false, title: "Attendance Settings", icon: Svgicons.Utilitiesicon },
      { path: "/logs/impersonation", type: "link", active: false, selected: false, dirchange: false, title: "Admin Impersonation Logs", icon: Svgicons.Timelineicon }
    ]
  },

]