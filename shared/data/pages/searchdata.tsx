
//All
interface GalleryItem {
    image: string;
    logo: string;
    title: string;
    subtitle: string;
};
export const GalleryItems: GalleryItem[] = [
    {
      image: '../../assets/images/media/media-40.jpg',
      logo: '../../assets/images/company-logos/6.png',
      title: 'Tech Gadgets',
      subtitle: 'Innovative Marvels',
    },
    {
      image: '../../assets/images/media/media-41.jpg',
      logo: '../../assets/images/company-logos/2.png',
      title: 'Healthy Recipes',
      subtitle: 'Nutrient Nourish',
    },
    {
      image: '../../assets/images/media/media-42.jpg',
      logo: '../../assets/images/company-logos/4.png',
      title: 'Travel Explorer',
      subtitle: 'Global Wander',
    },
    {
      image: '../../assets/images/media/media-43.jpg',
      logo: '../../assets/images/company-logos/5.png',
      title: 'Fashion Finds',
      subtitle: 'Chic Styles',
    },
    {
      image: '../../assets/images/media/media-44.jpg',
      logo: '../../assets/images/company-logos/6.png',
      title: 'Nature Photography',
      subtitle: 'Wild Beauty',
    },
    {
      image: '../../assets/images/media/media-45.jpg',
      logo: '../../assets/images/company-logos/7.png',
      title: 'Future Tales',
      subtitle: 'Innovative Marvels',
    },
    {
      image: '../../assets/images/media/media-46.jpg',
      logo: '../../assets/images/company-logos/8.png',
      title: 'Science Fiction Books',
      subtitle: 'Future Tales',
    },
    {
      image: '../../assets/images/media/media-60.jpg',
      logo: '../../assets/images/company-logos/9.png',
      title: 'Fitness Fanatics',
      subtitle: 'Active Vibes',
    },
];

//Books
interface Book {
    imgSrc: string;
    title: string;
    subTitle: string;
    date: string;
    tags: string[];
    bgColor:string;
}
export const Books: Book[] = [
  {
    imgSrc: "../../assets/images/media/books/6.jpg",
    title: "The Great Gatsby",
    subTitle: "F. Scott Fitzgerald",
    date: "May 10, 1925",
    tags: ["Classic", "Fiction", "Jazz Age"],
    bgColor:'primary'
  },
  {
    imgSrc: "../../assets/images/media/books/1.jpg",
    title: "To Kill a Mockingbird",
    subTitle: "Harper Lee",
    date: "July 11, 1960",
    tags: ["Fiction", "Legal", "Southern Gothic"],
    bgColor:'primary'
  },
  {
    imgSrc: "../../assets/images/media/books/2.jpg",
    title: "Nineteen Eighty-Four",
    subTitle: "George Orwell",
    date: "June 8, 1949",
    tags: ["Dystopian", "Political", "Science Fiction"],
    bgColor:'primary'
  },
  {
    imgSrc: "../../assets/images/media/books/3.jpg",
    title: "The Hobbit",
    subTitle: "J.R.R. Tolkien",
    date: "September 21, 1937",
    tags: ["Fantasy", "Adventure"],
    bgColor:'primary'
  },
  {
    imgSrc: "../../assets/images/media/books/4.jpg",
    title: "The Da Vinci Code",
    subTitle: "Dan Brown",
    date: "March 18, 2003",
    tags: ["Mystery", "Thriller", "Conspiracy"],
    bgColor:'primary'
  },
  {
    imgSrc: "../../assets/images/media/books/5.jpg",
    title: "Pride and Prejudice",
    subTitle: "Jane Austen",
    date: "January 28, 1813",
    tags: ["Classic", "Romance"],
    bgColor:'primary'
  },
];

