interface Deal {
    id: number;
    imgSrc: string;
    title: string;
    price: string;
    company: string;
    date: string;
  }
  
export const PrimaryDeal: Deal[] = [
    {
      id: 1,
      imgSrc: "../../../assets/images/faces/12.jpg",
      title: "Service Upgrade",
      price: "$5000",
      company: "Spruko Technologies",
      date: "24, Jun 2024 - 12:45PM",
    },
    {
      id: 2,
      imgSrc: "../../../assets/images/faces/5.jpg",
      title: "Product Demo",
      price: "$50,000",
      company: "Acme Corporation LTD",
      date: "18, Apr 2024 - 11:22AM",
    },
    {
      id: 3,
      imgSrc: "../../../assets/images/faces/15.jpg",
      title: "Website Redesign",
      price: "$20,000",
      company: "Embark Technologies",
      date: "12, Jul 2024 - 10:15AM",
    },
    {
      id: 4,
      imgSrc: "../../../assets/images/faces/6.jpg",
      title: "Consulting Services",
      price: "$10,000",
      company: "Adam Johnson",
      date: "29, Jul 2024 - 4:45PM",
    },
];

export const WarningDeal: Deal[] = [
    {
      id: 1,
      imgSrc: "../../../assets/images/faces/11.jpg",
      title: "Event Sponsorship",
      price: "$10,000",
      company: "Initech Info",
      date: "21, May 2024 - 10:25AM",
    },
    {
      id: 2,
      imgSrc: "../../../assets/images/faces/11.jpg",
      title: "Sales Training",
      price: "$6,000",
      company: "Soylent Corp",
      date: "10, May 2024 - 9:20AM",
    },
    {
      id: 3,
      imgSrc: "../../../assets/images/faces/14.jpg",
      title: "Content Creation",
      price: "$3,000",
      company: "Hooli Technologies",
      date: "25, Aug 2024 - 3:38PM",
    },
];

export const SuccessDeal: Deal[] = [
    {
      id: 1,
      imgSrc: "../../../assets/images/faces/3.jpg",
      title: "E-commerce Integration",
      price: "$12,000",
      company: "Spice Infotech",
      date: "15, Sep 2024 - 8:32PM",
    },
    {
      id: 2,
      imgSrc: "../../../assets/images/faces/16.jpg",
      title: "Ad Campaign",
      price: "$5,500",
      company: "Umbrella Corp",
      date: "17, Jun 2024 - 10:54AM",
    },
];

export const InfoDeal: Deal[] = [
    {
      id: 1,
      imgSrc: "../../../assets/images/faces/10.jpg",
      title: "Webinar Series",
      price: "$9,500",
      company: "Massive Dynamic",
      date: "16, May 2024 - 11:22AM",
    },
    {
      id: 2,
      imgSrc: "../../../assets/images/faces/13.jpg",
      title: "SEO Audit",
      price: "$3,000",
      company: "Logitech Ecostics",
      date: "27, Apr 2024 - 5:15PM",
    },
    {
      id: 3,
      imgSrc: "../../../assets/images/faces/8.jpg",
      title: "Loyalty Program",
      price: "$12,000",
      company: "Globex Corp",
      date: "26, Jul 2024 - 5:28AM",
    },
    {
      id: 4,
      imgSrc: "../../../assets/images/faces/9.jpg",
      title: "CRM Integration",
      price: "$10,000",
      company: "CrystalClear Consulting",
      date: "14, May 2024 - 11:29PM",
    },
];

export const DangerDeals: Deal[] = [
    {
      id: 1,
      imgSrc: "../../../assets/images/faces/16.jpg",
      title: "Media Analytics",
      price: "$9,000",
      company: "GlobalConnect",
      date: "18, Mar 2024 - 2:32PM",
    },
    {
      id: 2,
      imgSrc: "../../../assets/images/faces/21.jpg",
      title: "Lead Nurturing Strategy",
      price: "$4,000",
      company: "AlphaTech Solutions",
      date: "16, Jul 2024 - 7:53AM",
    },
    {
      id: 3,
      imgSrc: "../../../assets/images/faces/2.jpg",
      title: "Newsletter Campaign",
      price: "$2,500",
      company: "CoreTech Solutions",
      date: "12, May 2024 - 10:22AM",
    },
    {
      id: 4,
      imgSrc: "../../../assets/images/faces/17.jpg",
      title: "Graphic Design",
      price: "$5,000",
      company: "TechPro Services",
      date: "10, Jul 2024 - 10:15PM",
    },
    {
      id: 5,
      imgSrc: "../../../assets/images/faces/18.jpg",
      title: "Website Maintenance",
      price: "$7,500",
      company: "RedRock Industries",
      date: "30, Jul 2024 - 6:30AM",
    },
];

export const PinkDeals: Deal[] = [
    {
      id: 1,
      imgSrc: "../../../assets/images/faces/1.jpg",
      title: "CRM Training",
      price: "$4,200",
      company: "BlueSky Industries",
      date: "15, May 2024 - 8:20AM",
    },
    {
      id: 2,
      imgSrc: "../../../assets/images/faces/10.jpg",
      title: "Market Research",
      price: "$10,500",
      company: "BrightStar Solutions",
      date: "28, Jun 2024 - 9:27PM",
    },
];

interface DealCard {
    id: number;
    label: string;
    badgeText: string;
    labelClass: string;
    amount: string;
    amountStyle: string; 
  }
export const dealCards: DealCard[] = [
    {
      id: 1,
      label: 'Leads Discovered',
      labelClass: 'lead-discovered',
      badgeText: '24 Leads',
      amount: '$25,238',
      amountStyle: 'text-primary',
    },
    {
      id: 2,
      label: 'Qualified Leads',
      labelClass: 'lead-qualified',
      badgeText: '17 Leads',
      amount: '$32,453',
      amountStyle: 'text-warning',
    },
    {
      id: 3,
      label: 'Contact Initiated',
      labelClass: 'contact-initiated',
      badgeText: '5 Leads',
      amount: '$13,756',
      amountStyle: 'text-success',
    },
    {
      id: 4,
      label: 'Needs Identified',
      labelClass: 'need-identified',
      badgeText: '43 Leads',
      amount: '$47,093',
      amountStyle: 'text-info',
    },
    {
      id: 5,
      label: 'Negotiation',
      labelClass: 'negotiation',
      badgeText: '15 Leads',
      amount: '$26,146',
      amountStyle: 'text-danger',
    },
    {
      id: 6,
      label: 'Deal Finalized',
      labelClass: 'deal-finalized',
      badgeText: '127 Deals',
      amount: '$1,74,679',
      amountStyle: 'text-secondary',
    }
  ];
    
  