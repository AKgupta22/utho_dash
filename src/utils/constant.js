export const logoUrl =
  "https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg";

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const sericeGrowthConfig = {
  data: [
    { month: "January", cloud: 30, shared: 20, dedicated: 15 },
    { month: "February", cloud: 20, shared: 25, dedicated: 10 },
    { month: "March", cloud: 50, shared: 40, dedicated: 30 },
    { month: "April", cloud: 40, shared: 30, dedicated: 20 },
    { month: "May", cloud: 35, shared: 45, dedicated: 25 },
    { month: "June", cloud: 25, shared: 35, dedicated: 20 },
    { month: "July", cloud: 45, shared: 40, dedicated: 35 },
    { month: "August", cloud: 60, shared: 55, dedicated: 45 },
    { month: "September", cloud: 55, shared: 50, dedicated: 40 },
    { month: "October", cloud: 70, shared: 60, dedicated: 50 },
    { month: "November", cloud: 65, shared: 55, dedicated: 45 },
    { month: "December", cloud: 80, shared: 70, dedicated: 60 },
  ],
  xDataKey: "month",
  barData: [
    {
      dataKey: "cloud",
      stackId: "a",
      color: "#8884d8",
    },
    {
      dataKey: "shared",
      stackId: "a",
      color: "#82ca9d",
    },
    {
      dataKey: "dedicated",
      stackId: "a",
      color: "#ffc658",
    },
  ],
};

export const userGrowthConfig = {
  data: [
    { month: "January", users: 30 },
    { month: "February", users: 20 },
    { month: "March", users: 50 },
    { month: "April", users: 40 },
    { month: "May", users: 35 },
    { month: "June", users: 25 },
    { month: "July", users: 45 },
    { month: "August", users: 60 },
    { month: "September", users: 55 },
    { month: "October", users: 70 },
    { month: "November", users: 65 },
    { month: "December", users: 80 },
  ],
  xDataKey: "month",
  lineData: [
    {
      dataKey: "users",
      type: "monotone",
      color: "#82ca9d",
      activeDot: { r: 4 },
    },
  ],
};

export const initialServiceData = [
  {
    id: crypto.randomUUID(),
    serviceName: "Hosting",
    status: true,
    createdDate: "2023-01-15",
  },
  {
    id: crypto.randomUUID(),
    serviceName: "Storage",
    status: false,
    createdDate: "2023-02-22",
  },
  {
    id: crypto.randomUUID(),
    serviceName: "Database",
    status: true,
    createdDate: "2023-03-10",
  },
  {
    id: crypto.randomUUID(),
    serviceName: "Email Service",
    status: false,
    createdDate: "2023-04-05",
  },
  {
    id: crypto.randomUUID(),
    serviceName: "API Gateway",
    status: true,
    createdDate: "2023-05-18",
  },
  {
    id: crypto.randomUUID(),
    serviceName: "Content Delivery",
    status: false,
    createdDate: "2023-06-12",
  },
  {
    id: crypto.randomUUID(),
    serviceName: "DNS Management",
    status: true,
    createdDate: "2023-07-20",
  },
  {
    id: crypto.randomUUID(),
    serviceName: "Security Monitoring",
    status: false,
    createdDate: "2023-08-30",
  },
  {
    id: crypto.randomUUID(),
    serviceName: "Load Balancer",
    status: true,
    createdDate: "2023-09-15",
  },
  {
    id: crypto.randomUUID(),
    serviceName: "Backup Service",
    status: false,
    createdDate: "2023-10-01",
  },
  {
    id: crypto.randomUUID(),
    serviceName: "Firewall",
    status: true,
    createdDate: "2023-10-18",
  },
  {
    id: crypto.randomUUID(),
    serviceName: "Analytics",
    status: false,
    createdDate: "2023-11-02",
  },
  {
    id: crypto.randomUUID(),
    serviceName: "Machine Learning",
    status: true,
    createdDate: "2023-11-15",
  },
  {
    id: crypto.randomUUID(),
    serviceName: "Virtual Private Cloud",
    status: false,
    createdDate: "2023-11-25",
  },
  {
    id: crypto.randomUUID(),
    serviceName: "Cloud Functions",
    status: true,
    createdDate: "2023-12-05",
  },
];

export const initialusersData = [
  {
    id: crypto.randomUUID(),
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Admin",
  },
  {
    id: crypto.randomUUID(),
    name: "Bob Smith",
    email: "bob.smith@example.com",
    role: "User",
  },
  {
    id: crypto.randomUUID(),
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    role: "Moderator",
  },
  {
    id: crypto.randomUUID(),
    name: "Daisy White",
    email: "daisy.white@example.com",
    role: "Admin",
  },
  {
    id: crypto.randomUUID(),
    name: "Edward Harris",
    email: "edward.harris@example.com",
    role: "User",
  },
  {
    id: crypto.randomUUID(),
    name: "Fiona Black",
    email: "fiona.black@example.com",
    role: "Moderator",
  },
  {
    id: crypto.randomUUID(),
    name: "George Clark",
    email: "george.clark@example.com",
    role: "User",
  },
  {
    id: crypto.randomUUID(),
    name: "Hannah Baker",
    email: "hannah.baker@example.com",
    role: "Admin",
  },
  {
    id: crypto.randomUUID(),
    name: "Ivy Green",
    email: "ivy.green@example.com",
    role: "Moderator",
  },
  {
    id: crypto.randomUUID(),
    name: "Jack Miller",
    email: "jack.miller@example.com",
    role: "User",
  },
  {
    id: crypto.randomUUID(),
    name: "Karen Davis",
    email: "karen.davis@example.com",
    role: "Admin",
  },
  {
    id: crypto.randomUUID(),
    name: "Liam Wilson",
    email: "liam.wilson@example.com",
    role: "User",
  },
  {
    id: crypto.randomUUID(),
    name: "Mia Carter",
    email: "mia.carter@example.com",
    role: "Moderator",
  },
  {
    id: crypto.randomUUID(),
    name: "Noah Lee",
    email: "noah.lee@example.com",
    role: "Admin",
  },
  {
    id: crypto.randomUUID(),
    name: "Olivia Scott",
    email: "olivia.scott@example.com",
    role: "User",
  },
];

export const usersRole = [
  { value: "Admin", label: "Admin" },
  { value: "User", label: "User" },
  { value: "Moderator", label: "Moderator" },
];

export const initialSettingData = {
  siteName: "E services",
  themeMode: "Light",
  themeColor: "#3498db",
  notificationsEnabled: true,
  defaultLanguage: "English",
  timeZone: "GMT",
  privacyMode: false,
};

import * as Yup from "yup";

export const settingValidationSchema = Yup.object({
  siteName: Yup.string()
    .min(2, "Site Name is too short!")
    .max(50, "Site Name is too long!")
    .required("Site Name is required"),
  themeMode: Yup.string().oneOf(["Light", "Dark"], "Invalid Theme Mode"),
  themeColor: Yup.string()
    .matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "Enter a valid hex color")
    .required("Theme Color is required"),
  defaultLanguage: Yup.string().required("Language is required"),
  timeZone: Yup.string().required("Time Zone is required"),
});

export const userProfileData = {
  id: "user123",
  personalInfo: {
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@example.com",
  },
  hostingPlan: {
    planName: "Basic Hosting",
    status: "Active",
    startDate: "2024-01-01",
  },
  billingInfo: {
    lastPaymentDate: "2024-01-01",
    totalPaid: "$100",
  },
};