//News
interface Post {
    title: string;
    description: string;
    dateTime: string;
    href: string;
}
export const News: Post[] = [
    {
      title: "JavaScript Frameworks: What’s New in 2025?",
      description:
        "A look at the most popular JavaScript frameworks and how they are evolving in 2025. Find out what’s driving the future of web development.",
      dateTime: "March 12, 2025 - 10:00 AM",
      href: "#!",
    },
    {
      title: "React vs Vue: Which Framework Reigns Supreme?",
      description:
        "We compare React and Vue in terms of speed, scalability, and community support. Which framework is winning the 2025 battle?",
      dateTime: "March 11, 2025 - 2:30 PM",
      href: "#!",
    },
    {
      title: "Top 5 JavaScript Frameworks for Developers in 2025",
      description:
        "Discover the best frameworks every developer should know this year, from React to Svelte. Find out why each one stands out.",
      dateTime: "March 10, 2025 - 9:15 AM",
      href: "#!",
    },
    {
      title: "What’s Next for Web Development Frameworks in 2025?",
      description:
        "Explore the future of web development frameworks and what trends developers need to keep an eye on this year.",
      dateTime: "March 9, 2025 - 1:00 PM",
      href: "#!",
    },
    {
      title: "Is Svelte the Future of Web Development?",
      description:
        "With more developers switching to Svelte, we analyze its rapid growth and why it's being touted as the future of front-end frameworks.",
      dateTime: "March 8, 2025 - 4:45 PM",
      href: "#!",
    },
];
  
//Videos
interface VideoItem {
    videoUrl: string;
    title: string;
    linkText: string;
    linkUrl: string;
  }

export const VideoData: VideoItem[] = [
    {
      videoUrl: "https://www.youtube.com/embed/JP_os1DC1MQ?si=qyUJRBl7ZJBhR_P5",
      title: "YNEX - HTML Installation & Usage process",
      linkText: "https://spruko.com/demo/ynex/",
      linkUrl: "https://spruko.com/demo/ynex/",
    },
    {
      videoUrl: "https://www.youtube.com/embed/-lDlbQ7DiCI?si=-GRS_5Dco6Qc5ius",
      title: "Sash - Admin and Dashboard Multipurpose HTML Advanced Template",
      linkText: "https://spruko.com/demo/sash/",
      linkUrl: "https://spruko.com/demo/sash/",
    },
    {
      videoUrl: "https://www.youtube.com/embed/HWvHA2FY8Ok?si=Bf-6pyMAcBG-_dR0",
      title: "Valex - Bootstrap 5 Admin & Dashboard HTML Template",
      linkText: "https://www.spruko.com/demo/valex/",
      linkUrl: "https://www.spruko.com/demo/valex/",
    },
    {
      videoUrl: "https://www.youtube.com/embed/Zx1HjMhcQdE?si=Nhbu6XA2PoyAlYhy",
      title: "Azea - Admin & Dashboard Bootstrap 5 HTML5 Template",
      linkText: "https://spruko.com/demo/azea/",
      linkUrl: "https://spruko.com/demo/ynex/",
    },
    {
      videoUrl: "https://www.youtube.com/embed/prSkLfxlFDY?si=IKoJ0AUUYA9-UToN",
      title: "Uhelp - Installation Process - Helpdesk Technical Assistance Laravel Support Ticketing System",
      linkText: "https://uhelp.spruko.com/",
      linkUrl: "https://uhelp.spruko.com/",
    },
    {
      videoUrl: "https://www.youtube.com/embed/bVRW4Li8inE?si=pOpS9ep2Hn3cGL3y",
      title: "Zanex - Bootstrap 5 Admin & Dashboard HTML5 Template",
      linkText: "https://spruko.com/demo/zanex/",
      linkUrl: "https://spruko.com/demo/zanex/",
    },
    {
      videoUrl: "https://www.youtube.com/embed/HyFRnNIovUA?si=F--5ve0s5zfLuZK5",
      title: "Dayone - Bootstrap 5 HRM, Employee & Project Admin Dashboard HTML Template",
      linkText: "https://spruko.com/demo/dayone/",
      linkUrl: "https://spruko.com/demo/dayone/",
    },
    {
      videoUrl: "https://www.youtube.com/embed/Yk6xPgb3cfk?si=JmFGOtV5jjFvDCbS",
      title: "Nowa - Admin and Dashboard Multipurpose HTML Advanced Template",
      linkText: "https://spruko.com/demo/nowa/",
      linkUrl: "https://spruko.com/demo/nowa/",
    },
  ];
  
  

  